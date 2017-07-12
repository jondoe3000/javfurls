//Add your script here. Feel free to use the available api properties and methods

var myDownloadlistSelection = dlSelection;
var myDownloadLink = myDownloadlistSelection.getContextLink();
var myDownloadLinks = myDownloadlistSelection.getDownloadLinks();

var _url = {};
var _f = {};
var _alert = function(s) {
    if (typeof s == "object") {
        s = JSON.stringify(s)
    }
    alert("\n\n" + s + "\n\n")
}

_f.contains = function(str, content) {
    return (str.indexOf(content) >= 0);
}

_url.origin = myDownloadLink.getUrl();
_url.final = myDownloadLink.getContentURL();
_url.host = myDownloadLink.getHost();
_url.name = myDownloadLink.getName();


_f.html_between = function(_html, _from, _to) {


    // alert(_html);
    var _htmls_1 = _html.split(_from);
    var _html1 = _htmls_1[1];
    var _htmls_2 = _html1.split(_to);

    return _htmls_2[0];

}
_f.clearName=function(_name){
    _name = _name.replace("JavFinder_", "");
    _name = _name.replace(".mp4", "");
    _name = _name.replace(".mp4", "");
    _name = _name.replace("HD_", "");
    _name = _name.replace("720p_", "");
    return _name;
}

var baseH="https://javfurls.herokuapp.com/";

if (_f.contains(_url.origin, "javfinder.com/go/save") || _f.contains(_url.final, "JavFinder_") || _f.contains(_url.name, "JavFinder_")) {

    require(baseH+"lib/CryptoJS/CryptoJS.3.2.1.js");
    require(baseH+"js/no-ng/functions.js");
    var _name = _f.clearName(_url.name);
    // _name = _name.replace("JavFinder_", "");
    // _name = _name.replace(".mp4", "");
    // _name = _name.replace(".mp4", "");
    // _name = _name.replace("HD_", "");
    // _name = _name.replace("720p_", "");

    var api_url = baseH+"api/process.php";

    //var myString = postPage(myString/*URL*/, myString/*PostData*/);/*Loads a website (METHOD: POST) and returns the source code*/
    //var post = array();
    //post["names"] = [_name];
    var res = getPage(api_url + "?name=" + _name);
    //_alert(res);
    // require(baseH+"lib/CryptoJS/CryptoJS.3.2.1.js");
    // require(baseH+"js/no-ng/functions.js");

    //_alert(res);
    var data = JSON.parse(res),
        success = data.success;
    //console.log(data);
    //console.log(success[0].files);
    //_alert(JSON.stringify(success));

    var files = JSON.parse(fnDesencriptarFact(success[0].files));

    //require("https://javfurls.herokuapp.com/lib/Base64/base64.js");
    //var btoa = b2a;
    _alert(fnFormatUrl(files, success[0]));



} else {

    alert(_url.name + '\n' + "It's not JF" + "\n" + "Host: " + _url.host + "\n" + "Origin: " + _url.origin); //Add your script here. Feel free to use the available api properties and methods

}