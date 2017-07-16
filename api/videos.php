<?php
if( !($path=$_GET["path"])){

	die("No path");
}
require("constants.php");
// $path=str_replace("https://javfinder.com/", "", $path);
// $path=str_replace("http://javfinder.com/", "", $path);
// $base="https://javfinder.com/";

$path=str_replace("$base_jf/", "", $path);
$path=str_replace("$base_jf/", "", $path);
$base="$base_jf/";

/*

Example PATH:

url: https://javfinder.com/category/uncensored.html
path: category/uncensored
result: https://javfinder.com/category/uncensored/page-1.html

 */
if( !($number=$_GET["number"])){

	die("No number");
}

function urlVideos($n){
	global $path,$base;
	$url=$base.$path."/page-".$n.".html";
	// echo $url."<br>";
	return $url;
}
require("../php/simple_html_dom.php");

$videos=array();
// $number=1;


function getVideos($url){
	global $videos,$number;
	// global $i;
	// $i++;
	$str_videos = file_get_contents($url);
	$html_videos = str_get_html($str_videos);

	$videosItems=$html_videos->find(".wrap-main-item");


	if($videosItems==null){
		return false;
	}

	foreach ($videosItems as $item) {
		# code...
		$video=array();
		
		$video["name"]=trim($item->find("a",1)->text());
		// if($video["name"]==null){
		// 	return false;
		// }
		$img=$item->find("img",0);
		$video["img"]=trim($img->getAttribute("data-src"));
		// if($video["img"]==null){
		// 	return false;
		// }
		$video["path"]=trim($img->getAttribute("data-path"));
		if($video["path"]==null){
			return false;
		}
		$video["id"]=trim($img->getAttribute("data-id"));
		$video["cnt"]=trim($img->getAttribute("data-cnt"));
		$video["time"]=trim($item->find('span[class="time-video"]',0)->innertext);
		// $video["time"]=$item->find('span[class="time-video"]',0);
		if($video["name"]!=""){
			
			$video["url"]=trim($item->find("a",1)->href);
			
			array_push($videos, $video);
			 if(sizeof($videos)>=$number){
			 	return false;	
			 }
		}
	}
	return true;
}

for ($i=1; $i < 10; $i++) { 
	// echo $i."<br>";
	if(!getVideos(urlVideos($i))){
		$i=1000;
	}

}


// $n=sizeof($videos);

// echo $n."<br/>";
// echo $videos[$n-1]["name"]."<br>";
// echo $videos[$n-1]["time"]."<br>";
// shuffle($stars);
echo json_encode($videos);

?>