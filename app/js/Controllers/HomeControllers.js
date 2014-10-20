"use strict";

angular.module("BCSG.Controllers")
    .controller("HomeController", function($scope, AppleApiService) {
        $scope.data = {
            selectedAuthor: null,
            authors: [
                'Hemingway',
                'Dickens',
                'Shakespeare'
            ],
            titles: []
        };

        $scope.methods = {
            getAuthorTitles: function(authorName) {
                AppleApiService.searchBooksByAuthor(authorName)
                    .then(function(titles) {
                        $scope.data.titles = [];

                        angular.forEach(titles.results, function(title) {
                            $scope.data.titles.push(title);
                        })
                    });
            }
        };

        $scope.methods.getAuthorTitles($scope.data.titles[0]);
    });