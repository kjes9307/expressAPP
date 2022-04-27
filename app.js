var cors = require('cors')
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config({path :"./config.env"});
const db = process.env.DATABASE_URL.replace('<password>',process.env.DATABASE_Pass)
mongoose.connect(db) // 連到你要的db
    .then(()=>{
        console.log('資料庫連線成功')
    })
    .catch((error)=>{
        console.log(error);
    });
var postRouter = require('./routes/posts');
var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/posts', postRouter);

module.exports = app;
