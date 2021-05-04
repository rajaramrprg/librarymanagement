<?php
session_start();
if(isset($_SESSION['userType']) )
{
	header("Location: HOME");
}
?>
<!doctype html>
<html class="no-js " lang="en">
<head>
<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <meta name="description" content="Responsive Bootstrap 4 and web Application ui kit.">

    <title>PG</title>
    <!-- Favicon-->
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <!-- Custom Css -->
    <link rel="stylesheet" href="assets/plugins/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/authentication.css">
    <link rel="stylesheet" href="assets/css/color_skins.css">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
</head>

<body class="theme-orange">
<div class="authentication">

</div>
<button class="hidden" id="openlogin"></button>
<!-- Jquery Core Js -->

<script src="assets/bundles/libscripts.bundle.js"></script>
<script src="assets/bundles/vendorscripts.bundle.js"></script>
<script src="assets/bundles/mainscripts.bundle.js"></script>
<script src="Login/Scripts/Common.js"></script>
<script src="Login/Scripts/LoginAuthentication.js"></script>
<script src="Login/Scripts/Services.js"></script>
<script src="Scripts/Authentication/login.js"></script>
<script src="Scripts/Authentication/signup.js"></script>
<script src="Scripts/Authentication/otpVerification.js"></script>
<script src="Scripts/Authentication/otpSuccess.js"></script>

<script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>


</body>
</html>