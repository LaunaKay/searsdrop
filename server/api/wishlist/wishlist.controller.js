/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Wishlist = require('./wishlist.model');

// Get list of things
exports.index = function(req, res) {
  Wishlist.find(function (err, wishlists) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(wishlists);
  });
};

// Get a single wishlist
exports.show = function(req, res) {
  Wishlist.findById(req.params.id, function (err, wishlist) {
    if(err) { return handleError(res, err); }
    if(!wishlist) { return res.status(404).send('Not Found'); }
    return res.json(wishlist);
  });
};

// Creates a new wishlist in the DB.
exports.create = function(req, res) {
  Wishlist.create(req.body, function(err, wishlist) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(wishlist);
  });
};

// Updates an existing wishlist in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Wishlist.findById(req.params.id, function (err, wishlist) {
    if (err) { return handleError(res, err); }
    if(!wishlist) { return res.status(404).send('Not Found'); }
    var updated = _.merge(wishlist, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(wishlist);
    });
  });
};

// Deletes a wishlist from the DB.
exports.destroy = function(req, res) {
  Wishlist.findById(req.params.id, function (err, wishlist) {
    if(err) { return handleError(res, err); }
    if(!wishlist) { return res.status(404).send('Not Found'); }
    wishlist.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}