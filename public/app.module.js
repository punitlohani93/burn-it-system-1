'use strict';

angular.module('burnIt', [
    // 'ngRoute',
    // 'burnIt.main'
])
    .controller('burnCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
        console.log("WORKS!");
        $scope.test = "Howdy";
    }]);
