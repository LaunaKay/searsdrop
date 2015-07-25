angular.module('searsdropApp')
    .directive('livingRoom', [function () {
        return {
            restrict: 'E',
            controller: function ($scope) {
                $scope.message = "hello";
            },
            templateUrl: "{{/main/livingroom/livingroom.html}}"
        };
    }])