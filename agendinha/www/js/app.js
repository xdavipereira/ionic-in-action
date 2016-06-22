angular.module('App', ['ionic','ngResource'])

  .factory('Aluno', function($resource) {
  	
  	return $resource('https://meanteste-xdavipereira.c9users.io/alunos/:id');
  })
  
    .factory('Atividade', function($resource) {
  	
  	return $resource('https://meanteste-xdavipereira.c9users.io/atividades/:id');
  })
    .factory('User', function($resource) {
  	
  	return $resource('https://meanteste-xdavipereira.c9users.io/users/:id');
  })
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tour',{
      url: '/tour',
      templateUrl: 'views/tour/tour.html'
      
    })
    .state('aluno',{
      url: '/aluno',
      templateUrl: 'views/aluno/aluno.html',
      controller: 'AlunoController'
      
    })
    .state('alunos',{
      url: '/alunos',
      templateUrl: 'views/aluno/alunos.html',
      controller: 'AlunosController'
    })
    .state('atividade',{
      url: '/atividade',
      templateUrl: 'views/atividade/atividade.html',
      controller: 'AtividadeController'
      
    })
    .state('atividades',{
      url: '/atividades',
      templateUrl: 'views/atividade/atividades.html',
      controller: 'AtividadesController'
      
    })
    .state('teste',{
      url: '/teste',
      templateUrl: 'views/user/user.html',
      controller: 'UserController'
      
    })
    .state('testes',{
      url: '/testes',
      templateUrl: 'views/user/users.html',
      controller: 'UsersController'
      
    });
    
  $urlRouterProvider.otherwise('/tour');
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
