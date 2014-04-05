var auction;
(function (auction) {
    (function (controller) {
        'use strict';

        var SearchController = (function () {
            function SearchController($scope, service) {
                this.$scope = $scope;
                this.service = service;
                this.service.getSearch().then(function (realProductsList) {
                    return $scope.model = {
                        "heading": realProductsList.heading,
                        "items": realProductsList.items
                    };
                });
            }
            SearchController.$inject = ['$scope', 'ProductService'];
            return SearchController;
        })();
        controller.SearchController = SearchController;

        angular.module('auction').controller('SearchController', SearchController);
    })(auction.controller || (auction.controller = {}));
    var controller = auction.controller;
})(auction || (auction = {}));
//# sourceMappingURL=SearchController.js.map
