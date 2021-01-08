const createError = require('http-errors');
const express = require('express');
const exphbs = require('express-handlebars');
require('express-async-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.use('/public', express.static('public'));
// app.use(express.static('public'));

// view engine setup
app.engine('hbs', exphbs({
    defaultLayout: 'main.hbs',
    extname: '.hbs',
    layoutsDir: 'views/layouts',
    partialsDir: 'views/partials',
}));
app.set('view engine', 'hbs');

<<<<<<< HEAD
app.get('/', function (req, res) {
    res.render('home');
});

app.get('/index', function (req, res) {
    res.render('index');
    // const show = +req.query.show || 0;
    // const visible = show !== 0;

    // res.render('index', {
    //     layout: false,
    //     data: { visible: visible }
    // });
=======
app.get('/', function(req, res, next) {
    res.render('home');
});

app.get('/index', function(req, res) {
    res.render('viewUser/index');
>>>>>>> e92d49e4aab29b9593a9efff4eaaf9fa16727d8a
});

app.get('/info', function(req, res) {
    res.render('viewUser/info');
});

app.get('/bs4', function(req, res) {
    // res.sendFile(`${__dirname}/bs4.html`);

    const show = +req.query.show || 0;
    const visible = show !== 0;

    res.render('bs4', {
        layout: false,
        data: { visible: visible }
    });
});

// //const indexRouter = require('./routes/index.route');
// const usersRouter = require('./routes/user.route');
// const adminRouter = require('./routes/admin.route');
// const authRouter = require('./routes/auth.route');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));



//app.use('/', indexRouter);
app.use('/user', require('./routes/user.route'));
// app.use('/user', usersRouter);
// app.use('/admin', adminRouter);
// app.use('/auth', authRouter);














// catch 404 and forward to error handler
app.use(function (req, res) {
    res.render('404', {
        layout: false
    })
});

// error handler
// default error handler
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.render('500', {
        layout: false
    })
});

module.exports = app;
// const PORT = 3000;
// app.listen(PORT, _ => {
//     console.log(`Example app listening at http://localhost:${PORT}`);
// });