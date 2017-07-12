<?php
if( !($number=$_GET["number"])){

	die("No number");
}
require("../php/simple_html_dom.php");

$stars=array();
// $i=0;

function urlstars($n){
	return "https://javfinder.com/star/hot/page-".$n.".html";
}

function getstars($url_stars){
	global $stars,$number;
	// global $i;
	// $i++;
	$str_stars = file_get_contents($url_stars);
	$html_stars = str_get_html($str_stars);

	$a_stars=$html_stars->find(".wrap-main-item a");


	if($a_stars==null){
		return null;
	}

	foreach ($html_stars->find(".wrap-main-item") as $item) {
		# code...
		$category=array();
		
		$category["name"]=trim($item->find("a",1)->text());
		$category["imgs"]=array(trim($item->find("img",0)->getAttribute("data-src")));
		
		if($category["name"]!=""){
			
			$category["urls"]=array(str_replace("profile", "movie", trim($item->find("a",1)->href)));
			array_push($stars, $category);
			 if(sizeof($stars)>=$number){
			 	return null;	
			 }
		}
	}
	return true;
}

// while(getstars(urlstars($i))!=null);

for ($i=1; $i < 10; $i++) { 
	if(!getstars(urlstars($i))){
		$i=1000;
	}
}

// $stars=array_merge(getstars($url_stars),getstars($url_stars2));



$n=sizeof($stars);

// echo $n."<br/>";
// echo $stars[$n-1]["name"]."<br>";
// shuffle($stars);
echo json_encode($stars);

?>