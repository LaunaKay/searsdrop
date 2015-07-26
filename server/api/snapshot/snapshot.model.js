'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SnapshotSchema = new Schema({
  name: String,
  user_id:String,
  product_id: Array
});

module.exports = mongoose.model('Snapshot', SnapshotSchema);