const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const oopsieWoopsieController = require('./controllers/oopsie-woopsie');

const app = express();

app.set('view engine', 'pug');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(oopsieWoopsieController.get404);

app.listen(3000);
