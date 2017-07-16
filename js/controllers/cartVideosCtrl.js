angular.module('app.ctrl')
    .controller('cartVideosCtrl', ["videosFact",function (videosFact) {
    	var vm=this;
    	 //var base="https://javfinder.com/";
        var base=base_jf+"/";

		vm.videos=videosFact.getSelected();
		vm.unSelectAll=function(){
			console.log("unselect 1 ... fixing 2");
			videosFact.unSelectAll();
			vm.videos=videosFact.getSelected();
		}
		console.log(vm.videos);
    }])