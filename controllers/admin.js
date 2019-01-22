const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        docTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false
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

exports.getEditProduct = (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id, product => {
        res.render('admin/edit-product', {
            docTitle: 'Edit Product',
            path: '/admin/edit-product',
            editing: true,
            product: product
        });
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

