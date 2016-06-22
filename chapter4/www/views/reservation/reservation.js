angular.module('App')
    .controller("ReservationController", function($scope){
        
        $scope.reservation = {
            checkin: new Date(),
            checkout: new Date(Date.now() + 1000*60*60*24*7),
            room: 167,
            rate: 121,
            wifi: 'resortwifi'
            
        };
    });
