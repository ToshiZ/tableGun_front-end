'use strict';
angular.module('TotalTablesApp')
	.controller('JoinerController', ['$scope', '$localStorage', function($scope, $localStorage){
        $scope.$storage = $localStorage;
        $scope.tables = $localStorage.tables;
        $scope.getAllTours = function(){
            $scope.allTours = [];
            $scope.totals = {};
            for(var t in $scope.$storage.tables){
                for(var g in $scope.$storage.tables[t].games){
                    for(var tour in $scope.$storage.tables[t].games[g].tours){
                        if($scope.allTours.indexOf(tour) == -1)
                            $scope.allTours.push(tour);
                        if(!$scope.totals.hasOwnProperty(tour)){
                                $scope.totals[tour] = {};
                                $scope.totals[tour]['bigger2'] = 0;
                                $scope.totals[tour]['less2'] = 0;
                            }
                            if($scope.$storage.tables[t].games[g].tours[tour][0] + $scope.$storage.tables[t].games[g].tours[tour][1] > 2)
                                $scope.totals[tour]['bigger2']++;
                            else if($scope.$storage.tables[t].games[g].tours[tour][0] + $scope.$storage.tables[t].games[g].tours[tour][1] <= 2)
                                $scope.totals[tour]['less2']++;
                        
                    }
                }
            }
            $scope.allTours.sort(function(a,b){
                return new Date(a) - new Date(b);
            });
        };
        $scope.getTotals = function(){
            $scope.totals = {};
            for(var tb in $scope.$storage.tables){
                for(var g in $scope.$storage.tables[t].games){
                    
                }
            }
        };
	}]);