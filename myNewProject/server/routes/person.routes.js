const PersonController = require('../controllers/person.controller');  //Import the code from Code Block 1

module.exports = (app) => {
    app.get('/api', PersonController.index);
    app.get('/api/people', PersonController.getAllPeople);
    app.get('/api/person/:id', PersonController.getPerson)
    app.post('/api/people', PersonController.createPerson); //adding this line, we can now create people by sending a post request
    app.put('/api/people/:id', PersonController.updatePerson);
    app.delete('/api/people/:id', PersonController.deletePerson); //note: "id" here MUST match params in controller
}

