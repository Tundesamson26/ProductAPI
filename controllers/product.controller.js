const Product = require('../models/product.model');
const name = "";
const price = "";
exports.product_create = function (req, res) {
    console.log(req.body.name);
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price, 
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

//Simple version, without validation or sanitation
// exports.test = function (req, res) {
//     res.send('Greetings from the Test controller!');
// };