'use strict';

var myApp = angular.module('saskatoon', []);

myApp.directive('openTooltip', [function () {
  return {
    restrict: 'A',

    link: function (scope, element) {
      var $tooltip = element.next();

      element.on('click', function (e) {
        e.preventDefault();
        
        if (element.hasClass('open')) {
          $tooltip.slideUp('fast');
          element.removeClass('open');
        } else {
          $tooltip.slideDown('fast');
          element.addClass('open');
        }
      });
    }
  }
}]);

myApp.directive('background', [function () {
  return {
    restrict: 'A',

    link: function (scope, element) {
      element.cover({
        backgroundPosition:"center",
        checkWindowResize:true,
        loadHidden:true,
        callbacks: {}
      });
    }
  }
}]);

myApp.directive('owlHome', [function () {
  return {
    restrict: 'A',

    link: function (scope, element) {
      element.owlCarousel({
        items : 4, //10 items above 1000px browser width
        itemsDesktop : [1000,3], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,3], // betweem 900px and 601px
        itemsTablet: [600,2], //2 items between 600 and 0
        itemsMobile : true // itemsMobile disabled - inherit from itemsTablet option
      });
    }
  }
}]);

myApp.controller('TimeController', ['$scope', '$log', function($scope, $log) {
  $scope.date = new Date();
}]);