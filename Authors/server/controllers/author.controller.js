const Author = require('../models/author.model');

module.exports = {
    //Create
    createAuthor: (req, res) => {
        console.log(req.body);
        Author.create(req.body)
        .then((newAuthor) => {
            console.log(newAuthor);
            res.json(newAuthor);
        })
        .catch((err) => {
            res.status(400).json({message: 'something went wrong with create', error: err.errors})
        })
    },
    //Read
    getAuthors: (req, res) => {
        Author.find({})
            .then((authors) => {
                console.log(authors);
                res.json(authors);
            })
            .catch((err) => {
                res.status(400).json({message: 'something went wrong with get all', error: err.errors})
            })
    },

    getOneAuthor: (req, res) => {
        Author.findOne({_id: req.params.id})
            .then((author) =>{
                console.log(author);
                res.json(author);
            })
            .catch((err) =>{
                res.status(400).json({message: 'something went wrong with get one', error: err.errors})
            })
    },

    //Update
    updateAuthor: (req,res) =>{
        Author.updateOne({_id:req.params.id}, req.body, {new:true, runValidators: true})
            .then((author) => {
                console.log(author);
                res.json(author);
            })
            .catch((err) => {
                res.status(400).json({message: 'something went wrong with update', error: err.errors})
            })
    },


    //Delete
    deleteAuthor: (req, res) => {
        Author.deleteOne({_id: req.params.id})
            .then((author) =>{
                console.log(author);
                res.json(author);
            })
            .catch((err) => {
                res.status(400).json({message: 'something went wrong with delete', error: err.errors})
            })
    }

}