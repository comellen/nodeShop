const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');

const adminRoutes = require('./routes/admin');
const shop = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shop);

app.use((req, res, next) => {
    res.status(404).render('404', { docTitle: 'Page Not Found', path: 'oopsie-woopsie' });
});

app.listen(3000);
