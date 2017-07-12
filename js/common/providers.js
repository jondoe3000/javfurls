angular.module('app.pro', [])
    .provider('fnPro', function () {

        var fn = function () {

        }

        this.getFnConfig = fn;
        this.$get = function () {
            return {
                getFnCtrl: fn
            }
        }
    })