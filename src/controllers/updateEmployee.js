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
    if (employeeTobeUpdated.deletedCount > 0) {
        res.status(200).json({ messege: "Employee successfully updated" });
      } else {
        res.status(204).json({ message: "No employee with ID was found" });
      }
  } catch (error) {
    res.status(400).json({ error });
  }
};