var LogoutPage = function () {
    var errorAlert;

    var initialize = function () {
        window.location.href = "Login/Session/logout.php";	
		//window.location.hash="no-back-button";
    }
    return {
        Init: initialize
    };	
	
	
};