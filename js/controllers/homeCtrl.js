angular.module('app.ctrl')
    .controller('homeCtrl', 
        [
            '$http', 
            'desencriptarFact',
            'formatearFact',
            'videosFact' ,
            "$firebaseObject",
            "$firebaseArray",
            'firebaseFact',
            "$filter",
                function (
                    $http, 
                    desencriptarFact,
                    formatearFact,
                    videosFact,
                    $firebaseObject,
                    $firebaseArray,
                    firebaseFact,
                    $filter
                    ) {
        var vm = this;
        //var paste = '["https://javfinder.com/movie/watch/heyzo-0258-yume-ka-endless-sex-with-a-magnificent-babe-yume-ka-1080.html","https://javfinder.com/movie/watch/caribbeancom-020717-368-kitayama-kanno-dynamite.html"]';
        //var paste=["https://javfinder.com/movie/watch/1pondo-031817-501-lesbian-fragrance-haruka-aizawa-aya-kisaki.html"];
        var paste=["https://javfinder.com/movie/watch/skyhigh-ent-sky-328-reiko-kobayakawa-dirty-minded-wife-advent-vol-56.html"];
        //paste = JSON.parse(paste);
        var urls=videosFact.getSelectedUrls();
        if(!urls.length){
            vm.paste = paste.join("\n");
        }else{
            vm.paste=urls.join("\n");
        }
        

        var _array_unique = function (array) {
            //var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
            var uniqueArray = [];
            $.each(array, function (i, el) {
                if ($.inArray(el, uniqueArray) === -1) uniqueArray.push(el);
            });

            return uniqueArray;
        }

        vm.cargar = function () {
            //Firebase Objects and Arrays
            //var ref=fbUrls.ref;
           // var ref=firebase.database().ref().child("urls");
          

 //          vm.urls=$firebaseObject(firebaseFact.ref.urls);
          


          //  var fbSuccess = $firebaseArray(ref.child("success"));


            console.log("Begin:",new Date().toLocaleString());
            console.log();
            vm.loading = true;
            
            console.log("Cargando...");

            try {

                var pastes = vm.paste.split("\n");
                console.log(pastes.length);

                $http.post("api/process.php", {urls:pastes})
                    .then(function (res) {
                        console.log("Process:",new Date().toLocaleString());
                        var data = res.data,
                            success=data.success,
                            broken=data.broken;
						          console.log(data);
                      var n=success.length;
                      var urls=[];
                      for (var i = 0; i < n; i++) {
                        var files=JSON.parse(fnDesencriptarFact(success[i].files));
                        //console.log(success[0].slug);
                        var urlFormat=fnFormatUrl(files,success[i]);

                        var date= $filter('date')(new Date(), "yyyy-MM-dd HH:mm:ss","+05");
                        console.log(date);
                        var _success={
                            name:success[i].name,
                            url:nameToUrl(success[i].name),
                           date:date
                        }
                        //ref.child("success").child("");
                        //var existe=($firebaseObject(ref.child("success").child(success[i].name)));
                        //var existe=($firebaseObject(ref.child("succesus").child(success[i].name)));
            
                      //console.log();
  /*                    console.log("vm.urls",vm.urls.success);
                        vm.urls.success[_success.name]=_success;
                        vm.urls.$save().then(function(ref) {
                        //ref.key() === obj.$id; // true
                        console.log(obj);
                        }, function(error) {
                            console.log("Error:", error);
                        });

                */
                        //$firebaseObject(ref.child("success"))            
                        // var obj=$firebaseObject(ref.child("success"));
                        //     console.log("obj_before",obj);
                        //     obj[success[i].name]=_success;
                        //     console.log("obj_after",obj);
                        //     obj.$save().then(function(ref) {
                        //       ref.key === obj.$id; // true
                        //     }, function(error) {
                        //       console.log("Error:", error);
                        //     });
                       
                        //fbSuccess.$add(success[i].name);
                        urls.push(urlFormat);
                      }

                        //console.log(success[0].files);
                        
                        //console.log(urlDecrypted);
                        
                        var resUrls=urls.join("\n");
                        var resHead="Total: "+n+"\n"+"Broken: "+broken.length+"\n";
                        var res=resHead+resUrls;
                        vm.urls=res;
                        console.log(urls);

                        $http.post("api/short.php",{urls:urls})
                          .then(function(res){
                            console.log("Short:",new Date().toLocaleString());
                            //console.log(res.data);
                            vm.urls=resHead+res.data.join("\n");
                          })

                        vm.loading = false;
                    }),
                    function (err) {
                        console.log(err);
                        $('#res').html(err);
                        //$('#res').html("");
                        vm.loading = false;
                    }

            } catch (e) {
                alert("No es válido");
            }

           // vm.loading=false;


        }
    }])