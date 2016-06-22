angular.module('App').controller('UsersController', 
  function(User, $scope,$stateParams,$state) { 
    $scope.users = [];

    $scope.filtro = '';

    $scope.mensagem = {texto: ''};
  
    function buscaUsers() {
      User.query(
        function(users) {
          console.log(users);
          $scope.users = users;
          $scope.mensagem = {};
        },
        function(erro) {
          console.log(erro);
          $scope.mensagem = {
            texto: 'Não foi possível obter a lista'
          };
        }
      ); 
    }
    buscaUsers();

    $scope.remove = function(user) {
      User.delete({id: user._id}, 
        buscaUsers, 
        function(erro) {
          $scope.mensagem = {
            texto: 'Não foi possível remover a User'
          };
          $state.go('users');
          console.log(erro);
        }
      );
    }; 
});