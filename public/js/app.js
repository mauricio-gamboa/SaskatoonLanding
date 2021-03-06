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

      $(document).mouseup(function (e) {
        var container = $('.item > div');

        if (!container.is(e.target) && container.has(e.target).length === 0) {
          $('.my-tooltip').slideUp();
          $('.bullets').removeClass('open');
        }
      });
    }
  };
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
  };
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
  };
}]);

myApp.directive('focusParent', [function () {
  return {
    restrict: 'A',

    link: function (scope, element) {
      var $parent = element.parent();
      
      element.on('focus', function () {
        $parent.addClass('isFocused');
      });

      element.on('blur', function () {
        $parent.removeClass('isFocused');
      });
    }
  };
}]);

myApp.controller('TimeController', ['$scope', '$timeout', function($scope, $timeout) {
  $scope.tickInterval = 1000;

  var tick = function() {
    $scope.date = Date.now();
    $timeout(tick, $scope.tickInterval);
  };

  $timeout(tick, $scope.tickInterval);
}]);

myApp.controller('WeatherController', ['$scope', '$log', 'weatherService', function($scope, $log, weatherService) {
  weatherService.getWeather('Saskatoon').then(function(data) {
    $scope.weatherData = data;
  });
}]);

myApp.factory('weatherService', ['$http', '$q', function ($http, $q) {
  function getWeather (name) {
    var deferred = $q.defer();
    
    $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + name + '&units=metric&APPID=9ce175c467d3ee9b63148b5e4065dcd7')
    
    .success(function (data) {
      deferred.resolve(data);
    })
    
    .error(function (err) {
      deferred.reject(err);
    });
    
    return deferred.promise;
  }

  return {
    getWeather: getWeather
  };
}]);