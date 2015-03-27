'use strict';
angular.module('TotalTablesApp')
	.controller('TableController', ['$scope', '$filter', '$routeParams', '$localStorage', function($scope, $filter, $routeParams, $localStorage){
        $scope.$storage = $localStorage.$default({
            tables: [{
                country: 'england',
                games: [
                    {
                        command: '',
                        tours: {}
                    }
                ],
                tourHeaders: [],
                commands: []
            },
            {
                country: 'germany',
                games: [
                    {
                        command: '',
                        tours: {}
                    }
                ],
                tourHeaders: [],
                commands: []
            },
            {
                country: 'italy',
                games: [
                    {
                        command: '',
                        tours: {}
                    }
                ],
                tourHeaders: [],
                commands: []
            },
            {
                country: 'spain',
                games: [
                    {
                        command: '',
                        tours: {}
                    }
                ],
                tourHeaders: [],
                commands: []
            },
            {
                country: 'france',
                games: [
                    {
                        command: '',
                        tours: {}
                    }
                ],
                tourHeaders: [],
                commands: []
            }
                    ]            
        });
		$scope.country = $routeParams.country;
        $scope.table =  $filter('getBycountry')($scope.$storage.tables, $scope.country);
        $scope.addTour = function(){
            if($scope.table.tourHeaders.indexOf($scope.newTour) != -1){
                $scope.newTour = '';
            }else{
                $scope.table.tourHeaders.push($scope.newTour.trim());
                $scope.newTour = '';
            }
        };
        $scope.addCommand = function(){
            if($scope.table.commands.indexOf($scope.newCommand) != -1){
                $scope.newCommand = '';
            }else{
                $scope.table.commands.push($scope.newCommand.trim());
                $scope.table.games.push({command: $scope.newCommand.trim(), tours: {}});
                $scope.newCommand = '';
            }
        };
        $scope.removeTour = function(tourName){
            $scope.table.tourHeaders.splice($scope.table.tourHeaders.indexOf(tourName),1);
            for(var g in $scope.table.games)
                delete $scope.table.games[g].tours[tourName];
        };
        $scope.removeCommad = function(commandName){
            $scope.table.commands.splice($scope.table.commands.indexOf(commandName),1);
            $scope.table.games = $scope.table.games
                .filter(function (el) {
                        return el.command != commandName;
            });
        };
	}]);