(function () {
    'use strict';
    angular.module('lidt')
        .component('lineGraph', {
            templateUrl: 'graph/line/line-graph.tpl.html',
            controllerAs: 'vm',
            controller: Controller,
            bindings: {
                Id: '@',
                Model: '<',

                Label: '@?',
                Options: '<?'
            }
        });

    Controller.$inject = ['DataService']

    function Controller(DataService)
    {
        var vm = this;
        vm.count = 0;
        vm.refresh = refresh;

        (function _init() {
            refresh();
        });

        function refresh() {
            DataService.GetDeviceCount(vm.deviceId)
                .then(function (count) {
                    vm.count = count;
                });
        }
    }
})();