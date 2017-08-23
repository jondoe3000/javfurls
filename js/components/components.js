angular.module('app.com', [])
    .component('compCom', {
        bindings: {
            val: '='
        },
        controller: function () {
            var vm = this;
            var count = 0;
            vm.material = function () {
                if (count == 0) {
                    $.material.init()
                    count++;
                    console.log('materialized');
                }
            }
        },
        template: '<div></div>'
    })
    .component('cartNavPills', {
        bindings: {
            // val: '='
        },
        controller: function () {
            var vm = this;
         
        },
        templateUrl: 'js/components/components.tpl/cart.nav-pills.tpl.html'
    })
    .component('loading', {
        bindings: {
            // val: '='
        },
        controller: function () {
            var vm = this;
         
        },
        templateUrl: 'js/components/components.tpl/loading.tpl.html'
    })
    .component('videoComp', {
        bindings: {
            // val: '='
            video:'=',
            number:'='
        },
        controller: ["videosFact",function (videosFact) {
            var vm = this;
            vm.thumbs=[];


            var imgLoadings=[
            'http://i.imgur.com/XUWm0Dh.jpg',
            "http://i.imgur.com/9Byc4ha.gif"
           // "https://lh3.googleusercontent.com/proxy/kdL928p-qmWqv68BxMyNxjYFg_tqZA0G1zAzdoICjA7aE422BD-y0lOyFl7D1dEN_qLGdyJUmZb926skS9P79Sl5cjy3=w400-h300-p"
            ];

            vm.imgLoading=imgLoadings[1];
            vm.getInfo=function(){
              vm.loading=true;
              var name=vm.video.url.replace("/movie/","");
              name=name.replace(".html","");
              console.log(name);
              videosFact.getVideoInfo(name)
                .then(function(res){
                  console.log(res.data);
                   vm.video.info=res.data;
                   vm.loading=false;
                  
                },function(err){
                  console.log(err);
                  vm.loading=false;
                })
            }

            vm.select=function(){
              videosFact.select(vm.video);
              vm.selected=true;
            }
            vm.unSelect=function(){
              videosFact.unSelect(vm.video);
              vm.selected=false;
            }
            vm.$onInit=function(){
              var cnt=vm.video.cnt;
              var path=vm.video.path;
              for(var i=cnt-11;i<=cnt;i++){
                // https://cdn-fd.com/img/thumbnail/15792/30.jpg
                vm.thumbs.push("https://cdn-fd.com/img/thumbnail/"+path+"/"+i+".jpg");
              }

              vm.selected=videosFact.isSelected(vm.video);
              vm.video.completeUrl=base_jf+vm.video.url;
            }
          
        }],
        templateUrl: 'js/components/components.tpl/video.tpl.html'
    })
    .component('navPills', {
        bindings: {
            // val: '='
        },
        controller:["$state", function ($state) {
            var vm = this;
            vm.$onInit=function(){
               // console.log($state.current.name);
               vm.state=$state.current.name;
               console.log("state",vm.state);
            }
            
        
        }],
        templateUrl: 'js/components/components.tpl/nav-pills.tpl.html'
    })
    
    .component('jfStar', {
        bindings: {
            star: '=',
           // selectedStars:'='
        },
        controller:["starsFact", function (starsFact) {
            var vm = this;

            vm.urlToPath=starsFact.urlToPath;
            vm.pathToUrl=starsFact.pathToUrl;


            vm.selectRandomImage=function(imgs){
              max=imgs.length-1;
              min=0;
              var r=Math.floor(Math.random()*(max-min+1)+min);
              return imgs[r];
            }


            // vm.isSelected=function(){
            //     //console.log("selectedStars",vm.selectedStars);
            //     var sw=false;
            //     vm.selectedStars.forEach(function(item){
            //         //console.log(item);
            //         if(item.name==vm.star.name){
            //             sw=true;
            //         }
            //     })

            //     return sw;
            // }

            vm.selectStar=function(){
                // vm.selected=vm.isSelected();
                // if(!vm.selected){
                //     vm.selectedStars.push(vm.star);
                //     vm.selected=true;
                // }
               
               starsFact.select(vm.star);
               vm.selected=true;
            }

            vm.unSelectStar=function(){
               // var selectedStars=[];
               // vm.selectedStars.forEach(function(item){
               //      if(item.name!=vm.star.name){
               //        selectedStars.push(vm.star);                        
               //      }
               // })

               // vm.selectedStars=selectedStars;
               // vm.selected=false;
               
               starsFact.unSelect(vm.star);
               vm.selected=false;
               
            }
           // setTimeout(vm.isSelected(vm.star),2000);
            

            vm.$onInit=function(){
                //vm.selected=vm.isSelected(vm.star);
                //
                vm.selected=starsFact.isSelected(vm.star);
                vm.img=vm.selectRandomImage(vm.star.imgs);

            };
            //console.log(star);
        }],
        templateUrl: 'js/components/components.tpl/star.tpl.html'
    })