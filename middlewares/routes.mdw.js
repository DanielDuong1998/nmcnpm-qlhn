module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('home');
    });

    app.get('/bs4', function(req, res) {
        const show = +req.query.show || 0;
        const visible = show !== 0;
        res.render('bs4', {
            layout: false,
            data: { visible: visible }
        });
    });

    app.get('/index', function(req, res) {
        res.render('vwUser/index');
        // const show = +req.query.show || 0;
        // const visible = show !== 0;
    
        // res.render('index', {
        //     layout: false,
        //     data: { visible: visible }
        // });
    });
    
    app.get('/login', function(req, res) {
        res.render('vwAuth/login', {
            layout: false
        })
    });
    app.get('/signup', function(req, res) {
        res.render('vwAuth/signup', {
            layout: false
        })
    });
    app.get('/forgetpassword', function(req, res) {
        res.render('vwAuth/forgetpassword', {
            layout: false
        })
    });

    app.get('/bs4copy', function(req, res) {
        res.render('bs4copy')
    });
    
    app.get('/bs4', function(req, res) {
        res.render('bs4')
    });
    app.get('/info', function(req, res) {
        res.render('vwUser/info')
    });
    // app.get('/conference', function(req, res) {
    //     res.render('vwConference/conference')
    // });
    // ừa bởi vậy t mới nói của t bị thiếu mấy cái của ông á



    // app.use('/admin/categories', require('../routes/category.route'));
    // app.use('/admin/products', require('../routes/product.route'));

    // app.use('/account', require('../routes/front/account.route'));
    // app.use('/products', require('../routes/front/product.route'));

    app.use('/auth', require('../routes/auth.route')); 
    app.use('/venue', require('../routes/venue.route'));



    
    // //const indexRouter = require('./routes/index.route');
    // const usersRouter = require('./routes/user.route');
    // const adminRouter = require('./routes/admin.route');
    const authRouter = require('../routes/auth.route');
    
    // app.use(logger('dev'));
    // app.use(express.json());
    // app.use(express.urlencoded({ extended: false }));
    // app.use(cookieParser());
    // app.use(express.static(path.join(__dirname, 'public')));
    
    
    
    //app.use('/', indexRouter);
    app.use('/user', require('../routes/user.route'));
    app.use('/conference', require('../routes/conference.route'));
    app.use('/venue', require('../routes/venue.route'));
    // app.use('/venue', require('./routes/venue.route'));
    // app.use('/user', usersRouter);
    // app.use('/admin', adminRouter);
    // app.use('/auth', authRouter);
    // cái này để làm gì v?ủa cái này k pahri của ông à

}
