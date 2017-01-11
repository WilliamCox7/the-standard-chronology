angular.module('standardChronology', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
      templateUrl: '../views/home.html',
      url: '/',
      controller: 'homeCtrl'
    })
    .state('word', {
      templateUrl: '../views/word.html',
      url: '/:book/Ch:chap/Vs:vers',
      controller: 'wordCtrl'
    });
});
