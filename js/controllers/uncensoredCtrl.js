angular.module('app.ctrl')
    .controller('uncensoredCtrl', ["videosFact",function (videosFact) {
    	var vm=this;
    	vm.type="";
    	vm.number=10;
    	 //var base="https://javfinder.com/";
        var base=base_jf+"/";
         vm.videos=videosFact.getUncensoredCache();
    	 vm.cargar=function(){
            vm.loading=true;
    	 	var url="category/uncensored"+vm.type;
    	 	console.log(url);
    	 	videosFact.getVideos(url,vm.number)
    	 	.then(function(res){

    	 		vm.videos=res.data;
                videosFact.setUncensoredCache(vm.videos);
                vm.loading=false;
    	 	})
    	 }

    }])