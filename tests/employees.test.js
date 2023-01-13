const should = require("chai").should()
const expect = require("chai").expect
const supertest = require("supertest")
const api = supertest("http://localhost:5000")

const data = {
    _id: "DS0111",
    first_name: "Don",
    last_name: "Chad",
    contact_number: "072232432",
    email: "don@gmail.com",
    dob: "21/05/1973",
    address: {
        street_address: "21 Jojo Street",
        city: "Sandton",
        postal_code: "1234",
        country: "Africa"
    },
    skills: [{
        skill: "React",
        year_of_exp: 2,
        seniority_rating: "Beginner"
    }]
}

describe("Employees API", function(){
    it("should create a employee", function(done){
        api.post("/employees")
        .set("Accept", "application/json")
        .send(data)
        .expect(201, done)
    })
    it("should fetch all employees", function(done){
        api.get("/employees")
        .set("Accept", "application/json")
        .expect(200, done)
    })
    it("should fetch a specific employee", function(done){
        api.get("/employees/DS0111")
        .set("Accept", "application/json")
        .expect(200, done)
    })
    it("should return employees data in an array", function(done){
        api.get("/employees")
        .set("Accept", "application/json")
        .expect(200, done)
        .then(function(error, response){
            expect(response.data).to.be.an('array')
            done()
        })
    })
    it("should check if all properties of the employees database schema are there", function(done){
        api.get("/employees")
        .set("Accept", "application/json")
        .expect(200, done)
        .then(function(error, response){
            expect(response.data[0]).to.have.property('id')
            expect(response.data[0]).to.have.property('first_name')
            expect(response.data[0]).to.have.property('last_name')
            expect(response.data[0]).to.have.property('contact_number')
            expect(response.data[0]).to.have.property('email')
            expect(response.data[0]).to.have.property('dob')
            expect(response.data[0]).to.have.property('address')
            expect(response.data[0]).to.have.property('skills')
            done()
        })
    })
})