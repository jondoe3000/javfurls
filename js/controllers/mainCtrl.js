angular.module('app.ctrl', [])
    .controller('mainCtrl', [
        '$rootScope',
        '$scope',
        '$state',
        'PgInfoCon',
    function (
            $rootScope,
            $scope,
            $state,
            PgInfoCon) {
            var vm = this;
            $rootScope.$on('$stateChangeStart',
                function (event, toState, toParams, fromState, fromParams) {
                    $rootScope.$stateName = toState.name;
                    console.log($rootScope.$stateName);
                    console.log("02:10");
                })

            this.materialize = function () {
                $.material.init();
            }


}])



