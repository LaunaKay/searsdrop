/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var wishlist = require('./wishlist.model');

exports.register = function(socket) {
  wishlist.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  wishlist.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('wishlist:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('wishlist:remove', doc);
}