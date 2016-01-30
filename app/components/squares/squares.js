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
            selected: false,
            style: "square"
          });
        }
      }

      $scope.isSelected = function(x,y) {
        return $scope.squares[x][y].selected;
      };
      $scope.isMine = function(x,y) {
        return ($scope.squares[x][y].name == $scope.name);

      };

      $scope.repaint = function() {
        toastr.info('repaint');
        for (var x=0; x<10; x++) {
          for (var y=0; y<10; y++) {
            $scope.setstyle(x,y);
          }
        }
      }

      $scope.clickit = function(x,y) {

        // need a name, dummy
        if ($scope.name == '') {
          toastr.error("Name is required");
          return;
        }

        // is this taken?
        if ($scope.isSelected(x,y)){
          // is it taken by the current user?
          if ($scope.isMine(x,y)) {
            $scope.squares[x][y].name = undefined;
            $scope.squares[x][y].selected = false;
          } else {
            toastr.info('You do not own this bitch');
          }
        }
        else {
          $scope.squares[x][y].selected = true;
          $scope.squares[x][y].name = $scope.name;
        }
        this.setstyle(x,y);
      };

      $scope.setstyle= function(x,y) {
        // if it's owned by someone else then one color
        if ($scope.isSelected(x,y)) {
          if ($scope.isMine(x,y)) {
            $scope.squares[x][y].style = "square sq-mine";
          }
          else {
            // if it's owned by me then highlight it
            $scope.squares[x][y].style = "square sq-selected";
          }

        }
        else {
          $scope.squares[x][y].style = "square";
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