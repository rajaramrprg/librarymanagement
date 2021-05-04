<?php 
include('DatabaseConnection.php');

	Class LoginAuthServices extends Init {	
		public function loginAuthentication($Username,$Password){
			$connect = new Init();
			$conn = $connect->construct();
			$list = array();

			# SHA-256 algorithm 
			$hasedpassword = hash('sha256',$Password);

			$sql = "SELECT * FROM tbl_users where user='$Username' and password='$hasedpassword'";			
			$result = $conn->query($sql);
			if ($result) {
				while($row = $result->fetch_assoc()) {
					array_push($list,$row);
				}
			} else {
				$list = 0;
			}
			return $list;
		}
		
		public function postMobileNo($post){
			$connect = new Init();
			$conn = $connect->construct();
			$list = array();
			$Mobile_No = $_POST['PhoneNumber'];
			$date = date('Y-m-d');
			$status= 'Pending';
			
			$sql="insert into retrievepassword(MobileNo, RecievedDate, ResponseStatus) values('$Mobile_No', '$date', '$status')";
				
			$result = $conn->query($sql);
				if($result){
					$list = 1;
				}
			else {
				$list = 0;
			}
			return $list;
		}
		
		
}  
?> 