angular.module('app.ctrl')
    .controller('busquedaCtrl', ['$http',"starsFact",function ($http,starsFact) {
        var vm = this;
        var base="https://javfinder.com/";

        vm.word="Satomi Suzuki";
        vm.number=5;
        var types={
        	
        		category:function(word){
        			return "category/"+word+".html"
        		},
        		star: function(word){
        			var word=word.replace(" ","-").toLowerCase();
        			return "star/"+word+"/movie.html"
        		}
        };

        vm.type="star";
        //vm.selectedStars=[];

        vm.buscar=function(){
        	vm.loading=true;

        	starsFact.getFavStars(vm.number)
        	.then(function(res){
        		var data=res.data;
        		console.log(data.length);
        		vm.stars=data;
        		vm.loading=false;
        	},function(){
        		vm.loading=false;
        	})
        }

        vm.showCarrito=function(){
        	vm.selectedStars=starsFact.getSelected();
        	vm.carrito=!vm.carrito;

        }


    }]);