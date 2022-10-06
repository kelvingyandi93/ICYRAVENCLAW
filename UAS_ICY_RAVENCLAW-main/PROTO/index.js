const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const layouts = require('express-ejs-layouts');
const app = express();

app.use(express.static('public'));
app.set ('view engine', 'ejs');

app.use(layouts);
app.set('layout','Pages/login.ejs');
app.use(session ({
    secret: '123asd21asg45',
}))

const indexRouter = require('./routes/home');
const { urlencoded } = require('body-parser');
app.use('/',indexRouter);

const LoginRouter = require('./routes/auth');
app.use('/auth',LoginRouter);

app.listen('4000',() => {
    console.log('active')
})