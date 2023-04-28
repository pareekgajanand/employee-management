const mongoose = require("mongoose");
const { Config } = require("../config/config");

module.exports.ConnectDB = function () {
  mongoose
    .connect(
      `mongodb+srv://2020btcse010:${Config.Password}@cluster0.2b5zq54.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
      console.log("Connected to the Database");
    })
    .catch((err) => {
      console.log(err);
    });
};
