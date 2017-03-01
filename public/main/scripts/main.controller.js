'user strict';

(function () {
    angular.module('burnIt.main')
        .controller('mainCtrl', [mainCtrl]);

    function mainCtrl() {
        console.log("Hello from main!");
    }

})();