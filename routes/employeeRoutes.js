const express = require("express");
const {
  HomeController,
  InsertPageController,
  UpdatePageController,
  DeletePageController,
  SearchPageController,
  InsertionController,
  UpdationController,
  DeletionController,
  SearchController
} = require("../controllers/employeeControllers");
const Router = express.Router();
Router.get("/", HomeController);
Router.get("/insert", InsertPageController);
Router.get("/update", UpdatePageController);
Router.get("/delete", DeletePageController);
Router.get("/search", SearchPageController);
Router.post("/insert", InsertionController);
Router.put("/update", UpdationController);
Router.delete("/delete", DeletionController);
Router.post("/search", SearchController);
Router.get("*", (req, res) => {
  res.render("error");
});
module.exports = Router;
