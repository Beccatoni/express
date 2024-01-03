const express = require('express');
const employeeRoutes = express.Router();
const {create, list, findByEmail, findById} = require('../controllers/emp.controllers');

employeeRoutes.post('/add', create);
employeeRoutes.get('/list', list);
employeeRoutes.get('/findbyemail/:email', findByEmail);
employeeRoutes.get('/findbyid', findById);


module.exports = employeeRoutes;