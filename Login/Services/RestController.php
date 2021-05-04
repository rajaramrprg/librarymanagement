<?php
include('RestHandler.php');
$view = "";

if(isset($_GET["view"]))
	$view = $_GET["view"];

switch($view){
	case "loginAuthentication":
		$Userdetail = new RestHandler();
		$Userdetail->loginAuthentication($_GET["Username"],$_GET["Password"]);
		break;
}
?>
