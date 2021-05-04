<?php
include('RestHandler.php');
$view = "";

if(isset($_GET["view"]))
	$view = $_GET["view"];

switch($view){


	case "GetBooklistforAdmin":
		$GetBooklistforAdmin = new RestHandler();
		$GetBooklistforAdmin->GetBooklistforAdmin();
		break;

	case "getbooklistforStock":
		$getbooklistforStock = new RestHandler();
		$getbooklistforStock->getbooklistforStock();
		break;

	case "updateBookStock":
		$updateBookStock = new RestHandler();
		$updateBookStock->updateBookStock($_GET['id'] , $_GET['qty']);
		break;

	case "addnewbooksAdmin":
		$addnewbooksAdmin = new RestHandler();
		$addnewbooksAdmin->addnewbooksAdmin($_POST);
		break;

	case "getbookdetailsByid":
		$getbookdetailsByid = new RestHandler();
		$getbookdetailsByid->getbookdetailsByid($_GET['id']);
		break;

	case "getallbookswithoutSubcription":
		$getallbookswithoutSubcription = new RestHandler();
		$getallbookswithoutSubcription->getallbookswithoutSubcription();
		break;

	case "getallbookswithSubcription":
		$getallbookswithSubcription = new RestHandler();
		$getallbookswithSubcription->getallbookswithSubcription();
		break;

	case "addbooktosubscription":
		$addbooktosubscription = new RestHandler();
		$addbooktosubscription->addbooktosubscription($_GET['id'],$_GET['wfrom']);
		break;



	case "" :
		//404 - not found;
		break;
}
?>
