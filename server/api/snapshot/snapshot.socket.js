/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var thing = require('./snapshot.model');

exports.register = function(socket) {
  snapshot.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  snapshot.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('snapshot:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('snapshot:remove', doc);
}