const Employee = require("../schemas/employees");

module.exports = async (req, res) => {
    const {  
        first_name, 
        last_name, 
        contact_number,
        email,
        dob,
        address,
        skills
    } = req.body;
    try {
      const employee = await Employee.create({ 
        first_name, 
        last_name, 
        contact_number,
        email,
        dob,
        address,
        skills });
      res.status(201).json( employee );
    } catch (error) {
        res.status(400).json({ error });
    }
  };