require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const { ConnectDB } = require("./utils/connectDB");
const { engine } = require("express-handlebars");
const Router = require("./routes/employeeRoutes");
const app = express();
app.engine(
  "hbs",
  engine({
    layoutsDir: __dirname + "/views/layouts",
    defaultLayout: "main",
    extname: ".hbs"
  })
);
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));
app.use("/", Router);
ConnectDB();
app.listen(process.env.PORT || 5000, () => console.log("Listening!"));
