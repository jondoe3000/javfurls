<?php
/**
 * Created by PhpStorm.
 * User: Luis
 * Date: 12/02/2017
 * Time: 06:11 AM
 */



$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$broken = json_decode($request->broken);
$success=json_decode($request->success);
$broken_file="../json/broken.json";
$history_file="../json/history.json";


function _file_read($file){

    $json=[];
    @$myfile = fopen($file, "r") or die("Unable to open file!");
    @$read=fread($myfile,filesize($file));

    @fclose($myfile);
    if(trim($read)==""){
        return array();
    }
    $json=json_decode($read);
//    if(is_array($json)){
//        return array_unique($json);
//    }
    return $json;
}

function _file_write($file,$data){
    //$json=array_merge($json,$new_history);
    $myfile = fopen($file, "w") or die("Unable to open file!");
    fwrite($myfile, json_encode($data ));
    fclose($myfile);
}

//$tz=date_default_timezone_get();
$tz="America/New_York";

function _get_time(){
    global $tz;
    date_default_timezone_set($tz);
    //return date('m/d/Y h:i:s a', time());
    return time();
}

function _get_date($time){
    global $tz;
    date_default_timezone_set($tz);
    return date('m/d/Y h:i:s a', time());
}


function _get_ip(){
    $ip="";
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        $ip = $_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}

function _get_country($i){
    $details = json_decode(file_get_contents("http://ipinfo.io/".$i));
    return $details->country; // -> "US"
}

$_broken=_file_read($broken_file);
$_broken=array_merge($_broken,$broken);
$_broken=array_unique($_broken);
$_broken=array_diff($_broken,$success);
$_broken=array_reverse($_broken);

_file_write($broken_file,$_broken);

$_history=_file_read($history_file);
//$_history=array();
$time=_get_time();
$date=_get_date($time);
$i=_get_ip();

if($i=="179.7.86.242" or $i=="179.7.71.50"){
    $i="";
    $c="";
}else{
    $c=_get_country($i);
}

$_new_history=array(
        "time"=>$time,
        "date"=>$date,
        "tz"=>$tz,
        "success"=>$success,
        "broken"=>$broken,
        "i"=>$i,
        "c"=>$c
);

if(!is_array($_history)){
    $_history=array();
}

array_push($_history,$_new_history);
$_history=array_reverse($_history);
//$_history.p$_new_history;
//$_history=array_merge($_history,$_new_history);


_file_write($history_file,$_history);



?>