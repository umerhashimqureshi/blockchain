// var express = require("express");
// var app = express();
var Web3 = require("web3");
// const PORT = process.env.PORT || 4000;

let web3 = new Web3(
  Web3.givenProvider || "https://data-seed-prebsc-1-s1.binance.org:8545"
);

web3.setProvider("https://data-seed-prebsc-1-s1.binance.org:8545");

// console.log("LMADSO ", web3.eth);

web3.eth.getAccounts().then(console.log);

// app.listen(PORT, () => {
//   console.log("Backend Server is running at " + PORT);
// });
