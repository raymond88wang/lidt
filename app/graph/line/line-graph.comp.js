(function () {
    'use strict';
    angular.module('lidt')
        .component('lineGraph', {
            templateUrl: 'graph/line/line-graph.tpl.html',
            controllerAs: 'vm',
            controller: Controller,
            bindings: {
                Id: '@',

                Label: '@?',
                Options: '<?'
            }
        });

    Controller.$inject = ['$scope', 'DataService', 'ChartJs']

    function Controller($scope, DataService, ChartJsProvider)
    {
        var vm = this;
        vm.count = 0;
        vm.refresh = refresh;
        ChartJsProvider.options = { colors: ['#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] };

        (function _init() {
            refresh();
        })();

        function refresh() {
            //DataService.GetDeviceCount(vm.deviceId)
            //    .then(function (count) {
            //        vm.count = count;
            //    });
            vm.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
            vm.data = [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90]
            ];
            vm.series = ['Series A', 'Series B'];
            vm.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
            vm.options = {
                scales: {
                    yAxes: [
                        {
                            id: 'y-axis-1',
                            type: 'linear',
                            display: true,
                            position: 'left'
                        },
                        {
                            id: 'y-axis-2',
                            type: 'linear',
                            display: true,
                            position: 'right'
                        }
                    ]
                }
            };
        }
    }
})();