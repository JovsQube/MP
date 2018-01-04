app.service("AuthService", ['$q', function($q){
	var self = this;

	this.createAccount = function(email, password){
		var deferred = $q.defer();
		var auth = firebase.auth();

		auth.createUserWithEmailAndPassword(email, password).then(function(result){
			var newAccount = {};
			newAccount.email = email;
			newAccount.password = password;

			var ref = firebase.database().ref('user/');
			ref.once('value', function(snapshot){
				var exist = false;

				snapshot.forEach(function(childSnapshot){
					var userObj = childSnapshot.val();
					if (email == userObj.email) {
						exist = true;
					}
				});

				if (exist == false) {
					ref.push(newAccount);
					deferred.resolve("Success");
				}
			});
		}, function(error){
			deferred.reject(error.message);
		});

		return deferred.promise;
	}
}]);