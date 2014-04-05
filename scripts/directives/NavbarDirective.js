var auction;
(function (auction) {
    (function (directive) {
        'use strict';

        function navbarDirective() {
            return {
                scope: false,
                restrict: 'E',
                templateUrl: 'views/partial/navbar.html'
            };
        }

        angular.module('auction').directive('auctionNavbar', navbarDirective);
    })(auction.directive || (auction.directive = {}));
    var directive = auction.directive;
})(auction || (auction = {}));
//# sourceMappingURL=NavbarDirective.js.map
