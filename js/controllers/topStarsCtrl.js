angular.module('app.ctrl')
    .controller('topStarsCtrl', ["starsFact",function (starsFact) {
    	var vm=this;
    	//var base="https://javfinder.com/";
        var base=base_jf+"/";

        // vm.word="Satomi Suzuki";
        vm.number=5;
        //vm.selectedStars=[];
        vm.stars=starsFact.getTopStarsFromMemory();
        vm.reload=function(){
            vm.loading=true;
            vm.loading=false;
        }
        vm.buscar=function(){
        	vm.loading=true;

        	starsFact.getTopStars(vm.number)
        	.then(function(res){
        		var data=res.data;

        		console.log(data.length);
        		vm.stars=data;
                starsFact.setTopStars(data);
        		vm.loading=false;
        	},function(){
        		vm.loading=false;
        	})
        }

    }])