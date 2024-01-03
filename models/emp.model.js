const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    firstN: {required: true, type: String},
    lastName: { required: true, type: String },
    email: { required: true, type: String, unique: true},
    phone: { required: true, type: String, unique:true },
    gender: { required: true, type: String },
    nationalId: { required: true, type: String, unique: true},
    role: {
        type: String,
        required: true,
        enum: {
            values: ["HR", "MANAGER","IT_ADMIN","EMPLOYEE"],
            message: "{value} is not a valid role",
        }
    },
    createDate: { 
         required: false, 
         type: Date,
         default: new Date(), 
    },
    // // updateTime: { required: false, type: Date },
});

module.exports = mongoose.model('employee', EmployeeSchema);
