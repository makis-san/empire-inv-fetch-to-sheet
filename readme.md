# Fetch CSGOEmpire Deposit Inventory to Google Sheet

[![GitHub license](https://img.shields.io/github/license/makis-san/csgoempire-inventory-fetch-to-sheet)](https://github.com/makis-san/csgoempire-inventory-fetch-to-sheet/blob/main/LICENSE)

>I literally did this in 30 minutes and i'm actually planning to add more features. Please be patient 💙

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
   ![](https://i.imgur.com/81ZnCp7.png)
   ![](https://i.imgur.com/m1AvhCs.png)
   &nbsp;
   Head down on response headers and copy cookie header. This is your **EMPIRE_AUTH_COOKIE** enviroment variable.

2. **Configure google api and google sheet.**
3. Have fun

```shell
yarn && yarn start
```

### Commandline Args

| key       | value                                                                            |
| --------- | -------------------------------------------------------------------------------- |
| -dev      | enable console.log                                                               |
| -noGoogle | the application will only fetch data from csempire without updating google sheet |

### Env

| key                            | value                                         |
| ------------------------------ | --------------------------------------------- |
| GOOGLE_APPLICATION_CREDENTIALS | path to google api client credentials         |
| SHEET_ID                       | google sheets id                              |
| PRICE_RANGE                    | range on sheet that stores the csempire price |
| TITLE_RANGE                    | range on sheet that stores item name          |
| EMPIRE_AUTH_COOKIE             | csempire user cookie                          |
