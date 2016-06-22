angular.module('App')
    .controller('WeatherController', function($scope, $http, $ionicLoading){
        var directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
        
        $ionicLoading.show();
         $http.get('https://ionic-in-action-api.herokuapp.com/weathers')
            .success(function(data){
              $scope.weather = data;
              $ionicLoading.hide();
            })
            .error(function(erro){
                
                $ionicLoading.show({
                    template: 'Nãoi foi possivel carregar o clima, tente novamente mais tarde.',
                    duration: 3000
                });
            })
            
        
        $scope.getDirection = function(degree){
            if(degree > 338){
                degree = 360 - degree;
            }
            var index = Math.floor((degree+22)/45);
            return directions[index];
        }
        
    })