var LogoutPageSE = function () {
    var errorAlert;

    var initialize = function () {
        window.location.href = "Login/Session/logoutSE.php";	
		//window.location.hash="no-back-button";
    }
    return {
        Init: initialize
    };	
	
	
};