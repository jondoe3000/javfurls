<?php 


function urls_to_names($urls){
	//$urls = array_unique($urls);
	$names=array();
	$n=sizeof($urls);
	for ($i=0; $i < $n; $i++) { 
		$name=parse_url($urls[$i], PHP_URL_PATH);
		$name=str_replace("/movie/watch/", "", $name);
		$name=str_replace(".html", "", $name);
		array_push($names, $name);
	}

	return $names;
}

function name_to_url($name){
	global $base;
	return $base."movie/watch/".$name.".html";
}

function get_stream_slug($slug){
	global $base_slug;
	$url_stream = $base_slug.$slug;

	$str_stream=file_get_contents($url_stream);
	return $str_stream;
}

function get_stream($name){
	global $base;
	$html_download="";
	$stream=array(
		"type"=>"error",
		"msj"=>null,
		"str"=>null
		);

	try {
			$download = $base."movie/download/".$name.".html";
			$str_download = file_get_contents($download);
			$html_download = str_get_html($str_download);
			$generateButton = $html_download->find("a[id='generate-dl']");
			if($generateButton==null){
				throw new Exception("Generate Button not found", 1);
			}

			$generateButton=$generateButton[0];
			$slug=$generateButton->getAttribute("data-slug");
			if($slug==null){
				throw new Exception("data-slug not found", 1);
			}
			// $url_stream = $base."stream/v0/".$slug;

			// $str_stream=file_get_contents($url_stream);
			$str_stream=get_stream_slug($slug);
			$stream=array(
					"type"=>"success",
					"slug"=>$slug,
					"name"=>$name,
					"msj"=>null,
					"str"=>$str_stream,
					//"html"=>(string) $str_download
			);

			//$json_stream=json_decode($str_stream);
		
	} catch (Exception $e) {
			//$str_stream=$name;
			$stream=array(
					"type"=>"error",
					"msj"=>$e->getMessage(),
					"str"=>$name,
					//"html"=>$str_download
			);
			//die(var_dump($e->getMessage()));
	}

//die(json_encode($stream));
//die($stream["msj"]);
	return $stream;
}

 ?>