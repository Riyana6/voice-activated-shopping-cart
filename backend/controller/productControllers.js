const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});

        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "server error"});
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "server error"});
    }
}

module.exports = {
    getAllProducts,
    getProductById
}