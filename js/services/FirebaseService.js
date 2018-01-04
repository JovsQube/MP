app.service("firebaseService", ['$q', function($q){
	var self = this;

	this.checkUser = function(){
		var deferred = $q.defer(), hasUser = false;

		var user = firebase.auth().currentUser;
		if (user) {
			console.log('has user');
			console.log('display name', user.displayName);
			console.log('email', user.email);
			console.log('email verified', user.emailVerified);
			console.log('photo url', user.photoUrl);
			deferred.resolve(user);
		} else {
			deferred.reject('no user');
		}

		return deferred.promise;
	};

	this.signOut = function(){
		var deferred = $q.defer();

		firebase.auth().signOut().then(function(){
			console.log("logout successful");
		}, function(error){
			console.log("logout error", error);
		});
	}

	this.sendEmailVerification = function(user){
		var deferred = $q.defer();

		user.sendEmailVerification().then(function(){
			console.log('email verification sent');
		}, function(error){
			console.log('email verification error', error);
		})
	}
}]);