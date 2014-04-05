var auction;
(function (auction) {
    (function (controller) {
        'use strict';

        var ProductController = (function () {
            function ProductController($scope, product) {
                this.$scope = $scope;
                this.product = product;
                this.isSearchFormShown = false;
                $scope.model = {
                    "product": product,
                    "isSearchFormShown": this.isSearchFormShown
                };
            }
            ProductController.$inject = ['$scope', 'product', 'ProductService', '$route'];

            ProductController.resolve = {
                product: [
                    'ProductService', '$route', function (productService, $route) {
                        return productService.getProductById($route.current.params.id);
                    }]
            };
            return ProductController;
        })();
        controller.ProductController = ProductController;

        angular.module('auction').controller('ProductController', ProductController);
    })(auction.controller || (auction.controller = {}));
    var controller = auction.controller;
})(auction || (auction = {}));
//# sourceMappingURL=ProductController.js.map
