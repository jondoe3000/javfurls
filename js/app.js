angular.module('app', [
    'app.ctrl',
    'app.fac',
    'app.fil',
    'app.pro',
    'app.ser',
    'app.com',
    'app.dir',
    'app.con',
    //dep
    'ui.router',
/*    'angularBootstrapMaterial',*/
    'ngMessages',
    'ngStorage',
    "wu.masonry",
    "firebase",
    // "afkl.lazyImage",
    "angularLazyImg",
])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider',
        '$qProvider',
    function (
            $stateProvider,
            $urlRouterProvider,
            $locationProvider,
            $qProvider) {

            $qProvider.errorOnUnhandledRejections(false);

            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state('main', {
                    url: "/",
                    templateUrl: "tpl/home.tpl.html",
                    controller: 'homeCtrl',
                    controllerAs: 'ho'
                })
                 .state('topStars', {
                    url: "/top-stars",
                    templateUrl: "tpl/top-stars.tpl.html",
                    controller: 'topStarsCtrl',
                    controllerAs: 'ts'
                })
                   .state('favStars', {
                    url: "/fav-stars",
                    templateUrl: "tpl/fav-stars.tpl.html",
                    controller: 'favStarsCtrl',
                    controllerAs: 'fs'
                })
                     .state('uncensored', {
                    url: "/uncensored",
                    templateUrl: "tpl/uncensored.tpl.html",
                    controller: 'uncensoredCtrl',
                    controllerAs: 'un'
                })
                .state('cart', {
                    url: "/cart",
                    templateUrl: "tpl/cart.tpl.html",
                    // controller: 'cartCtrl',
                    // controllerAs: 'ca'
                    redirectTo: 'cart.videos'
                })
              .state('cart.stars', {
                    url: "/stars",
                    templateUrl: "tpl/cart.stars.tpl.html",
                    controller: 'cartStarsCtrl',
                    controllerAs: 'cs'
                })
              .state('cart.videos', {
                    url: "/videos",
                    templateUrl: "tpl/cart.videos.tpl.html",
                    controller: 'cartVideosCtrl',
                    controllerAs: 'cv'
                })
                .state('starVideos',{
                    url: "/videos/:starName",
                    templateUrl: "tpl/star-videos.tpl.html",
                    controller: 'starVideosCtrl',
                    controllerAs: 'sv'
                })
                 .state('busqueda', {
                    url: "/busqueda",
                    templateUrl: "tpl/buscador.tpl.html",
                    controller: 'busquedaCtrl',
                    controllerAs: 'bu'
                })
                 .state('firebase', {
                    url: "/firebase",
                    templateUrl: "tpl/firebase-test.tpl.html",
                    controller: 'firebaseCtrl',
                    controllerAs: 'fb'
                })
               /* .state('pokemon', {

                    templateUrl: 'tpl/pokemon.tpl.html',
                    controller: 'pokemonCtrl',
                    controllerAs: 'pkmCtrl'
                })
                .state('pokemon.details', {

                    url: '/pokemon',
                    views: {
                        'tabs': {
                            templateUrl: 'tpl/pokemon.tabs.tpl.html'
                        },
                        'comments': {
                            templateUrl: 'tpl/pokemon.comments.tpl.html',
                            controller: 'pokemonCommentsCtrl',
                            controllerAs: 'co'
                        }
                    }
                })*/
                .state('404', {
                    url: "/404",
                    templateUrl: "tpl/error.tpl.html",
                    controller: 'errCtrl',
                    controllerAs: 'er'
                })

                //FIREBASE CONFIG
                 var config = {
                    apiKey: "AIzaSyCAxMRZSRCZc3vB27bh80rg4Tozf_IvF8g",               // Your Firebase API key
                    authDomain: "players-ce021.firebaseapp.com",       // Your Firebase Auth domain ("*.firebaseapp.com")
                    databaseURL: "https://players-ce021.firebaseio.com",     // Your Firebase Database URL ("https://*.firebaseio.com")
                    storageBucket: "players-ce021.appspot.com"  // Your Cloud Storage for Firebase bucket ("*.appspot.com")
                };
                firebase.initializeApp(config);

}])

    .run(['$rootScope', '$state', function($rootScope, $state) {

    $rootScope.$on('$stateChangeStart', function(evt, to, params) {
      if (to.redirectTo) {
        evt.preventDefault();
        $state.go(to.redirectTo, params, {location: 'replace'})
      }
    });
}]);