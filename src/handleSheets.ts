import { google } from "googleapis";
import "dotenv/config";

declare interface EmpireRange {
  item: string;
  price: string;
}

const handleGoogleSheet = async (empireRange: EmpireRange[]) => {
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({ version: "v4", auth });

  // Get itens on Title Range (env.TITTLE_RANGE)
  const getData = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: process.env.TITLE_RANGE,
  });

  const actualRange = getData.data.values;
  let values = [];

  // Map Range x Empire Output
  empireRange.forEach((pItem) => {
    const index =
      actualRange.findIndex((item) => item[0].includes(pItem.item)) + 2;
    if (!index || index === 1) return;
    values.push({
      range: process.env.PRICE_RANGE + index.toString(),
      values: [[pItem.price]],
    });
  });

  // Sheets Update Option
  const updateOptions = {
    spreadsheetId: process.env.SHEET_ID,
    resource: { data: values, valueInputOption: "USER_ENTERED" },
  };
  const response = await sheets.spreadsheets.values.batchUpdate(updateOptions);

  return;
};

export default handleGoogleSheet;
