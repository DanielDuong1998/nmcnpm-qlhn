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
