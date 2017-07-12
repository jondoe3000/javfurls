angular.module('app.fac', [])
    .factory('fnFac', function () {
        return {}
    })
    .factory('firebaseFact', function () {
        // var refs={
        //     urls:{
        //         ref:firebase.database().ref().child("urls"),
        //         success: firebase.database().ref().child("urls")
        //     }
        // }

        return {
            ref:{
                urls:firebase.database().ref().child("urls")
            }
        }
    })
    .factory("Auth", ["$firebaseAuth",
      function($firebaseAuth) {
        return $firebaseAuth();
      }
    ])

    .factory('videosFact',["$http", function ($http) {

        //UNCENSORED CACHE VIDEOS
        
        uncensoredVideos=[];
        setUncensoredCache=function(videos){
            uncensoredVideos=videos;
        }

         getUncensoredCache=function(){
            return uncensoredVideos;
        }

        //SELECTED VIDEOS
        var selectedVideos=[];
        var isSelected=function(video){
                var sw=false;
                selectedVideos.forEach(function(item){
                    if(item.name==video.name){
                        sw=item;
                    }
                })
            return sw;
        }

        var selectVideo=function(video){
            if(!isSelected(video)){
              selectedVideos.push(video);
            }
        }

       var unSelectVideo=function(video){
           var selected=[];
           selectedVideos.forEach(function(item){
                if(item.name!=video.name){
                  selected.push(item);                        
                }
           })

           selectedVideos=selected;
           // console.log(vm.selectedStars,vm.star.name);
        }

        var unSelectAll=function(){
            selectedVideos=[];
            // console.log(selectedVideos);

        }

        //Info Videos
        var getVideoInfo=function(name){
            return $http.get("api/video-info.php?name="+name);
        }
        var getSelectedUrls=function(){
            var urls=[];
            selectedVideos.forEach(function(item){
                var url="https://javfinder.com"+item.url;
                url=url.replace("movie/","movie/watch/");
                urls.push(url)
            });
            return urls;
        }

        //VIDEOS
        var videos=[];
        var getVideos=function(path,number){
            return $http.get("api/videos.php?number="+number+"&path="+path);
        }
        var setVideos=function(videos){
            videos=videos;
        }
        return {
            getVideos:getVideos,
            getVideosFromMemory:function(){
                return videos
            },
            setVideos:setVideos,
            getVideoInfo:getVideoInfo,

            select: selectVideo,
            isSelected: isSelected,
            unSelect: unSelectVideo,
            unSelectAll:unSelectAll,

            getSelected: function(){
                return selectedVideos;
            },
            getSelectedUrls:getSelectedUrls,

            //UNCENSORED
            getUncensoredCache:getUncensoredCache,
            setUncensoredCache:setUncensoredCache
        }
    }])
    .factory('starsFact',[ "$http",function ($http) {
        //TOP STARS
        var topStars=[];
        var getTopStars=function(number){
            return $http.get("api/top-stars.php?number="+number);
        }
        var setTopStars=function(stars){
            topStars=stars;
        }
        var getTopStarsFromMemory=function(){
            return topStars;
        }
        

        //FAV STARS
        var favStars=[];
        var getFavStars=function(){
            return $http.get("api/favorite-stars.php");
        }

        var setFavStars=function(stars){
            favStars=stars;
        }
         var getFavStarsFromMemory=function(){
            return favStars;
        }

        //CART
        var selectedStars=[];
        var isSelected=function(star){
                var sw=false;
                selectedStars.forEach(function(item){
                    if(item.name==star.name){
                        sw=item;
                    }
                })
            return sw;
        }

        var selectStar=function(star){
            if(!isSelected(star)){
              selectedStars.push(star);
            }
        }

       var unSelectStar=function(star){
           var selected=[];
           selectedStars.forEach(function(item){
                if(item.name!=star.name){
                  selected.push(item);                        
                }
           })

           selectedStars=selected;
           // console.log(vm.selectedStars,vm.star.name);
        }

        //OTHER
        var urlToPath=function(url){
            url=url.replace("/star/","");
            url=url.replace("/movie.html","");
            // console.log(url);
            return url;
        }

        var pathToUrl=function(path){
            
            return "/star/"+path+"/movie.html";
        }

        return {
    
            getFavStars:getFavStars,
            getFavStarsFromMemory:getFavStarsFromMemory,
            setFavStars:setFavStars,

            getTopStars:getTopStars,
            getTopStarsFromMemory:getTopStarsFromMemory,
            setTopStars:setTopStars,

            select: selectStar,
            isSelected: isSelected,
            unSelect: unSelectStar,

            getSelected: function(){
                return selectedStars;
            },

            urlToPath:urlToPath,
            pathToUrl:pathToUrl
        }
    }])

    .factory('formatearFact',function(){
                       

        return {
           format:function(files,data){
                return formatUrl(files,data)
           }
            // getUrl: function (res) {
            //     console.log("Formateando...");
            //     if (res != "") {
            //         return getUrl(res)
            //     } else {
            //         return "";
            //     }
            // }
        }

    })
    .factory('desencriptarFact', function () {
        var getUrl = function (res) {
			
			 var passwords=[
                "avcms.co",
                "fuckfucksomuch"
            ];
			
			console.log("testing-1");
			var getArray=function(res, pass){
                //console.log("testing");
				//var array = JSON.parse(CryptoJS.AES.decrypt(res, pass, {format: CryptoJSAesJson}).toString(CryptoJS.enc.Utf8));
                var array = JSON.parse(CryptoJSAESdecrypt(res.data, playerToken())), data = '';       
                //console.log(array);
				//array = JSON.parse(array);
				return array;
			}
			

            console.log(passwords);
			var array=[];
			
			array=getArray(res, passwords[0]);
           /* try{
                console.log("p 0");
                array=getArray(res, passwords[0])
            }catch (e1){
                console.log("p 1");
                array=getArray(res,passwords[1])
            }
			*/
            console.log("out");
			
			console.log(array);
        
            return JSON.stringify(array);
        }

		

        return {
            getUrl: function (res) {
                console.log("Desencriptando...");
                if (res != "") {
                    return getUrl(res)
                } else {
                    return "";
                }
            }
        }


    })
