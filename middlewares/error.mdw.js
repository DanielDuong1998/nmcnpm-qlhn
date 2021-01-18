module.exports = function(app) {
// catch 404 and forward to error handler
app.use(function(req, res) {
    res.render('vwError/404', {
        layout: false
    })
});

// error handler
// default error handler
app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.render('vwError/500', {
        layout: false
    })
});

}