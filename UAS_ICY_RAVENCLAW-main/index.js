const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose')

app.set('view engine', 'ejs');
app.use(express.static('public')); //untuk serve .css, .js, images dari folder /public
app.use(bodyParser.urlencoded());
//layouts

app.use(session({
    secret: '123asd21asg45',
}))

mongoose.connect(('mongodb+srv://ICY:ICY@cluster0.c2p5x.mongodb.net/icyweb?retryWrites=true&w=majority')
, (err,res) => {
    if(err){
        console.error(err);
    }
    else{
        console.log('Database terhubung')
    }
})


//routes
const homeRoute = require('./routes/home');
app.use('/', homeRoute)
const authRoute = require('./routes/auth');
app.use('/auth', authRoute);

// app.get('/', (req,res) => {
//     res.send('Hello World!');
// })

// app.get('/fti', (req,res) => {
//     res.send('ini fti asd');
// });

// app.get('/users/:userid', (req,res) => {
//     const users = ['1','2','3','4','5','6'];
//     res.send(users[req.params.userid]);
// })


app.listen('4000', () => {
    console.log('Server is active');
});