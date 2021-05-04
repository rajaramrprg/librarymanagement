<?php
session_start();
$_SESSION['Userid'] = $_POST['Userid'];
$_SESSION['userName'] = $_POST['userName'];
$_SESSION['login_type'] = $_POST['login_type'];
/* echo $_SESSION['userName'];
echo $_SESSION['userType'];
echo $_SESSION['userRoles']; */

?>
