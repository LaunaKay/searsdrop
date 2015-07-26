'use strict';

angular.module('searsdropApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.products = [];
    $scope.couches = [{mainimageurl: "/assets/images/couch.png"}, {mainimageurl: "/assets/images/couch.png"}, {mainimageurl: "/assets/images/couch.png"},{mainimageurl: "/assets/images/couch.png"}];
    $scope.couchesIndex = 0;

    $scope.wallarts = [{mainimageurl: "/assets/images/wallart.png"}, {mainimageurl: "/assets/images/wallart.png"}];
    $scope.wallartsIndex = 0;

    $scope.lamps = [{mainimageurl: "/assets/images/lamp.png"}, {mainimageurl: "/assets/images/lamp.png"} ];
    $scope.lampsIndex = 0;

    $scope.next = function next(arrayName) {
        var index = arrayName + "Index";
        var len = $scope[arrayName].length;
        if($scope[index] >= len){
            $scope[index] = 0;
        } else {
            $scope[index]++;
        }
    }

    $scope.prev = function prev(arrayName){
        var index = arrayName + "Index";
        var len = $scope[arrayName].length;
        if($scope[index] == 0){
            $scope[index] = len;
        } else {
            $scope[index]--;
        }
    }

    $scope.getDetails = function(id) {
        alert(id);
    }

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });


