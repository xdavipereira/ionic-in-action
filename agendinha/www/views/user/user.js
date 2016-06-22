angular.module('App')
    .controller('UserController',function($scope,User,$stateParams,$state){
    	
		if($stateParams.userId) {
			User.get({id: $stateParams.userId}, 
				function(user) {
					$scope.user = user;
				}, 
				function(erro) {
					$scope.mensagem = {
					  texto: 'User não existe. Novo user.'
					};
				}
			);	
		} else {
			$scope.user = new User();
		}


		$scope.salva = function() {
		  $scope.user.$save()
		  	.then(function() {
		  		$scope.mensagem = {texto: 'Salvo com sucesso'};
		  		// limpa o formulário
		  		$scope.user = new User();
		  		console.log("deu certo");
		  		$state.go('testes');
		  	})
		  	.catch(function(erro) {
		  		$scope.mensagem = {texto: 'Não foi possível salvar'};
		  				  		console.log("deu ruim");
		  	});
		};	

		User.query(function(users) {
			$scope.users = users;
    	});	
        
    })