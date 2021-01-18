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
        res.render('vwgetr/index');
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
    app.get('/conference', function(req, res) {
        res.render('vwConference/conference')
    });



    // app.use('/admin/categories', require('../routes/category.route'));
    // app.use('/admin/products', require('../routes/product.route'));

    // app.use('/account', require('../routes/front/account.route'));
    // app.use('/products', require('../routes/front/product.route'));

    app.use('/auth', require('../routes/auth.route'));
    app.use('/venue', require('../routes/venue.route'));
}
