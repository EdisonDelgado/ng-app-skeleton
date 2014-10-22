'use strict';

/**
 * @ngdoc function
 * @name ngRpiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngRpiApp
 */
angular.module('ngRpiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
