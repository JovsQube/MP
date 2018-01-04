app.controller("HomeController", ['$scope', 'databaseService', 'firebaseService', 
	function($scope, databaseService, firebaseService){

	var email,password;

	$scope.addAccount = function() {
		console.log('clicked');
		email = 'jovs.play01@gmail.com';
		password = 'test04';
		databaseService.addAccount('Test 4', email, password).then(function(result){
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

		firebaseService.checkUser().then(function(){
			console.log('has user');
		}, function(error){
			console.log(error);
		});
	};

	$scope.logout = function() {

		console.log('log out');
		firebaseService.signOut();
	};

	$scope.emailVerification = function() {

		firebaseService.checkUser().then(function(result){
			console.log('result', result);
			firebaseService.sendEmailVerification(result);
		}, function(error){
			console.log(error);
		});
	}
}]);