angular.module('App')
    .controller('AlunoController',function($scope,Aluno,$stateParams,$state){
    	
		if($stateParams.alunoId) {
			Aluno.get({id: $stateParams.alunoId}, 
				function(aluno) {
					$scope.aluno = aluno;
				}, 
				function(erro) {
					$scope.mensagem = {
					  texto: 'Aluno não existe. Novo aluno.'
					};
				}
			);	
		} else {
			$scope.aluno = new Aluno();
		}


		$scope.salva = function() {
		  $scope.aluno.$save()
		  	.then(function() {
		  		$scope.mensagem = {texto: 'Salvo com sucesso'};
		  		// limpa o formulário
		  		$scope.aluno = new Aluno();
		  		console.log("deu certo");
		  		$state.go('alunos');
		  	})
		  	.catch(function(erro) {
		  		$scope.mensagem = {texto: 'Não foi possível salvar'};
		  				  		console.log("deu ruim");
		  	});
		};	

		Aluno.query(function(alunos) {
			$scope.alunos = alunos;
    	});	
        
    })