app.service("databaseService", ['$q', 'AuthService', function($q, AuthService){
	var self = this;
	var accountRef = firebase.database().ref('accounts/');

	this.addAccount = function(accountName, accountEmail, accountPassword) {
		var deffered = $q.defer();

		AuthService.createAccount(accountEmail, accountPassword).then(function(result){
			var account = {
				account_name: accountName,
				email: accountEmail.
				date_added: (new Date()).toString()
			};

			var onComplete = function(error) {
				if(error) {
					deffered.reject(error.message);
				} else {
					deffered.resolve('Success');
				}
			};

			accountRef.push(account, onComplete);
		}, function(error){
			deffered.reject(error);
		});

		return deffered.promise;
	}
}]);