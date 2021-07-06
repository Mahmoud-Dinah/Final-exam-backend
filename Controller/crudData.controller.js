'use strict'

const axios = require('axios');
const express = require('express');
const newDrinkModel = require('../models/drink.schema.model');

const createFavData = async (req, res) => {
    const {idDrink, strDrink, strDrinkThumb} = req.body;
    newDrinkModel.find({idDrink:idDrink}, (error, data)=> {
        if (data.length > 0){
            res.send(' this item already exist')
        }else {
            const newDrink = new newDrinkModel ({
                idDrink : idDrink, strDrink : strDrink , strDrinkThumb : strDrinkThumb})
                newDrink.save(); 
                res.send('item added sucessfully')
        }
    })
}


const getFavData = async (req, res) => {
    newDrinkModel.find({}, (error, data)=>{
        res.send(data);
    })
};


const deleteFavData = async (req, res) => {
    const idDrink = req.params.idDrink;

newDrinkModel.remove({idDrink:idDrink}, (error, data) => {
    if (error) {
        res.send(error);
    }else {
        newDrinkModel.find({}, (error, data)=>{
            res.send(data);
        })
    }
})
}

const updateFavData = async (req, res) => {
const idDrink = req.params.idDrink;
const {strDrink, strDrinkThumb} = req.body;
newDrinkModel.findOne({idDrink}, (error, data) =>{
    if (error) {
        res.send(error)
    }else {
        data.strDrink = strDrink;
        data.strDrinkThumb = strDrinkThumb;
        data.save().then (()=>{
            newDrinkModel.find({}, (error, data)=>{
                res.send(data);
            })
        })
    }
})

}


module.exports ={
    createFavData, getFavData, deleteFavData, updateFavData
}
