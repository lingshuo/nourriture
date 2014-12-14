'use strict';

/**
 * @ngdoc function
 * @name webNourritureApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webNourritureApp
 */
angular.module('webNourritureApp')
  .controller('MainCtrl', function ($scope,$http,$window) {
  $scope.message='message';
  $scope.username=$window.sessionStorage['username'];
  $scope.userid=$window.sessionStorage['userid'];
  $http.get('api/recipes').success(function  (data) {
     $scope.recipelist=data;
  });
  $scope.addRecipe=function  () {
    $http({
      method:'POST',
      url:'api/recipes',
      data:"name="+$scope.recipename+"&description="+$scope.recipedesp,
      headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).success(function  () {
       $http.get('api/recipes').success(function  (data) {
      $scope.recipelist=data;
  });
    }).error(function  (data,status, headers, config) {
        $scope.recipelist='error';
    });
  };
//获得某个菜谱的评论
$scope.getComment=function  (id) {
  
    $http.get('api/comments').success(function  (data) {
       $scope.commentList=data;
    });
  };
  //获得某个菜谱的评论
$scope.getDetail=function  (id) {
  		 	$http.get('api/recipes/'+$routeParams.id)
    	.success(function (data){
    		$scope.detail=data[0];
    		$http.get('api/users/'+$scope.detail.user)
    		.success(function  (data) {
    			if (data[0]) {
    				$scope.author=data[0].username;
    			} else{
    				$scope.author='anonymous';
    			};
    			
    		});
    	}).error(function  (data) {
    		$scope.detail='error';
    	});
    $http.get('api/comments').success(function  (data) {
       $scope.commentList=data;
    });
  };
$scope.remove=function  (id,index) {
  
    $http.delete('api/recipes/'+id).success(function  () {
       $scope.recipelist.splice(index,1);
    });
  };

});
