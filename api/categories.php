<?php
require("../php/simple_html_dom.php");
$categories=array();

function urlCategories($n){
	return "https://javfinder.com/category/page-".$n.".html";
}

function getCategories($url_categories){
	global $categories;
	$str_categories = file_get_contents($url_categories);
	$html_categories = str_get_html($str_categories);

	$a_categories=$html_categories->find(".wrap-main-item a");



	foreach ($html_categories->find(".wrap-main-item") as $item) {
		$category=array();
		
		$category["name"]=trim($item->find("a",1)->text());
		$category["imgs"]=array(trim($item->find("img",0)->getAttribute("data-src")));
		
		if($category["name"]!=""){
			
			$category["urls"]=array(trim($item->find("a",1)->href));
			array_push($categories, $category);
			 // if(sizeof($categories)>=$number){
			 // 	return null;	
			 // }
		}
	}
	return $categories;
}

for ($i=1; $i < 4; $i++) { 

	if(!getCategories(urlCategories($i))){
		$i=1000;
	}
	// echo $i;
}

// $categories=array_merge(getCategories($url_categories),getCategories($url_categories2));



echo json_encode($categories);

?>