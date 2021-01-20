const createError = require('http-errors');
const express = require('express');

require('express-async-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.use('/public', express.static('public'));

// view engine setup
app.engine('hbs', exphbs({
    defaultLayout: 'main.hbs',
    extname: '.hbs',
    layoutsDir: 'views/layouts',
    partialsDir: 'views/partials',
}));
app.set('view engine', 'hbs');

app.get('/', function(req, res, next) {
    res.render('home');
});

app.get('/index', function(req, res) {
    res.render('viewUser/index');
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

app.use('/admin', require('./routes/admin.route'));
// app.use('/user', usersRouter);
// app.use('/admin', adminRouter);
// app.use('/auth', authRouter);







require('./middlewares/routes.mdw')(app);
require('./middlewares/view.mdw')(app);
require('./middlewares/session.mdw')(app);
// require('./middlewares/locals.mdw')(app);
require('./middlewares/error.mdw')(app);
// view engine setup









module.exports = app;
// const PORT = 3000;
// app.listen(PORT, _ => {
//     console.log(`Example app listening at http://localhost:${PORT}`);
// });.listen(PORT, _ => {
//     console.log(`Example app listening at http://localhost:${PORT}`);
// });
