const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        docTitle: 'Add Product',
        path: '/admin/add-product'
    });
};

exports.getProductList = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/product-list', {
            products: products,
            docTitle: 'Admin Products',
            path: '/admin/product-list'
        });
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(
        req.body.title,
        req.body.imgUrl,
        req.body.price,
        req.body.description
    );
    product.save();
    res.redirect('/');
};
