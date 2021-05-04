var LoginPage = function () {
    var errorAlert;

    var initialize = function () {

		Loaddashboard();

    }
    return {
        Init: initialize
    };


    function Loaddashboard(){
        Common.LoadHTMLPage("Html/Authentication/login.php",
        function (htmlView) {
            $(".authentication").html(htmlView);
            LoadLoginFunction();
            LoginAuthentication();
            ClearLoginPageTextboxData();
            LoadCommonFunctions();

        },
        function (error) {
            errorAlert.setContent(error).setTitle("<b>Error!</b>").open();
        },
        true
    );
    }

    function LoadLoginFunction(){
        $('#PassWord').keypress(function(e) {
            if(e.keyCode == 13) {
                $(this).trigger("enterKey");
                var uval = $("#UserName").val();
                var pval = $("#PassWord").val();
                if(uval=="" && pval==""){
                    $("#UserName").focus();
                }else if(uval==""){
                    $("#UserName").focus();
                }else if(pval==""){
                    $("#PassWord").focus();
                }else{
                    $("#UserLogin").click();
                }
                return false;
            }
        });

        $('#UserName').keypress(function(e) {
            if(e.keyCode == 13) {
                $(this).trigger("enterKey");
                var uval = $("#UserName").val();
                var pval = $("#PassWord").val();
                if(uval=="" && pval==""){
                    $("#UserName").focus();
                }else if(uval==""){
                    $("#UserName").focus();
                }else if(pval==""){
                    $("#PassWord").focus();
                }else{
                    $("#UserLogin").click();
                }
                return false;
            }
        });

        $("#UserLogin").click(function(){
            LoginAuthentication();
        });
    }

    function LoginAuthentication() {
		var Username = $.trim($("#UserName").val());
		//var Password = $.trim($("#PassWord").val());
		//var Password = Common.DataCatch($.trim($("#PassWord").val()));
		var Password = $.trim($("#PassWord").val());
			Services.GetLoginDetails(Username,Password,	function (User){
				if(User.Empty){
					$("#AuthenticationError").text("Enter valid user name and password");
					ClearLoginPageTextboxData();
				}/* else if(Array.isArray(User) && User.length){
					$("#AuthenticationError").text("Enter valid user name and password");
					ClearLoginPageTextboxData();
				} */
				else {
					$("#AuthenticationError").text('');
					localStorage.setItem("jwt_tk", User.jwt);
					var Userid = User.Userid;
					var userName = User.userName;
					var login_type = User.login_type;
					var datastring = { "Userid": Userid, "userName": userName, "login_type":login_type };
						$.ajax({
							type: "POST",
							url: "Login/Session/session.php",
							data: datastring,
							dataType: "html",
							async: false,
							success: function(msg){	}
						});
							window.location.href='HOME';

					}
				},
				function (error) {
					$("#AuthenticationError").text("Enter valid user name and password");
					ClearLoginPageTextboxData();
				},
				true
			);
		}

	function ClearLoginPageTextboxData(){
		$("#UserName").val("");
		$("#PassWord").val("");
	}

    function LoadCommonFunctions(){
        $("#signup").click(function(){

            SignupPage().Init();

        });

    }

};