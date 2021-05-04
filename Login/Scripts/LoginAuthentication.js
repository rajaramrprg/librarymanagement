$(document).ready(function () {
	$(document).on('click',"#openlogin", function(){
		LoginPage().Init();
	});
	$("#openlogin").trigger( "click");

});