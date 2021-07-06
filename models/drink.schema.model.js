'use strict'

const mongoose = require('mongoose');

const drinkSchema = mongoose.Schema ({
    idDrink:{
        type: String,
        unique: true,
        lowercase: true,
        trim: true
      },
    strDrink : String,
    strDrinkThumb: String,

})

const newDrinkModel = mongoose.model("Product", drinkSchema);

module.exports = newDrinkModel;
