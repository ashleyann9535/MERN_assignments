const Product = require("../models/product.model");

module.exports.index = (req, res) => {
  res.json({
    message: "Welcome",
  });
};

module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
};

module.exports.getProducts = (req, res) => {
  Product.find({})
    .then((products) => {
      console.log(products);
      res.json(products);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: 'something went wrong with create', error: err.errors });
    });
};

module.exports.getProductById = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => {
      console.log(product)
      res.json(product);
    })
    .catch((err) => {
        res.status(400).json({ message: 'something went wrong with create', error: err.errors });
    });
};

module.exports.updateById = (req, res) => {
  Product.updateOne({_id: req.params.id}, req.body, {new:true})
    .then((updateProduct) => res.json(updateProduct))
    .catch(err => res.json(err))
}
