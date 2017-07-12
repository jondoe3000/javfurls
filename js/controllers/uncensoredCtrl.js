angular.module('app.ctrl')
    .controller('uncensoredCtrl', ["videosFact",function (videosFact) {
    	var vm=this;
    	vm.type="";
    	vm.number=10;
    	 var base="https://javfinder.com/";
         vm.videos=videosFact.getUncensoredCache();
    	 vm.cargar=function(){
    	 	var url="category/uncensored"+vm.type;
    	 	console.log(url);
    	 	videosFact.getVideos(url,vm.number)
    	 	.then(function(res){
    	 		vm.videos=res.data;
                videosFact.setUncensoredCache(vm.videos);
    	 	})
    	 }

    }])