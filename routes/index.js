const express = require('express');
const allRoutes = express.Router();

const employeeRoutes = require('./emp.routes');

allRoutes.use('/employee', employeeRoutes);

module.exports = allRoutes;
