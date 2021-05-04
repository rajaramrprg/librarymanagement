<?php
include("SimpleRest.php");
include("IOUManage.php");
class RestHandler extends SimpleRest {

	public function encodeJson($responseData) {
		$jsonResponse = json_encode($responseData, JSON_PRETTY_PRINT);
		return $jsonResponse;
	}

	public function encodeHtml($responseData) {
		$htmlResponse = "<table border='1'>";
		foreach($responseData as $key=>$value) {
    			$htmlResponse .= "<tr><td>". $key. "</td><td>". $value. "</td></tr>";
		}
		$htmlResponse .= "</table>";
		return $htmlResponse;
	}

	public function encodeXml($responseData) {
		// creating object of SimpleXMLElement
		$xml = new SimpleXMLElement('<?xml version="1.0"?><data></data>');
		foreach($responseData as $key=>$value) {
			$xml->addChild($key, $value);
		}
		return $xml->asXML();
	}

	public function getstatus($rawData) {
			if(empty($rawData)) {
			$statusCode = 404;
			$rawData = array('Empty' => 'No record found!');
		} else {
			$statusCode = 200;
		}

		$requestContentType = @$_SERVER['HTTP_ACCEPT'];
		//$this ->setHttpHeaders($requestContentType, $statusCode);

		if(strpos($requestContentType,'application/json') !== false){
			$response = $this->encodeJson($rawData);
			echo $response;
		} else if(strpos($requestContentType,'text/html') !== false){
			$response = $this->encodeJson($rawData);
			echo $response;
		} else if(strpos($requestContentType,'application/xml') !== false){
			$response = $this->encodeJson($rawData);
			echo $response;
		}
	}


	function GetBooklistforAdmin() {
		$GetBooklistforAdmin = new IOUServices();
		$rawData = $GetBooklistforAdmin->GetBooklistforAdmin();
		//$this->getstatus($rawData);
	}

	function getbooklistforStock() {
		$getbooklistforStock = new IOUServices();
		$rawData = $getbooklistforStock->getbooklistforStock();
		//$this->getstatus($rawData);
	}

	function updateBookStock($id, $qty) {
		$updateBookStock = new IOUServices();
		$rawData = $updateBookStock->updateBookStock($id, $qty);
		//$this->getstatus($rawData);
	}

	function addnewbooksAdmin($post) {
		$addnewbooksAdmin = new IOUServices();
		$rawData = $addnewbooksAdmin->addnewbooksAdmin($post);
		//$this->getstatus($rawData);
	}

	function getbookdetailsByid($id) {
		$getbookdetailsByid = new IOUServices();
		$rawData = $getbookdetailsByid->getbookdetailsByid($id);
		//$this->getstatus($rawData);
	}

	function getallbookswithoutSubcription() {
		$getallbookswithoutSubcription = new IOUServices();
		$rawData = $getallbookswithoutSubcription->getallbookswithoutSubcription();
		//$this->getstatus($rawData);
	}

	function getallbookswithSubcription() {
		$getallbookswithSubcription = new IOUServices();
		$rawData = $getallbookswithSubcription->getallbookswithSubcription();
		//$this->getstatus($rawData);
	}

	function addbooktosubscription($id , $wfrom) {
		$addbooktosubscription = new IOUServices();
		$rawData = $addbooktosubscription->addbooktosubscription($id , $wfrom);
		//$this->getstatus($rawData);
	}


}
?>
