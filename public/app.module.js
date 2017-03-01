
angular
    .module("burnIt", [
        "burnIt.main",
        "burnIt.planning"
    ])
    .service("CommonSvc", function () {
        var self = this;
        var person;
        self.setPerson = setPerson;
        self.getPerson = getPerson;

        function setPerson(obj) {
            person = obj;
        }

        function getPerson() {
            return person;
        }
    })
    .controller("burnCtrl", ["$scope", burnCtrl]);

function burnCtrl($scope) {
};
