'use strict'
const axios = require('axios');
const express = require('express');

const getAllApiData = (req, res) => {

const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

axios.get(url).then((data) =>{

res.send(data.data)

}).catch((error) => {
    res.send(error);
})
}

module.exports = getAllApiData;