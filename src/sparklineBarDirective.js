'use strict';

var sparkline = angular.module('hany.sparkline');

sparkline.directive('sparklineBar', [
    function () {

        /**
         * Link directive main function
         * @param {type} scope
         * @param {type} element
         * @param {type} attrs
         * @returns {undefined}
         */
        var link = function (scope, element, attrs) {
            console.log('[SparklineBar] Link directive');
        };

        // directive object
        var directive = {
            restrict: 'E',
            scope: {
                values: '=values',
                options: '=options'
            },
            controller: 'SparklineBarDirectiveController',            
            templateNamespace: 'svg',
            templateUrl: 'template/sparkline_bar.tpl.html',
            link: link
        };
        return directive;
    }
]);
