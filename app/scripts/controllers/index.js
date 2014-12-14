'use strict';

/**
 * @ngdoc function
 * @name webNourritureApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the webNourritureApp
 */
angular.module('webNourritureApp')
  .controller('IndexCtrl', function ($window,$scope) {
$scope.isLogin="Login";
$scope.isReg='Register';
if($window.sessionStorage['username']){
	$scope.isLogin=$window.sessionStorage['username'];
	$scope.isReg='Logout';
}else {
	$scope.isLogin="Login";
	$scope.isReg='Register';
  };
  
  });
