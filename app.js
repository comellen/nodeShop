const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars');

const app = express();

//To use handlebars,
// app.engine('hbs', expressHbs({
//     layoutsDir: 'views/layouts',
//     defaultLayout: 'main-layout',
//     extname: 'hbs'
// }));
// app.set('view engine', 'hbs');

//To use pug,
// app.set('view engine', 'pug');

//To use EJS,
app.set('view engine', 'ejs');

const admin = require('./routes/admin');
const shop = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', admin.routes);
app.use(shop);

app.use((req, res, next) => {
    res.status(404).render('404', { docTitle: 'Page Not Found' });
});

app.listen(3000);
