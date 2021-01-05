const createError = require('http-errors');
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//const indexRouter = require('./routes/index.route');
const usersRouter = require('./routes/user.route');
const adminRouter = require('./routes/admin.route');
const authRouter = require('./routes/auth.route');

const app = express();

app.use(express.urlencoded({
    extended: true
}));


// view engine setup
app.engine('hbs', exphbs({
    defaultLayout: 'main.hbs',
    extname: '.hbs',
    layoutsDir: 'views/layouts',
    partialsDir: 'views/partials',
    helpers: {
        format(val) {
            return numeral(val).format('0,0') + 'd';
        }
    }
}));
app.set('view engine', 'hbs');

//app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res) {
    res.render('home');
});


app.get('/index', function(req, res) {
    res.render('index', {
        layout: false
    });
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res) {
    res.render('404', {
        layout: false
    })
});

// app.use(function(req, res, next) {
//     next(createError(404));
// });

// error handler
// default error handler
app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.render('500', {
        layout: false
    })
});

// app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });



module.exports = app;
// const PORT = 3000;
// app.listen(PORT, _ => {
//     console.log(`Example app listening at http://localhost:${PORT}`);
// });