squaresModule
.controller('squaresCtrl',
    ["$scope", "$state", "$http", '$log', 'toastr',
    function($scope, $state, $http, $log, toastr){
      $scope.log = $log;
      $scope.squares = [];
      $scope.name="";
      $scope.selected=0;

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
        // foundationApi.publish('main-notifications', { title: 'Test', content: 'Test2' });
        toastr.success("["+x+"]["+y+"]");
        $scope.squares[x][y].selected = !$scope.squares[x][y].selected;
        if ($scope.squares[x][y].selected) {
          $scope.selected++;
        }
        else {
          $scope.selected--;
        }
      };
    }]);