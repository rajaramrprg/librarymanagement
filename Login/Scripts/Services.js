var Services = {
    //User Login Authentication
	GetLoginDetails: function (Username,Password, successCallback, failureCallback, isAsync) {
		method = "Login/Services/loginAuthentication/" + Username + "/" + Password + "/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },





}