const mongoose = require("mongoose");
const EmployeeSchema = new mongoose.Schema({
  employeeName: {
    type: String,
    required: true
  },
  employeeEmailID: {
    type: String,
    required: true
  },
  employeePhone: {
    type: String,
    required: true
  }
});
const EmployeeModel = mongoose.model("employee", EmployeeSchema);
module.exports = EmployeeModel;
