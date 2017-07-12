angular.module('app.fil', [])
    .filter('fnFil', function () {
        return function (el) {
            return el + ' filtered';
        }
    })