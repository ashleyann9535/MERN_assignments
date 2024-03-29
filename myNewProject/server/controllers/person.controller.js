const Person = require("../models/person.model");

module.exports.index = (req, res) => {
  //We are exporting a key:val pair of index : function
  res.json({
    // This is where we're setting the API's response to the requesting client
    message: "Hello Ashley",
  });
};

/* The method below is new */
module.exports.createPerson = (request, response) => {
  // Mongoose's "create" method is run using our Person model to add a new person to our db's person collection.
  // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
  const {firstName, lastName} = request.body
  Person.create({
    firstName,
    lastName
  }) //This will use whatever the body of the client's request sends over
    .then((person) => response.json(person))
    .catch((err) => response.status(400).json(err));
};

module.exports.getAllPeople = (request, response) => {
  Person.find({})
    .then((persons) => {
      console.log(persons); //recommended for troubleshooting
      response.json(persons);
    })
    .catch((err) => {
      console.log(err);
      response.json(err);
    });
};

module.exports.getPerson = (request, response) => {
  Person.findOne({ _id: request.params.id })
    .then((person) => response.json(person))
    .catch((err) => response.json(err));
};

module.exports.updatePerson = (request, response) => {
  Person.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
  })
    .then((updatedPerson) => response.json(updatedPerson))
    .catch((err) => response.status(400).json(err));
};

module.exports.deletePerson = (request, response) => {
  Person.deleteOne({ _id: request.params.id }) //note: "id" here MUST match id in corresponding route
      .then(deleteConfirmation => response.json(deleteConfirmation))
      .catch(err => response.json(err))
}
