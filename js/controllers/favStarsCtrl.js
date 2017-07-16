angular.module('app.ctrl')
    .controller('favStarsCtrl', ["starsFact",function (starsFact) {
    	var vm=this;
    	//var base="https://javfinder.com/";
        var base=base_jf+"/";
        vm.stars=starsFact.getFavStarsFromMemory();
        vm.buscar=function(){
            vm.loading=true;

            starsFact.getFavStars()
            .then(function(res){
                var data=res.data;

                console.log(data.length);
                vm.stars=data;
                starsFact.setFavStars(data);
                vm.loading=false;
            },function(){
                vm.loading=false;
            })
        }

    }])