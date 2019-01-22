const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/products', {
            products: products,
            docTitle: 'All Products',
            path: '/products'
        });
    });
};

exports.getProduct = (req, res, next) => {
    const id = req.params.id;
    Product.findById(id, product => {
        res.render('shop/product-details', {
            product: product,
            docTitle: `Details - ${product.title}`,
            path: '/products'
        });
    });
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
            products: products,
            docTitle: 'Shop',
            path: '/'
        });
    });
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        docTitle: 'Your Cart',
        path: '/cart'
    });
};

exports.postCart = (req, res, next) => {
    const id =  req.body.productId;
    console.log(id);
    res.redirect('/cart')
};

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        docTitle: 'Your Orders',
        path: '/orders'
    });
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        docTitle: 'Checkout',
        path: '/checkout'
    });
};