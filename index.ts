import "dotenv/config";
import start from "./src/getEmpire";

const args = process.argv.slice();
export default start(args);
