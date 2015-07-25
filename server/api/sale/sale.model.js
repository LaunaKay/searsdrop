'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SaleSchema = new Schema({
  product_id: String,
  currentprice: Number,
  purchased: Number,
  finalprice: Number,
  endtime:Date
});

module.exports = mongoose.model('Sale', SaleSchema);