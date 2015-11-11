(function() {
angular.module('smurfApp', ['ui.router'])
       .config(function($stateProvider, $urlRouterProvider) {

         $urlRouterProvider.otherwise('/home');

         $stateProvider
            .state('home', {
              url: '/home',
              templateUrl: 'home/homeTmpl.html',
              controller: 'homeCtrl',
            })
            .state('smurfs', {
              url: '/smurfs/:smurfId',
              templateUrl: 'smurf/smurfTmpl.html',

              resolve: {
                getId: function(smurfService, $stateParams) {
                  smurfService.getData();
                  var smurfId = $stateParams.smurfId;
                  console.log(smurfId)
                }
              }
            })
       })



})();
