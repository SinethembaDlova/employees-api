const Employee = require("../schemas/employees");

module.exports = async (req, res) => {
  const { id } = req.params;
  const {  
    first_name, 
    last_name, 
    contact_number,
    email,
    dob,
    address,
    skills
  } = req.body;
	
  const updates = {
    first_name, 
    last_name, 
    contact_number,
    email,
    dob,
    address,
    skills
  }

  try {
    const employeeTobeUpdated = await Employee.updateOne({ _id: id }, updates);
    if (employeeTobeUpdated.matchedCount > 0) {
      const employee = await Employee.findOne({ _id: id });
      if (employee) {
        res.status(200).json( employee );
      }     
    } 
  } catch (error) {
    res.status(400).json({ error });
  }
};