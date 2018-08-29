const app = angular.module('app', [])
app.directive('helloTo', ['$window', function ($window) {
    return {
        restrict: 'A',
        template: '<div>' +
            '   Hello, {{ vm.userName }}' +
            '   <button ng-click="vm.sayHello()">Alert</button>' +
            '</div>',
        controller: function ($scope, $element, $attrs) {
            const vm = this
            vm.userName = $attrs.helloTo
            vm.sayHello = function () {
                $window.alert('Hello, ' + vm.userName)
            }
        },
        controllerAs: 'vm'
    }
}])