$( "input" ).focusin(function() {
	$(this).parent().addClass('focused')
});
$("input").focusout(function(){
$(this).parent().removeClass('focused')
});
$(".selectPick").selectpicker();