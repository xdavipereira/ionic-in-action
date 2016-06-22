angular.module('App', ['ionic'])
  
  .config(function($stateProvider,$urlRouterProvider){
    
    $stateProvider
      .state('search',{
        url: '/search',
        templateUrl: 'views/search/search.html',
        controller: 'SearchController'
      })
      .state('agenda',{
        url: '/agenda',
        templateUrl: 'views/agenda/agenda.html'
      })
      
      $urlRouterProvider.otherwise('/agenda');
    
  })

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
