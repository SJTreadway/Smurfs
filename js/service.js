(function() {
angular.module('smurfApp')
       .service('smurfService', function($http) {

          this.getSmurfs = function() {
            return $http({
              method: 'GET',
              url: 'http://smurfs.devmounta.in/smurfs/'
            });
          };

          this.addSmurf = function(newSmurf) {
            return $http({
              method: 'POST',
              url: 'http://smurfs.devmounta.in/smurfs/',
              data: {name: newSmurf}
            })
          }
       });



})();
