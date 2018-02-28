(function () {
    'use strict';
    angular.module('lidt', [
        'ngResource',
        'ngAnimate',
        'lidt.templates',

        //vendors
        'ui.bootstrap',
        'chart.js'
    ]);
})();
(function () {
    'use strict';
    angular.module('lidt')
        .factory('DataResource', DataResource);

    DataResource.$inject = ['$resource'];

    function DataResource($resource)
    {
        var apiUrl = '';
        return $resource(apiUrl, null, {
            getAllClientDevices: {
                method: 'GET',
                url: apiUrl + 'GetAllClientDevices',
                params: {
                    clientId: '@clientId'
                },
                cache: true
            },
            getDeviceCount: {
                method: 'GET',
                url: apiUrl + 'GetDeviceCount',
                params: {
                    deviceId: '@deviceId'
                },
                cache: true
            }
        });
    }
})();
(function () {
    'use strict';
    angular.module('lidt')
        .factory('DataService', DataService);

    DataService.$inject = ['$q', 'DataResource'];

    function DataService($q, DataResource)
    {
        return {
            GetAllClientDevices: GetAllClientDevices,
            GetDeviceCount: GetDeviceCount
        }

        function GetAllClientDevices(clientId) {
            deferred = $q.defer();

            DataResource.getAllClientDevices(clientId).$promise
                .then(function (devices) {
                    deferred.resolve(devices);
                });

            return deferred.promise;
        }

        function GetDeviceCount(deviceId) {
            deferred = $q.defer();

            DataResource.GetDeviceCount(deviceId).$promise
                .then(function (count) {
                    deferred.resolve(count);
                });

            return deferred.promise;
        }
    }
})();
(function () {
    'use strict';
    angular.module('lidt')
        .component('deviceCountCard', {
            templateUrl: 'card/device-count-card.tpl.html',
            controllerAs: 'vm',
            controller: Controller,
            bindings: {
                DeviceId: '@?'
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
            DataService.GetDeviceCount(vm.DeviceId)
                .then(function (count) {
                    vm.count = count;
                });
        }
    }
})();
(function () {
    'use strict';
    angular.module('lidt')
        .component('cardContainer', {
            templateUrl: 'card/container/card-container.tpl.html',
            controllerAs: 'vm',
            controller: Controller
        });

    Controller.$inject = ['DataService']

    function Controller(DataService) {
        var vm = this;
        vm.devices = [];

        function addDevice(deviceId) {
            vm.devices.push(deviceId);
        }
    }
})();
(function () {
    'use strict';
    angular.module('lidt')
        .component('sideNavbar', {
            templateUrl: 'navbar/side/side-navbar.tpl.html',
            controllerAs: 'vm',
            controller: Controller
        });

    Controller.$inject = []

    function Controller() {
        var vm = this;
    }
})();
(function () {
    'use strict';
    angular.module('lidt')
        .component('topNavbar', {
            templateUrl: 'navbar/top/top-navbar.tpl.html',
            controllerAs: 'vm',
            controller: Controller
        });

    Controller.$inject = ['DataService']

    function Controller(DataService) {
        var vm = this;
        vm.devices = [];

        (function _init() {
            //DataService.GetAllClientDevices(clientId)
            //    .then(function (devices) {
            //        vm.devices = devices;
            //    });
        })();

        function onSelect(device) {
            vm.devices.push(device);
        }

        function logout()
        {

        }
    }
})();
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