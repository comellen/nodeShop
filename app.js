const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');

const adminRoutes = require('./routes/admin');
const shop = require('./routes/shop');
const oopsieWoopsieController = require('./controllers/oopsie-woopsie');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shop);

app.use(oopsieWoopsieController.get404);

app.listen(3000);
