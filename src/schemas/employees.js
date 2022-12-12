const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 

const employeeSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    contact_number: { type: String, required: true },
    email: { type: String, lowercase: true, required: true },
    dob: { type: String, required: true },
    address: {
        street_address: { type: String, required: true },
        city: { type: String, require: true },
        postal_code: { type: String, required: true },
        country: { type: String, required: true}
    },
    skills: [{
         skill: { type: String, required: true },
         year_of_exp: { type: Number, required: true },
         seniority_rating: { type: String, required: true }
    }]
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;