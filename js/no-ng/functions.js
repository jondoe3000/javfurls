//DESENCRIPTAR

function fnDesencriptarFact(res) {
    var passwords = [
        "avcms.co",
        "fuckfucksomuch"
    ];



    var getArray = function(res, pass) {
        // var array = JSON.parse(CryptoJS.AES.decrypt(res, pass, {
        //     format: CryptoJSAesJson
        // }).toString(CryptoJS.enc.Utf8));
        // array = JSON.parse(array);
        res=JSON.parse(res);
        //console.log("testing",res.data);

         var array = JSON.parse(CryptoJSAESdecrypt(res.data, playerToken()));
         //console.log("array",array);
        return array;
    }


    //console.log(passwords);
    var array = [];

    array = getArray(res, passwords[0]);
    /* try{
	                console.log("p 0");
	                array=getArray(res, passwords[0])
	            }catch (e1){
	                console.log("p 1");
	                array=getArray(res,passwords[1])
	            }
				*/
    //console.log("out");

    //console.log(array);

    return JSON.stringify(array);
}





//FORMATEAR



var fnFormatUrl = function(files, data) {
   // console.log(data);
    var slug = data.slug,
        name = data.name;
    // var files=JSON.parse(desencriptarFact.getUrl(success.files));
    // var slug=success.slug;
    var qualities = getQualities(files);
    //console.log("qualities",qualities);
    var quality = selectQuality(qualities);
    //console.log(quality);
    //var link = files[quality.index].file + '&title=JavFinder_' + files[quality.index].type + '_' + slug;
    var link = files[quality.index].file + '&title=JavFinder_'+ files[quality.index].label+"_"+name;
    //console.log("before Btoa: ",link);
    
    /*
    link = btoa(link);
    link=link.replace('+/=', '-_,');
    */
    //return "https://javfinder.com/movie/save/?token=" + link + "&title=" + name;
    
    return link;
}



var getQualities = function(files) {
    var qualities = [];
    for (var i = 0; i < files.length; i++) {
        qualities.push(files[i].label);
    }
    return qualities;
}

var selectQuality = function(qualities) {

    var quality = {
        index: 0,
        q: qualities[0]
    }

    function returnIfFound(q) {
        q = q + "p";
        var i = qualities.indexOf(q);
        if (i > -1) {
           // console.log("Get here: " + q);
            quality = {
                index: i,
                q: qualities[i]
            };
        }
    }

    returnIfFound("360");
    returnIfFound("480");
    returnIfFound("1080");
    returnIfFound("720");

    return quality;

}



//ARRAYs
//

function pushUnique(arr,item){
    if (arr.indexOf(item) == -1) {
        arr.push(item);
    }
}

function inArray(arr,item){
    return !(arr.indexOf(item)==-1);
}

function nameToUrl(name){
    return "https://javfinder.com/movie/watch/"+name+".html";
}

//IMG
//

function imgOnError(_this){
    var onError= "https://cdn-fd.com/v1/img/s-avatar.png";
    console.log(_this);
    _this.src=onError;
    return onError;
}