<?php
require("../php/simple_html_dom.php");
require("functions.php");
$htmls=[];

//Initialize
//$base="https://www.javfinder.se/";
$base="https://www.javfinder.com/";
//stream/v0/
$base_slug=$base."stream/sw0/";

$streams=array(
	"success"=>array(),
	"broken"=>array(),
	"info"=>array()
	);

//Get POST

if(file_get_contents("php://input")){
    $postdata=file_get_contents("php://input");
    $request = json_decode($postdata);
}elseif ($_GET["name"]){
    $names=array($_GET["name"]);
}else{
	die("Not Received");
}

//Prepare names
if($request->urls){
	$urls=array_unique($request->urls);
	$names = urls_to_names($urls);
	//$n=sizeof($names);
    //
   // die(json_encode($names));
}

$n=sizeof($names);


for($i=0;$i<$n;$i++) {
	//Get Stream by Name/URL
    $stream=get_stream($names[$i]);
    // die(json_encode($stream));

    //Case: SUCCESS
    if($stream["type"]=="success"){
    	array_push(
    		$streams["success"],
    			array(
    				"files"=>$stream["str"],
    				"slug"=>$stream["slug"],
    				"name"=>$stream["name"]
    			)
    	);
    	//array_push($htmls,$stream['html']);
    }

    //Case: ERROR
    else{
    	array_push(
    		$streams["broken"],
    		name_to_url($stream["str"])
    			."?error=".$stream["msj"]
    	);
    	//array_push($htmls,$stream['html']);
    }	
}
$streams["info"]=[
		"names"=>$names,
		//"htmls"=>$htmls
	];
echo json_encode($streams);
//echo json_encode($request->pastes);
?>