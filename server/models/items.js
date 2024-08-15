const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    eid:String,
    eimg:String,
    username:String,
    fname:String,
    eusername:String,
    fname:String,
    lname:String,
    phno:String,
    email:String,
    dob:String,
    maritialstatus:String,
    gender:String,
    nationality:String,
    address:String,
    city:String,
    state:String,
    zipcode:String,
    etype:String,
    edepartment:String,
    edesignation:String,
    designationtype:String,
    eworkingdays:String,
    ejoiningdate:String,
    eofficelocation:String,
    time:Date,
    status:String,
    salary:String,
    arrivaltime:String,
    departuretime:String,
    ctc:String,
    salarypm:String,
    totalholiday:String,
});

const Employee = mongoose.model('Employee', itemSchema); // Create and export the model

module.exports = Employee;
