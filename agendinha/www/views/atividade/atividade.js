angular.module('App')
    .controller('AtividadeController',function($scope,Atividade,$stateParams,$state){
    	
		if($stateParams.atividadeId) {
			Atividade.get({id: $stateParams.atividadeId}, 
				function(atividade) {
					$scope.atividade = atividade;
				}, 
				function(erro) {
					$scope.mensagem = {
					  texto: 'Atividade não existe. Novo atividade.'
					};
				}
			);	
		} else {
			$scope.atividade = new Atividade();
		}


		$scope.salva = function() {
		  $scope.atividade.$save()
		  	.then(function() {
		  		$scope.mensagem = {texto: 'Salvo com sucesso'};
		  		// limpa o formulário
		  		$scope.atividade = new Atividade();
		  		console.log("deu certo");
		  		$state.go('atividades');
		  	})
		  	.catch(function(erro) {
		  		$scope.mensagem = {texto: 'Não foi possível salvar'};
		  				  		console.log("deu ruim");
		  	});
		};	

		Atividade.query(function(atividades) {
			$scope.atividades = atividades;
    	});	
        
    })