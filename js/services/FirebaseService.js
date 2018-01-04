app.service("firebaseService", ['$q', function($q){
	var self = this;

	this.authStateListener = function(){
		var deferred = $q.defer();

		firebase.auth().onAuthStateChanged(function(user){
			console.log('auth', user);
			if (user) {
				console.log('logged');
			} else {
				console.log('not logged');
			}
		});
	};

	this.signOut = function(){
		var deffered = $q.defer();

		firebase.auth().signOut().then(function(){
			console.log("logout successful");
		}, function(error){
			console.log("logout error", error);
		});
	}
}]);