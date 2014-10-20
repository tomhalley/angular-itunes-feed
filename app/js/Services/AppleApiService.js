"use strict";

angular.module("BCSG.Services")
    .service("AppleApiService", function($http, $q) {
        var cachedResults = [];

        this.searchBooksByAuthor = function(authorName) {
            var deferred = $q.defer();

            if(cachedResults[authorName] !== undefined) {
                deferred.resolve(cachedResults[authorName]);
            } else {
                $http.jsonp("https://itunes.apple.com/search?country=gb&term=" + authorName +
                "&media=ebook&limit=10&callback=JSON_CALLBACK")
                    .success(function(results) {
                        cachedResults[authorName] = results;
                        deferred.resolve(results);
                    })
                    .error(function(data, status) {
                        switch(status) {
                            default:
                                deferred.reject("Unable to get results from feed");
                                break;
                        }
                    });
            }

            return deferred.promise;
        }
    });