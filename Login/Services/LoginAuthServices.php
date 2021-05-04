<?php
session_start();
//require "/usr/share/php/Firebase/JWT/autoload.php";
require "../../vendor/autoload.php";
use \Firebase\JWT\JWT;
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
date_default_timezone_set("Asia/Calcutta");
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

	Class LoginAuthServices extends Init {
		public function loginAuthentication($Username,$Password){
			$connect = new Init();
			$conn = $connect->construct();
			$list = array();

			$getHeaders = apache_request_headers();
			if(!isset($getHeaders['auth_token'])){
				http_response_code(401);
				echo json_encode(array("message" => "Access Denied."));
			}else{
				$sql = "select id, name, login_type from tbl_login where uname='$Username' and password='$Password'";

				$result = $conn->query($sql);

				if (mysqli_num_rows($result)) {
					$row = $result->fetch_assoc();
					$id = $row['id'];
					$name = $row['name'];
					$login_type = $row['login_type'];
					http_response_code(200);
					echo json_encode(
						array(
							"message" => "Successful login.",
								"Userid" => $id,
								"userName" => $name,
								"login_type" => $login_type
								));

				}	else{

					http_response_code(401);
					echo json_encode(array("message" => "Login failed1.", "password" => "Null"));
				}

			}
		}
}
?>