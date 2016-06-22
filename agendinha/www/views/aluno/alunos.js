angular.module('App').controller('AlunosController', 
  function(Aluno, $scope,$stateParams,$state) { 
    $scope.alunos = [];

    $scope.filtro = '';

    $scope.mensagem = {texto: ''};
  
    function buscaAlunos() {
      Aluno.query(
        function(alunos) {
          $scope.alunos = alunos;
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
    buscaAlunos();

    $scope.remove = function(aluno) {
      Aluno.delete({id: aluno._id}, 
        buscaAlunos, 
        function(erro) {
          $scope.mensagem = {
            texto: 'Não foi possível remover o aluno'
          };
          $state.go('alunos');
          console.log(erro);
        }
      );
    }; 
});