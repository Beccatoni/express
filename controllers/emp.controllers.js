const EmployeeModel = require('../models/emp.model');

const create = async (req, res, next) => {
    try {
        // const newEmployee = new EmployeeModel(req.body);
        const savedEmployee =  await EmployeeModel.create(req.body);

        console.log(savedEmployee);
        res.status(201).json({
            message: 'Employee saved successfully',
            employee: savedEmployee
        })
    } catch (error) {
        console.error("Error creating employee:", error);
        res.status(500).send("Failed to save employee😢")
    }
}


// listing employees
const list =  async (req, res, next) => {
    try {
        var employees = await EmployeeModel.find({});
        res.status(200).json({employees});
    } catch (error) {
        res.status(500).send("Failed to list employees");
    }
}

// find by id
const findById = async (req, res, next) => {
    try {
        let employeeId = req.query.id;
        console.log(employeeId);
        var foundEmployee = await EmployeeModel.findById(employeeId);
        console.log(foundEmployee);
        res.status(200).json({
            employee: foundEmployee
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Employee not found") 
    }
}


// find by email
const findByEmail = async (req, res, next) =>{
   try {
    let employeeEmail = req.params.email;
    var foundEmployee = await EmployeeModel.find({ email: employeeEmail});
    console.log(foundEmployee);
    res.status(200).send({ message: "Employee found", employee: foundEmployee[0] })
    
   } catch (error) {
     console.error("Something is not right", error);
     res.status(500).send("Failed to find employee");
   }
}





module.exports = {
    create,
    list,
    findByEmail,
    findById
}