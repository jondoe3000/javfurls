<?php
if( !($name=$_GET["name"])){

	die("No name");
}

$base="https://www.javfinder.com/";
require("../php/simple_html_dom.php");
require("functions.php");

$url=name_to_url($name);


$str = file_get_contents($url);
$html = str_get_html($str);
$div = $html->find('div[class="wrap-meta"] .row div',1);
if($div==null){
	die("Name is not valid!");
}
$info = $div->find('div[class="meta-item"]');
$n= sizeof($info);

$data=array();

foreach ($info as $key => $val) {
	$data[]=array(
			"label"=>$val->find('div[class="meta-label"]')[0]->innertext,
			"content"=>trim(strip_tags($val->find('div[class="meta-content"]')[0]->innertext))
		);
	// echo 
	// echo 
}

echo json_encode($data);
// foreach ($info as $key => $val) {
	// echo $val;
	// echo str_get_html($val)->find('div[class="meta-label"]');
	// echo "<br>";
	// echo "<br>";
	// echo $val->find('div[class="meta-content"]');
	// echo "<br>";
	// echo $value."<br>";
	
// }

// echo $info;

?>