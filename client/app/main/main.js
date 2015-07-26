'use strict';

angular.module('searsdropApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  }).directive("include", function ($http, $templateCache, $compile) {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            var templateUrl = scope.$eval(attributes.include);
            $http.get(templateUrl, {cache: $templateCache}).success(
                function (tplContent) {
                    element.replaceWith($compile(tplContent)(scope));
                }
            );
        }
    };
});