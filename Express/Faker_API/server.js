const express = require("express");
const app = express();
const PORT = 8000;
const { faker } =  require('@faker-js/faker');

const createUser = () => {
    const user = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        password: faker.internet.password()
    };

    return user;
};

const createCompany = () => {
    const company = {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        addressStreet: faker.address.streetAddress(),
        addressCity: faker.address.city(),
        addressState: faker.address.state(),
        addressZipCode: faker.address.zipCodeByState(),
        addressCountry: faker.address.country()
    };

    return company;
};



app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/api/users/new", (req, res) => {
    res.json(createUser());
});

app.get("/api/companies/new", (req, res) => {
    res.json(createCompany());
});

app.get("/api/user/company", (req, res) => {
    res.json({
        user: createUser(),
        company: createCompany()
    });
});





// this needs to be below the other code blocks
app.listen( PORT, () => console.log(`Listening on port: ${PORT}`) );
