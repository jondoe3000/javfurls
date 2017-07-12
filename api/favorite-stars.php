<?php 

$stars=array();

//Ai Fujii
$stars[]=array(
	"name"=>"Satomi Suzuki",
	"paths"=>array("suzuki-satomi","satomi-suzuki"),
	"imgs"=>array(
			"http://i.imgur.com/gRs0Yr9.jpg",
			// "http://i.imgur.com/IvHdxb5.jpg"
			"http://i.imgur.com/3XkismF.jpg",
			"http://i.imgur.com/Huz9dEB.jpg",
			"http://i.imgur.com/O5opWRW.jpg",
			"http://i.imgur.com/jjFCS1T.jpg",
			"http://i.imgur.com/QeaxEsf.jpg"
		)
	);


$stars[]=array(
	"name"=>"Akari Asakiri",
	"paths"=>array("akari-asakiri","akari-asagiri"),
	"imgs"=>array(
			"http://i.imgur.com/fWQnscA.jpg",
			// "http://i.imgur.com/IvHdxb5.jpg"
		)
	);

$stars[]=array(
	"name"=>"Azusa Nagazawa",
	"paths"=>array("azusa-nagasawa"),
	"imgs"=>array(
			"http://i.imgur.com/Up1e0ln.jpg",
			"http://i.imgur.com/uf2qogQ.jpg",
			"http://i.imgur.com/dol0CTM.jpg",
			"http://i.imgur.com/BNwbDkB.jpg",
			"http://i.imgur.com/4q79fam.jpg"
			// "http://i.imgur.com/IvHdxb5.jpg"
		)
	);

$stars[]=array(
	"name"=>"Mikuru Shiina",
	"paths"=>array("shiina-mikuru","mikuru-shiina"),
	"imgs"=>array(
			"http://i.imgur.com/Khd3P4T.png",
			"http://i.imgur.com/SdGW54X.jpg",
			"http://i.imgur.com/smu5cIz.jpg",
			"http://i.imgur.com/XikSlK5.jpg",
			"http://i.imgur.com/mqu6Q8e.jpg",
			"http://i.imgur.com/rk49e1j.jpg",
			"http://i.imgur.com/jLuczTr.jpg",
			"http://i.imgur.com/Gc2wUgS.png",
			"http://i.imgur.com/STBCVvr.jpg",
			"http://i.imgur.com/chPCADB.jpg",
			"http://i.imgur.com/MTF0vlA.jpg"
			// "http://i.imgur.com/IvHdxb5.jpg"
		)
	);

	$stars[]=array(
	"name"=>"Sophia Takigawa",
	"paths"=>array("sofia-takigawa","sophia-takigawa"),
	"imgs"=>array(
			"http://i.imgur.com/J8xHWbo.jpg",
			"http://i.imgur.com/v4DRov3.jpg",
			"http://i.imgur.com/tDJNDu4.jpg",
			"http://i.imgur.com/3vC9RQX.jpg",
			"http://i.imgur.com/OfaASBR.jpg",
			"http://i.imgur.com/abPzw7s.jpg",
			"http://i.imgur.com/i00d7Or.jpg"

		)
	);

	$stars[]=array(
	"name"=>"Haruka Aizawa",
	"paths"=>array("haruka-aizawa","aizawa-haruka","kotone-kuroki"),
	"imgs"=>array(
			"http://i.imgur.com/jxKr32M.jpg",
			"http://i.imgur.com/5CBg66M.jpg",
			"http://i.imgur.com/sMpgXUb.jpg",
			"http://i.imgur.com/LfOCV9K.jpg",
			"http://i.imgur.com/LYlkgY8.jpg",
			"http://i.imgur.com/OD1GL7S.jpg"

		)
	);

	$stars[]=array(
	"name"=>"Reiko Kobayakawa",
	"paths"=>array("kobayakawa-reiko","reiko-kobayakawa"),
	"imgs"=>array(
			"http://i.imgur.com/Ah4L04r.png",
			"http://i.imgur.com/D1wtx6I.jpg",
			"http://i.imgur.com/Mqa94tk.jpg",
			"http://i.imgur.com/VF2lSSt.jpg",
			"http://i.imgur.com/KAww4Pb.png",
			"http://i.imgur.com/YsCFEbc.jpg",
			"http://i.imgur.com/ghIv4de.jpg",
			"http://i.imgur.com/ArWtBIL.jpg"

		)
	);

shuffle($stars);
echo json_encode($stars);

 ?>