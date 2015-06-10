'use strict';

angular.module('cmApp', ['restangular', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:5000/api/v1');
    RestangularProvider.setDefaultHeaders({'content-type': 'application/json'});
    // RestangularProvider.setDefaultRequestParams('jsonp', {callback: 'JSON_CALLBACK'});
    $locationProvider.html5Mode(true);
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('home.products', {
        url: 'products',
        templateUrl: 'app/main/products/products.html',
        controller: 'ProductsCtrl'
      })
      .state('home.about', {
        url: 'about',
        templateUrl: 'app/main/about/about.html'
      })
      .state('home.contact', {
        url: 'contact',
        templateUrl: 'app/main/contact/contact.html',
        controller: 'ContactCtrl'
      })
      .state('cart', {
        url: 'cart',
        templateUrl: 'app/cart/cart.html'
      });
    $urlRouterProvider.otherwise('/');
  })
;
