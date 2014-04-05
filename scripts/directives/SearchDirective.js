var auction;
(function (auction) {
    (function (directive) {
        'use strict';

        function searchDirective() {
            return {
                scope: true,
                restrict: 'E',
                templateUrl: 'views/partial/searchform.html'
            };
        }

        angular.module('auction').directive('auctionSearch', searchDirective);
    })(auction.directive || (auction.directive = {}));
    var directive = auction.directive;
})(auction || (auction = {}));
//# sourceMappingURL=SearchDirective.js.map
