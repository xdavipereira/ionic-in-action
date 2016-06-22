angular.module('App').controller('AtividadesController', 
  function(Atividade, $scope,$stateParams,$state) { 
    $scope.atividades = [];

    $scope.filtro = '';

    $scope.mensagem = {texto: ''};
  
    function buscaAtividades() {
      Atividade.query(
        function(atividades) {
          $scope.atividades = atividades;
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
    buscaAtividades();

    $scope.remove = function(atividade) {
      Atividade.delete({id: atividade._id}, 
        buscaAtividades, 
        function(erro) {
          $scope.mensagem = {
            texto: 'Não foi possível remover a Atividade'
          };
          $state.go('atividades');
          console.log(erro);
        }
      );
    }; 
});