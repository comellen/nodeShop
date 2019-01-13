const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const admin = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    const products = admin.products;
    res.render('shop', { products: products, docTitle: 'Shop' }); //uses default templating engine, defined in app.js
});

module.exports = router;