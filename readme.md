# Fetch CSGOEmpire Deposit Inventory to Google Sheet

## Dependencies

| package      | dev | version  |
| ------------ | --- | -------- |
| axios        | ❌  | ^0.21.1  |
| dotenv       | ❌  | ^10.0.0  |
| googleapis   | ❌  | ^80.1.0  |
| @types/axios | ✔   | ^0.14.0  |
| @types/node  | ✔   | ^15.14.0 |
| ts-node      | ✔   | ^10.0.0  |
| ts-node      | ✔   | ^4.3.5   |

## How to use

1. **Get Empire Cookie**: Navigate to empire deposit page with google devtools, open Network tab and search for request from `https://csgoempire.com/api/v2/inventory/user?app=730`.
   ![enter image description here](https://i.imgur.com/81ZnCp7.png)
   ![enter image description here](https://i.imgur.com/m1AvhCs.png)
   Head down on response headers and copy cookie header. This is your **EMPIRE_AUTH_COOKIE** enviroment variable.
2. **Configure google api and google sheet.**
3. Have fun

> yarn && yarn start

### Env

| key                            | value                                         |
| ------------------------------ | --------------------------------------------- |
| GOOGLE_APPLICATION_CREDENTIALS | path to google api client credentials         |
| SHEET_ID                       | google sheets id                              |
| PRICE_RANGE                    | range on sheet that stores the csempire price |
| TITLE_RANGE                    | range on sheet that stores item name          |
| EMPIRE_AUTH_COOKIE             | csempire user cookie                          |
