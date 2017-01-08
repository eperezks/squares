// (function() {
  // 'use strict';

  var squaresModule = angular.module('application.squares', []);

  var application = angular.module('application', [
    'ui.router',
    'ngAnimate',
    'foundation',
    'application.squares'
  ])
    .config(config)
    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }

// })();
