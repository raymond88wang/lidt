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
        vm.isCollapsed = false;
        vm.dashboard = true;
        vm.isReportsCollapsed = true;
        vm.isGraphsCollapsed = true;
        vm.DashboardButtonText = vm.isCollapsed ? 'Dashboard' : 'Device Count Dashboard';
    }
})();