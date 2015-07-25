angular.module('searsDropApp', [])
    .directive('productSelector', [function () {
        return {
            restrict: 'E',
            controller: function ($scope) {
                $scope.message = "hello productSelector";
            },
            template: "{{message}}"
        };
    }])