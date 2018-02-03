/**
 * Created by Arrieta on 21/11/2017.
 */
'use strict';
angular.module('app')
    .controller('RegisterController', function ($scope, $location, $interval, $http, $state) {
    $scope.register = function () {
        if ($scope.RegisterForm.$invalid) {
            RegisterForm.classList.add('was-validated');
            return false;
        }
        $state.go('root.dashboard');
    }
});
