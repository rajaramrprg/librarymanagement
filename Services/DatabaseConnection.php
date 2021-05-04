<?php
//require "/usr/share/php/Firebase/JWT/autoload.php";
require "../vendor/autoload.php";
use \Firebase\JWT\JWT;
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

session_start();
	class Init {
	   function construct() {
		    $servername = "127.0.0.1";
			$username = "root";
			$password = "aconsol123";
			$dbname = "db_library";

			// Create connection
			global $conn;
			$conn = new mysqli($servername, $username, $password, $dbname);
			return $conn;
	   }

	}

?>

