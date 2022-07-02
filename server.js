const dotenv = require('dotenv').config();
const colors = require('colors');
const { render } = require('ejs');
const express = require('express');
const path = require('path');
const app = express();
const connectMongoDB = require('./config/db.js');
const expressLayout = require('express-ejs-layouts');


// environment variable

const PORT = process.env.SERVER_PORT || 5000 ;

// mongo connect

connectMongoDB();

// body data

app.use(express.json());
app.use(express.urlencoded({extended : false}));

// static folder

app.use('/assets',express.static(path.join(__dirname , '/assets')));


// ejs setup

app.set("view engine" , "ejs");
app.set("layout" , "layouts/app");
app.use(expressLayout);

// routes

app.use('/student' , require('./routes/studentRouter.js'));

// server listen


app.listen(PORT , () => console.log(`Server is running on port ${PORT} succesfully`.bgGreen.black))


