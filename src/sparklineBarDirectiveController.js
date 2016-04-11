'use strict';

var sparkline = angular.module('hany.sparkline');

sparkline.controller('SparklineBarDirectiveController', ['$scope',
    function ($scope) {
        var svgHeight = 50;
        var svgWidth = 120;
        var stylePositive = 'fill: green;stroke: green;stroke-width:1';
        var styleNegative = 'fill: red;stroke: red;stroke-width:1';
        var styleZero = 'fill: orange;stroke: orange;stroke-width:1';
        
        $scope.width = svgWidth;
        $scope.height = svgHeight;


        var values = $scope.values;
        if (!values) {
            //return;
            // just for testing purpuse
            // values = [10, 12, -24, 27, 5, 9, 20, 1, 5, 10, -3, 18];
        }
        var percentMin = 5;        
        var count = values.length;
        var columns = [];
        var space = 3;
        var i = 0;
        var columnWeight = Math.floor((svgWidth - ((count - 1) * space)) / count);
        var max = Math.max.apply(null, values);
        var min = Math.min.apply(null, values);
        var zero = min < 0 ? Math.floor(svgHeight / 2) : svgHeight;
        console.log('Column Width: ' + columnWeight + ' height: ' + svgHeight + ' zero: ' + zero);
        //debugger;
        //var percent = Math.floor(svgHeight / 100);

        values.forEach(function (value) {
            var y = 0;
            var width = columnWeight;
            var height = 0;
            var style = stylePositive;
            var per = Math.floor(value / (max / 100));
            
            if (per < percentMin) {
                per = percentMin;
                style = styleZero;
            }
            var v = (Math.abs(per) / 100) * zero;
            var x = (i * (columnWeight + space));
            if (value > 0){
                y = (zero - v);
                height = v;                
            }
            else {
                y = zero;
                height = zero;
                style = styleNegative;
            }            
            
            // console.log('value: ' + value + ' in ' + per + '%');
            columns.push({x: x, y: y, width: width, height: height, style: style});
            i++;
        });

        $scope.columns = columns;
    }
]);
