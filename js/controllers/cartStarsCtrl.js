angular.module('app.ctrl')
    .controller('cartStarsCtrl', ["starsFact",function (starsFact) {
    	var vm=this;
    	 var base="https://javfinder.com/";

		vm.stars=starsFact.getSelected();
		console.log(vm.stars);
    }])