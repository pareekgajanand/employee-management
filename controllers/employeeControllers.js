const EmployeeModel = require("../models/employeeModel");

module.exports.HomeController = (req, res) => {
  res.render("home");
};
module.exports.InsertPageController = (req, res) => {
  res.render("insert");
};
module.exports.UpdatePageController = (req, res) => {
  res.render("update");
};
module.exports.DeletePageController = (req, res) => {
  res.render("delete");
};
module.exports.SearchPageController = (req, res) => {
  res.render("search");
};
module.exports.InsertionController = (req, res) => {
  const { name, email, phone } = req.body;
  const employee = new EmployeeModel({
    employeeEmailID: email,
    employeeName: name,
    employeePhone: phone
  });
  employee.save().then(() => {
    res.json({
      message: "Data saved successfully"
    });
  });
};
module.exports.UpdationController = (req, res) => {
  const { name, email, phone, id } = req.body;
  EmployeeModel.updateOne(
    { _id: id },
    {
      $set: { employeePhone: phone, employeeName: name, employeeEmailID: email }
    }
  ).then(() => {
    res.json({
      message: "Data updated successfully"
    });
  });
};
module.exports.DeletionController = (req, res) => {
  const { id } = req.body;
  EmployeeModel.deleteOne({ _id: id }).then(() => {
    res.json({
      message: "Data deleted successfully"
    });
  });
};
module.exports.SearchController = (req, res) => {
  const { id } = req.body;
  EmployeeModel.findOne({ _id: id }).then((response) => {
    res.json({
      data: response
    });
  });
};
