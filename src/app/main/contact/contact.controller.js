'use strict';

angular.module('cmApp')
  .controller('ContactCtrl', function ($scope, Restangular) {
    $scope.ctrlName = 'ContactCtrl';
    // var baseUsers = Restangular.all('users');
    //
    // baseUsers.getList().then(function(users) {
    //   $scope.allUsers = users;
    // });
    // $scope.users = Restangular.all('users').getList().$object;
    // $scope.users = [{'username': 'john', 'email': 'js02sixty@gmail.com'}]
    $scope.products = Restangular.all('products').getList().$object;
  
  })
;
