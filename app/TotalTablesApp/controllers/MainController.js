'use strict';
angular.module('TotalTablesApp')
	.controller('MainController', ['$scope', '$localStorage', function($scope, $localStorage){
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
                    ],
             order: ['england', 'germany', 'italy', 'spain', 'france'],
             translater: {
                 england: 'Англия',
                 germany: 'Германия',
                 italy: 'Италия',
                 spain: 'Испания',
                 france: 'Франция'
             }
        });
	}]);