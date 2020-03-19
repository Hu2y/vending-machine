import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import chalk from 'chalk';
import detectPort from 'detect-port';

// api
import wallet from './api/wallet.js'
import machine from './api/machine.js'

// utils

// server setup
let port;
async function configServer() {
  port = 3000 || (await detectPort(3000));
}
configServer();

// express setup
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// express routers
app.use('/product', machine);
app.use('/wallet', wallet);

// start
app.listen(port, () =>
  console.log(
    `${chalk.white
      .bgHex('#41b883')
      .bold(`VENDING MACHINE SERVER IS RUNNING ON ${port}`)}`,
  ),
);