import axios from "axios";
import "dotenv/config";
import handleGoogleSheet from "./handleSheets";

declare interface IData {
  market_name: string;
  market_value: number;
}
const start = async () => {
  const options: any = {
    method: "GET",
    url: "https://csgoempire.com/api/v2/inventory/user",
    params: { app: "730" },
    headers: {
      cookie: process.env.EMPIRE_AUTH_COOKIE,
    },
  };
  await axios
    .request(options)
    .then(function (response) {
      const data = response.data.data
        .filter((item) => item.market_value > 0)
        .map((element: IData) => {
          if (element.market_value <= 0) return;
          const data = {
            item: element.market_name,
            price: (element.market_value / 100)
              .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
              .replace("R$ ", "$"),
          };
          return data;
        });
      handleGoogleSheet(data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default start;
