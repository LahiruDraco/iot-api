(function () {
    'use strict';

    // var Slot = require('../../api/models/slotModel.js');

    angular
        .module('iot_app')
        .controller('SlotsController', slotsController);

    function slotsController($scope, $http) {

        // Function to get the data
        $scope.getData = function () {
            $http.get("http://localhost:88/api/get")
                .success(function (response) {
                    $scope.names = response;
                });
        };

        // Run function every second
        setInterval($scope.getData, 5000);
    };
})();