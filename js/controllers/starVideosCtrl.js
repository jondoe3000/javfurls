angular.module('app.ctrl')
    .controller('starVideosCtrl', ["videosFact","$stateParams","starsFact",function (videosFact,$stateParams,starsFact) {
    	var vm=this;
        vm.type="";
        var name=$stateParams.starName;
        vm.paths=[];
        if(vm.star=starsFact.isSelected({name:name})){
          

            vm.number=10;
            console.log(vm.star);
            if(vm.star.urls){
                vm.star.paths=[];
                vm.star.urls.forEach(function(url){
                    var path=starsFact.urlToPath(url);
                    vm.star.paths.push(path);
                })
            }
            
            var base="https://javfinder.com/";
             // https://javfinder.com/star/satomi-suzuki/movie/hot.html
            

            vm.cargar=function(){
               var _paths=[];
                vm.loading=true;
                function loadByPath(path){

                       var url="star/"+path+"/movie"+vm.type;
                        console.log(url);
                        videosFact.getVideos(url,vm.number)
                        .then(function(res){
                             console.log("test1");
                            // var videos=res.data;
                            var _path={
                                path: path,
                                videos:res.data
                            }
                            _paths.push(_path);
                            vm.loading=false;

                        },function(err){
                            console.log(err);
                            vm.loading=false;
                        })
                }

                vm.star.paths.forEach(function(item) {
                   
                    loadByPath(item);
                    vm.paths=_paths;
                    
                })
                
             
             }
        }else{
            console.log("No Name");
        }

    	

    }])