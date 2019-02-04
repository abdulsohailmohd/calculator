(function () {
    'use strict';

    angular
        .module('calci', [])
        .controller('CalciController', CalciController);

    CalciController.$inject = ['$scope'];
    function CalciController($scope) {
        $scope.screen = "";
        $scope.addToExpn = function (val) {

            if (val === "=") {
                if ($scope.screen === "")
                    return;
                $scope.screen = eval($scope.screen).toString();
            }
            else {
                $scope.screen += val;
            }
        }

        $scope.clear = function (isAll) {
            if (isAll) {
                $scope.screen = "";
            }
            else {
                $scope.screen = $scope.screen.substr(0, $scope.screen.length - 1)
            }
        }
        document.addEventListener('keypress', function (e) {
            if (e.code === "Enter") {
                $scope.addToExpn('=');
            }
        })
    }
})();