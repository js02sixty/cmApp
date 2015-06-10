'use strict';

angular.module('cmApp')
  .directive('productListingDir', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/main/products/product-listing.html'
    };
  })
;
