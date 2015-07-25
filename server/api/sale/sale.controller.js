/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /sales              ->  index
 * POST    /sales              ->  create
 * GET     /sales/:id          ->  show
 * PUT     /sales/:id          ->  update
 * DELETE  /sales/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Sale = require('./Sale.model');

// Get list of sales
exports.index = function(req, res) {
  Sale.find(function (err, sales) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(sales);
  });
};

// Get a single Sale
exports.show = function(req, res) {
  Sale.findById(req.params.id, function (err, sale) {
    if(err) { return handleError(res, err); }
    if(!sale) { return res.status(404).send('Not Found'); }
    return res.json(sale);
  });
};

// Creates a new sale in the DB.
exports.create = function(req, res) {
  Sale.create(req.body, function(err, sale) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(sale);
  });
};

// Updates an existing sale in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Sale.findById(req.params.id, function (err, sale) {
    if (err) { return handleError(res, err); }
    if(!sale) { return res.status(404).send('Not Found'); }
    var updated = _.merge(sale, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(sale);
    });
  });
};

// Deletes a sale from the DB.
exports.destroy = function(req, res) {
  Sale.findById(req.params.id, function (err, sale) {
    if(err) { return handleError(res, err); }
    if(!sale) { return res.status(404).send('Not Found'); }
    sale.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}