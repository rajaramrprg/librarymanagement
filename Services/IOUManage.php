<?php
include('DatabaseConnection.php');
//require "/usr/share/php/Firebase/JWT/autoload.php";
require "../vendor/autoload.php";
use \Firebase\JWT\JWT;
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
date_default_timezone_set("Asia/Calcutta");
	Class IOUServices extends Init {

	public function GetBooklistforAdmin(){
			$connect = new Init();
			$conn = $connect->construct();
			$list = array();
			$sql="select tb.id book_id , book_name , book_logo, book_author, book_desc,
			(select sum(stock_qty) from tbl_stock_purchase where stock_type = 'in' and tb.id = book_id) -
			COALESCE((select sum(stock_qty) from tbl_stock_purchase where stock_type = 'out' and tb.id = book_id),0) instock,
			 COALESCE((select sum(stock_qty) from tbl_stock_purchase where stock_type = 'out' and tb.id = book_id),0) -
			 COALESCE((select sum(stock_qty) from tbl_stock_purchase where stock_type = 'in' and user_type='user' and tb.id = book_id),0) borrwed
			 from tbl_books tb";
			$result = $conn->query($sql);
			if ($result) {
				while($row = $result->fetch_assoc()) {
					array_push($list,$row);
				}
			} else {
				$list = 0;
			}
			http_response_code(200);
			if ($result) {
				echo json_encode(array("data" => $list ));
			} else {
				echo json_encode(array("data" => $list));
			}

	}

	public function getbooklistforStock(){
			$connect = new Init();
			$conn = $connect->construct();
			$list = array();
			$sql="select id book_id, book_name from tbl_books";
			$result = $conn->query($sql);
			if ($result) {
				while($row = $result->fetch_assoc()) {
					array_push($list,$row);
				}
			} else {
				$list = 0;
			}
			http_response_code(200);
			if ($result) {
				echo json_encode(array("data" => $list ));
			} else {
				echo json_encode(array("data" => $list));
			}

	}

	public function updateBookStock($id, $qty){
			$connect = new Init();
			$conn = $connect->construct();
			$list = array();
			$user_id = $_SESSION['Userid'];
			$login_type = $_SESSION['login_type'];
			$sql="insert into tbl_stock_purchase (user_id, user_type, book_id, stock_qty, stock_type)
			values('$user_id', '$login_type', '$id', '$qty', 'in') ";
			$result = $conn->query($sql);
			http_response_code(200);
			if ($result) {
				echo json_encode(array("data" => "Success" ));
			} else {
				echo json_encode(array("data" => "Failed"));
			}



	}

	public function addnewbooksAdmin($post){
			$connect = new Init();
			$conn = $connect->construct();
			$list = array();
			$user_id = $_SESSION['Userid'];
			$book_name = $conn -> real_escape_string($_POST['book_name']);
			$book_author = $conn -> real_escape_string($_POST['book_author']);
			$login_type = $_SESSION['login_type'];
			$book_desc = $conn -> real_escape_string($_POST['book_desc']);
			if($_POST['where_from'] == 'add_books'){
			$book_quantity = $_POST['book_quantity'];
			$target_document_scan_cpy = basename($_FILES["book_logo"]["name"]);
			$file_name_document_scan_cpy = pathinfo($target_document_scan_cpy, PATHINFO_FILENAME);
			$ext_document_scan_cpy = pathinfo($target_document_scan_cpy, PATHINFO_EXTENSION);
			$ext_new_document_scan_cpy = ".".$ext_document_scan_cpy;
			$newfileid_document_scan_cpy = trim(date('Ymdhis')."".round(microtime(true)));
			$newfileid_document_scan_cpy = str_replace(' ', '', $newfileid_document_scan_cpy);
			$newfileid_document_scan_cpy = "L".$newfileid_document_scan_cpy.$ext_new_document_scan_cpy;
			$newfilename_document_scan_cpy = $file_name_document_scan_cpy;
			move_uploaded_file($_FILES["book_logo"]["tmp_name"], "../files/" . $newfileid_document_scan_cpy);



			$sql="insert into tbl_books (book_name, book_logo, book_author, book_desc, uploaded_by)
			values('$book_name', '$newfileid_document_scan_cpy', '$book_author', '$book_desc', '$user_id')";

			if ($result = $conn->query($sql) === TRUE) {
			$last_id = $conn->insert_id;
			$sql_qty="insert into tbl_stock_purchase (user_id, user_type, book_id, stock_qty, stock_type)
			values('$user_id', '$login_type', '$last_id', '$book_quantity', 'in') ";
			 $conn->query($sql_qty);
			}



		}

		if($_POST['where_from'] == 'edit_books'){
			$findfilechange = $_POST['findfilechange'];
			$imagename = $_POST['imagename'];
			$book_id = $_POST['book_id'];
			if($findfilechange){
				$target_document_scan_cpy = basename($_FILES["book_logo"]["name"]);
				$file_name_document_scan_cpy = pathinfo($target_document_scan_cpy, PATHINFO_FILENAME);
				$ext_document_scan_cpy = pathinfo($target_document_scan_cpy, PATHINFO_EXTENSION);
				$ext_new_document_scan_cpy = ".".$ext_document_scan_cpy;
				$newfileid_document_scan_cpy = trim(date('Ymdhis')."".round(microtime(true)));
				$newfileid_document_scan_cpy = str_replace(' ', '', $newfileid_document_scan_cpy);
				$newfileid_document_scan_cpy = "L".$newfileid_document_scan_cpy.$ext_new_document_scan_cpy;
				$newfilename_document_scan_cpy = $file_name_document_scan_cpy;
				move_uploaded_file($_FILES["book_logo"]["tmp_name"], "../files/" . $newfileid_document_scan_cpy);
				unlink("../".$imagename);

				$sql ="update tbl_books set book_name='$book_name' , book_logo = '$newfileid_document_scan_cpy',
				book_author='$book_author', book_desc='$book_desc' where id = '$book_id' ";
				$result = $conn->query($sql);
			}else{
				$sql ="update tbl_books set book_name='$book_name' ,
				book_author='$book_author', book_desc='$book_desc' where id = '$book_id' ";
				$result = $conn->query($sql);
			}






		}
			http_response_code(200);
			if ($result) {
				echo json_encode(array("data" => "Success" ));
			} else {
				echo json_encode(array("data" => "Failed"));
			}



	}

	public function getbookdetailsByid($id){
			$connect = new Init();
			$conn = $connect->construct();
			$list = array();
			$sql="select id book_id, book_name, book_logo, book_desc,book_author,
			COALESCE((select sum(stock_qty) from tbl_stock_purchase where stock_type = 'in' and tb.id = book_id),0) -
			COALESCE((select sum(stock_qty) from tbl_stock_purchase where stock_type = 'out' and tb.id = book_id),0) instock from tbl_books tb where id = '$id'";
			$result = $conn->query($sql);
			if ($result) {
				while($row = $result->fetch_assoc()) {
					array_push($list,$row);
				}
			} else {
				$list = 0;
			}
			http_response_code(200);
			if ($result) {
				echo json_encode(array("data" => $list ));
			} else {
				echo json_encode(array("data" => $list));
			}

	}



	public function getallbookswithoutSubcription(){
		$connect = new Init();
		$conn = $connect->construct();
		$list = array();
		$user_id = $_SESSION['Userid'];
		$sql="select tb.id book_id ,book_name , book_logo, book_author, book_desc
		from tbl_books tb where  COALESCE((select sum(stock_qty) from tbl_stock_purchase
		where stock_type = 'out' and tb.id = book_id and user_id='$user_id'),0) -  COALESCE((select sum(stock_qty) from tbl_stock_purchase
		where stock_type = 'in' and user_type='user' and tb.id = book_id and user_id='$user_id'),0) = 0";
		$result = $conn->query($sql);
		if ($result) {
			while($row = $result->fetch_assoc()) {
				array_push($list,$row);
			}
		} else {
			$list = 0;
		}
		http_response_code(200);
		if ($result) {
			echo json_encode(array("data" => $list ));
		} else {
			echo json_encode(array("data" => $list));
		}
	}

	public function getallbookswithSubcription(){
		$connect = new Init();
		$conn = $connect->construct();
		$list = array();
		$user_id = $_SESSION['Userid'];
		$sql="select tb.id book_id ,book_name , book_logo, book_author, book_desc
		from tbl_books tb where  COALESCE((select sum(stock_qty) from tbl_stock_purchase
		where stock_type = 'out' and tb.id = book_id and user_id='$user_id'),0) -  COALESCE((select sum(stock_qty) from tbl_stock_purchase
		where stock_type = 'in' and user_type='user' and tb.id = book_id and user_id='$user_id'),0) <> 0";
		$result = $conn->query($sql);
		if ($result) {
			while($row = $result->fetch_assoc()) {
				array_push($list,$row);
			}
		} else {
			$list = 0;
		}
		http_response_code(200);
		if ($result) {
			echo json_encode(array("data" => $list ));
		} else {
			echo json_encode(array("data" => $list));
		}
	}

	public function addbooktosubscription($id , $wfrom){
			$connect = new Init();
			$conn = $connect->construct();
			$list = array();
			$user_id = $_SESSION['Userid'];
			$login_type = $_SESSION['login_type'];
			if($wfrom=="in"){
			$sql="insert into tbl_stock_purchase (user_id, user_type, book_id, stock_qty, stock_type)
			values('$user_id', '$login_type', '$id', '1', 'in') ";
			}else{
			$sql="insert into tbl_stock_purchase (user_id, user_type, book_id, stock_qty, stock_type)
			values('$user_id', '$login_type', '$id', '1', 'out') ";
			}
			$result = $conn->query($sql);
			http_response_code(200);
			if ($result) {
				echo json_encode(array("data" => "Success" ));
			} else {
				echo json_encode(array("data" => "Failed"));
			}



	}


}
?>