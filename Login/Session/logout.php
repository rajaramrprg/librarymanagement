<?php
session_start();
unset($_SESSION["Userid"]);
unset($_SESSION["userName"]);
unset($_SESSION["login_type"]);
session_destroy();
header("Location:../../TOLOGIN");
?>