'use strict';
var TotalTablesApp = angular.module('TotalTablesApp', ['ngResource','ngRoute', 'ngStorage', 'ui.sortable', 'ui.tree']);
TotalTablesApp.config(['$routeProvider', '$locationProvider',function ($routeProvider, $locationProvider) {
		 //  $locationProvider.html5Mode({
			//   enabled: true,
			//   requireBase: false
			// });
		  $routeProvider
		    .when('/table',
		      { templateUrl: 'TotalTablesApp/templates/main-page.html',
		        controller: "MainController" })
		    .when('/table/:country',
		      { templateUrl: 'TotalTablesApp/templates/table.html',
		        controller: "TableController" })
		    .when('/all',
		      { templateUrl: 'TotalTablesApp/templates/joiner.html',
		        controller: "JoinerController" })
		    .otherwise({ redirectTo: '/table' });
	}]);
TotalTablesApp.filter('getBycountry', function() {
  return function(input, countryName) {
    var i=0, len=input.length;
    for (; i<len; i++) {
      if (input[i].country == countryName) {
        return input[i];
      }
    }
    return null;
  }
});