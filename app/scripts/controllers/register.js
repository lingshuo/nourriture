'use strict';

/**
 * @ngdoc function
 * @name webNourritureApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the webNourritureApp
 */
angular.module('webNourritureApp')
  .controller('RegisterCtrl', function ($scope, $rootScope, $location, $http,$window, AuthenticationService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
$scope.errInfo='';
$scope.succInfo='';
 $scope.register=function  () {
            $http({
                method: 'POST',
                url: 'api/register',
                data:  "username="+$scope.username+"&password="+$scope.password,
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).success(function  (data,status,headers,config) {
                $scope.succInfo='register success';
		$location.path('#/login');
            })
            .error(function (data, status, headers, config) {
                $scope.errInfo='register error';
            });
        };
  });
