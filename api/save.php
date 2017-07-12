<?php 

//$url="https://cdn-fd.com/img/star/yui-hatano_20161227_1482777753.png";
//
$url=$_GET["url"];
//echo $url."<br>";
$name= basename($url);

// mkdir('/save');
// 
$rand=rand(100, 999);
//$name=$rand."-".$name;
$name=$rand."-videotest.mp4";

file_put_contents("save/".$name, file_get_contents($url));
echo "<a href='save/$name'>$name</a>";
echo "<br>";
echo "Ok";

 ?>