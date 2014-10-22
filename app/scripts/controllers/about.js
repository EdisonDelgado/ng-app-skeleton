'use strict';

/**
 * @ngdoc function
 * @name ngRpiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngRpiApp
 */
angular.module('ngRpiApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
