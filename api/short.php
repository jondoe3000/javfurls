<?php 


    $data=file_get_contents("php://input");
    $urls=json_decode($data)->urls;
    //$lurl = $_POST['long_url'];
    $results=array();
   for ($i=0; $i < sizeof($urls); $i++) { 
       $curl = curl_init(); 
      $post_data = array('format' => 'json',
                       'apikey' => '910CB580B98AB3BA790',
                       'provider' => 'tinyurl_com',
                       'url' => $urls[$i] );
      $api_url = 'http://tiny-url.info/api/v1/create';
      curl_setopt($curl, CURLOPT_URL, $api_url);
      curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
      curl_setopt($curl, CURLOPT_POST, 1);
      curl_setopt($curl, CURLOPT_POSTFIELDS, $post_data);
      $result = curl_exec($curl);

   
      curl_close($curl);
        array_push($results, json_decode($result)->shorturl);
  }
 // echo $urls[0];
//echo $result;
   
 
   echo json_encode($results);

 ?>