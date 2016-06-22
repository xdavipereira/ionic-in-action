angular.module('App')
    .controller('SearchController', function($scope,$http){
        
        $scope.model = {
            search: ''
        };
        
        $scope.buscar = function(){
            $http.get('https://maps.googleapis.com/maps/api/geocode/json', {params:{address: $scope.model.search}})
              .success(function(response){
                $scope.listaDaPesquisa = response.results;
                console.log(response)
            }).error(function(err){
                console.log(err)
            })
        };
        
        
    });