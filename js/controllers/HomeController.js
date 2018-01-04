app.controller("HomeController", ['$scope', 'databaseService', 'firebaseService', 
	function($scope, databaseService, firebaseService){

	var email,password;

	$scope.addAccount = function() {
		console.log('clicked');
		email = 'test03@test.com';
		password = 'test03';
		databaseService.addAccount('Test 3', email, password).then(function(result){
			console.log('success', result);
		}, function(error){
			console.log('error', error);
		});

		console.log()
	};

	$scope.login = function() {
		console.log('login');
		console.log('email: ' + email);
		console.log('password: ' + password);

		firebase.auth().signInWithEmailAndPassword(email, password).then(function(result){
			console.log('login', result);
		}, function(error){
			console.log('error', error);
		})
	};

	$scope.validateAuth = function() {
		console.log('validate auth');
		firebaseService.authStateListener();
	};

	$scope.logout = function() {
		console.log('log out');
		firebaseService.signOut();
	};
}]);