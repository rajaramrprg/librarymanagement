<?php
session_start();
unset($_SESSION["u_role"]);
unset($_SESSION["userType"]);
header("Location:../../SessionExpired");
?>