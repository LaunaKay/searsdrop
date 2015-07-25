/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var sale = require('./sale.model');

exports.register = function(socket) {
  sale.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  thing.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('sale:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('sale:remove', doc);
}