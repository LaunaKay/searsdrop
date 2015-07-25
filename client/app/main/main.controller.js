'use strict';

angular.module('searsdropApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.products = [];
    $scope.couches = [{image: "/assets/images/couch.png"}, {image: "/assets/images/couch.png"}, {image: "/assets/images/couch.png"},{image: "/assets/images/couch.png"}];



    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
