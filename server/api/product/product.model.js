'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: String,
  shortdescription: String,
  price: Number,
  rating:Number,
  mainimageurl: String
});

module.exports = mongoose.model('Product', ProductSchema);