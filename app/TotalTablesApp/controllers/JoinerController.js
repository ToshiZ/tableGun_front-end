'use strict';
angular.module('TotalTablesApp')
	.controller('JoinerController', ['$scope', '$localStorage', function($scope, $localStorage){
        $scope.$storage = $localStorage;
        $scope.tables = $localStorage.tables;
        $scope.allTours = [];
        for(var t in $scope.$storage.tables){
            for(var g in $scope.$storage.tables[t].games){
                for(var tour in $scope.$storage.tables[t].games[g].tours){
                    if($scope.allTours.indexOf(tour) == -1)
                        $scope.allTours.push(tour);
                }
            }
        }
	}]);