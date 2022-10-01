const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const dbConnection = require('./db/conn');
const mianRoute = require('./route/route');

app.use(express.json());
app.use('/', mianRoute);
app.use('/upload',express.static('upload'));

app.listen(port,()=>{
    console.log(`Server is runnig on ${port}`);
})