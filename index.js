const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require ('body-parser');
const db = require('./config/mongoose');
const port = 8000;

const app = express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(cookieParser());
app.use('/',require('./routes/masterRouter.js'))

app.listen(port,function(err){
    if(err){
        console.log('There is an err',err);
    }
    console.log('Server is up and running on port',port);
});