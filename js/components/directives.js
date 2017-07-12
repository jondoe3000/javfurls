angular.module('app.dir', [])
    .directive('dirDir', function () {
        return {
            restrict: 'AE',
            scope: {
                users: '='
            },
            template: '<div></div>',
            link: function (scope, element, attrs) {

            }
        }
    })
    .directive('nmFocusOn', function() {
    return function(scope, elem, attr) {
        //scope.$on(attr.focusOn, function(e) {
            elem[0].focus();
      //  });
    };
})
    .directive('onError', function() {
  return {
    restrict:'A',
    link: function(scope, element, attr) {
      element.on('error', function() {
        element.attr('src', attr.onError);
      })
    }
  }
})