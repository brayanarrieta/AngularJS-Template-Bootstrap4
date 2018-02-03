/**
 * Created by Arrieta on 21/11/2017.
 */
'use strict';
angular.module('app').controller('LoginController', function($scope, $location, $interval,$http,$state) {
    $scope.login=function () {
        if ($scope.LoginForm.$invalid) {
            LoginForm.classList.add('was-validated');
            return false;
            //validation of the user
        }
        $state.go('root.dashboard');
    }
});