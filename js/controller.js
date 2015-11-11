(function() {
angular.module('smurfApp')
       .controller('homeCtrl', function($scope, smurfService) {
          $scope.getData = function() {
            smurfService.getSmurfs()
            .then(function(res) {
              // console.log(res)
              $scope.smurfs = res.data;
              $scope.smurfId = res.data.id;
            });
            }
            $scope.getData();

            $scope.addSmurf = function(newSmurf) {
              smurfService.addSmurf($scope.newSmurf)
              .then(function(res) {
                $scope.smurfs = res.data;
                $scope.newSmurf = '';
              })
            }

            // setInterval(function() {
            //   $scope.getData();
            // }, 1000);

          })


})();
