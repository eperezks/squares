squaresModule
.controller('squaresCtrl',
    ["$scope", "$state", "$http", '$log', 'toastr',
    function($scope, $state, $http, $log, toastr){
      $scope.log = $log;
      $scope.squares = [];
      $scope.name="";

      for (var i=0; i<10; i++) {
        // inner loop applies to sub-arrays
        $scope.squares.push([]);
        for (var j=0; j<10; j++) {
          // accesses each element of each sub-array in turn
          // console.log( $scope.squares[i][j] );
          $scope.squares[i].push({
            selected: false
          });
        }
      }



      $scope.clickit = function(x,y) {
        if ($scope.name == '') {
          toastr.error("Invalid Name");
          return;
        }

        if ($scope.squares[x][y].selected){
          $scope.squares[x][y].name = undefined;
          $scope.squares[x][y].selected = false;

        }
        else {
          $scope.squares[x][y].selected = true;
          $scope.squares[x][y].name = $scope.name;
        }
      };

      $scope.purchase = function() {
        for (var i=0; i<10; i++) {
          for (var j=0; j<10; j++) {
            if ($scope.squares[i][j].selected) {
              // set the name
              $scope.squares[i][j].name = $scope.name;

              // de-select it
              $scope.clickit(i,j);
            }
          };
        };
      };
    }]);