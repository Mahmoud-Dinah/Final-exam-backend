'use strict'

const express = require('express')
const app = express()
require('dotenv').config();
const PORT = process.env.PORT;
const cors = require('cors');
const axios = require('axios')
app.use(express.json());
app.use(cors());
const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost:27017/examdb', {

useNewUrlParser: true, 

useUnifiedTopology: true});

app.get('/', (req, res)=>{
    res.send('proof of life')
});





app.listen(PORT, ()=>{
    console.log(`Server run on ${PORT}`);
});