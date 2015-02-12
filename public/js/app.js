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
      element.owlCarousel();
    }
  }
}]);