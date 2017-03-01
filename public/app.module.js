
angular
    .module('burnIt', [
        'burnIt.main'
    ])
    .controller('burnCtrl', ['$scope', burnCtrl]);

function burnCtrl($scope) {
    console.log("WORKS!");
};
