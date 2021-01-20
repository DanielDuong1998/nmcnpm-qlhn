

module.exports = function (app) {
    app.get('/', function (req, res) {
        // console.log(req.session.isAuth);
        res.render('home');
    });

    app.get('/bs4', function (req, res) {
        const show = +req.query.show || 0;
        const visible = show !== 0;
        res.render('bs4', {
            layout: false,
            data: { visible: visible }
        });
    });

    app.get('/index', function (req, res) {
        res.render('vwUser/index');
        // const show = +req.query.show || 0;
        // const visible = show !== 0;

        // res.render('index', {
        //     layout: false,
        //     data: { visible: visible }
        // });
    });

    app.get('/login', function (req, res) {
        res.render('vwAuth/login', {
            layout: false
        })
    });
    app.get('/signup', function (req, res) {
        res.render('vwAuth/signup', {
            layout: false
        })
    });
    app.get('/forgetpassword', function (req, res) {
        res.render('vwAuth/forgetpassword', {
            layout: false
        })
    });

    app.get('/bs4copy', function (req, res) {
        res.render('bs4copy')
    });

    app.get('/bs4', function (req, res) {
        res.render('bs4')
    });
    app.get('/info', function (req, res) {
        res.render('vwUser/info')
    });
    app.get('/infoconference', function (req, res) {
        res.render('vwConference/infoconference')
    });



    // app.use(logger('dev'));
    // app.use(express.json());
    // app.use(express.urlencoded({ extended: false }));
    // app.use(cookieParser());
    // app.use(express.static(path.join(__dirname, 'public')));


    // app.use('/account', require('../routes/account.route'));
    app.use('/auth', require('../routes/auth.route'));
    app.use('/user', require('../routes/user.route'));
    app.use('/conference', require('../routes/conference.route'));
    app.use('/conference-participant', require('../routes/conferenceParticipant.route'));
    app.use('/venue', require('../routes/venue.route'));



}
