angular.module('app.ctrl')
    .controller('firebaseCtrl', ["Auth","$firebaseObject",function (Auth,$firebaseObject) {
        var vm = this;

        var getObject=function(){
        	return 
        }
        vm.show=function(){
        	// var rand=randomIntFromInterval(100,999);

        	  var ref = firebase.database().ref();
	    	  var obj=$firebaseObject(ref.child("urls").child("success"));
	    	  vm.result=obj;

        }
         vm.add=function(){
	         var rand1=randomIntFromInterval(100,999);
	         var rand2=randomIntFromInterval(1000,9999);

        // 	  var ref = firebase.database().ref();
	    	  // var obj=$firebaseObject(ref.child("urls").child("success"));
	    	  vm.result["rand1_"+rand1]={
	    	  	name:"rand2_"+rand2
	    	  }
	    	  //vm.result=obj;
	    	 vm.result.$save().then(function(ref) {
			 	 //ref.key() === obj.$id; // true
			 	 console.log(obj);
			 }, function(error) {
			 	 console.log("Error:", error);
			 });
        }

       	function randomIntFromInterval(min,max){
    		return Math.floor(Math.random()*(max-min+1)+min);
		}

       // var auth = $firebaseAuth();

		// vm.signIn = function() {
		//   vm.firebaseUser = null;
		//   vm.error = null;

		//   Auth.$signInAnonymously().then(function(firebaseUser) {
		//     vm.firebaseUser = firebaseUser;
		//   }).catch(function(error) {
		//     vm.error = error;
		//   });
		// };



		// vm.createUser = function() {
	 //      vm.message = null;
	 //      vm.error = null;

	 //      // Create a new user
	 //      Auth.$createUserWithEmailAndPassword(vm.email, vm.password)
	 //        .then(function(firebaseUser) {
	 //          vm.message = "User created with uid: " + firebaseUser.uid;
	 //        }).catch(function(error) {
	 //          vm.error = error;
	 //        });
	 //    };

	 //    vm.deleteUser = function() {
	 //      vm.message = null;
	 //      vm.error = null;

	 //      // Delete the currently signed-in user
	 //      Auth.$deleteUser().then(function() {
	 //        vm.message = "User deleted";
	 //      }).catch(function(error) {
	 //        vm.error = error;
	 //      });
	 //    };

	    // var ref = firebase.database().ref();
	    // var obj=$firebaseObject(ref.child("Juan Perez"));
	    // vm.result=obj;

}])