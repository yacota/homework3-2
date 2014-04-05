var auction;
(function (auction) {
    (function (service) {
        'use strict';

        var ProductService = (function () {
            function ProductService($http, $q) {
                this.$http = $http;
                this.$q = $q;
            }
            ProductService.prototype.getFeatured = function () {
                return this.getData('data/featured.json');
            };

            ProductService.prototype.getSearch = function () {
                return this.getData('data/search.json');
            };

            ProductService.prototype.getProductById = function (productId) {
                return this.getDataById('data/' + productId + '.json');
            };

            ProductService.prototype.getData = function (urlJSON) {
                console.log('ProductService retrieving->' + urlJSON);
                var deferredProducts = this.$q.defer();
                this.$http.get(urlJSON).success(function (data) {
                    return deferredProducts.resolve(data);
                }).error(function () {
                    return deferredProducts.reject();
                });
                return deferredProducts.promise;
            };

            ProductService.prototype.getDataById = function (urlJSON) {
                console.log('ProductService retrieving by Id->' + urlJSON);
                var deferredProducts = this.$q.defer();
                this.$http.get(urlJSON).success(function (data) {
                    return deferredProducts.resolve(data);
                }).error(function () {
                    return deferredProducts.reject();
                });
                return deferredProducts.promise;
            };
            ProductService.$inject = ['$http', '$q'];
            return ProductService;
        })();
        service.ProductService = ProductService;

        angular.module('auction').service('ProductService', ProductService);
    })(auction.service || (auction.service = {}));
    var service = auction.service;
})(auction || (auction = {}));
//# sourceMappingURL=ProductService.js.map
