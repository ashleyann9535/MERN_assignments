const ProductController = require('../controller/product.controller');

module.exports = (app) => {
    app.get('/api', ProductController.index);
    app.get('/api/product', ProductController.getProducts);
    app.get('/api/product/:id', ProductController.getProductById);
    app.post('/api/product', ProductController.createProduct); 
}