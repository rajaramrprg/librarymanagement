var updateBookStock = function () {
    var errorAlert;

    var initialize = function () {

		LoaddPage();
    }
    return {
        Init: initialize
    };


    function LoaddPage(){
        Common.LoadHTMLPage("Html/admin/updateBookStock.php",
        function (htmlView) {
            $(".LoadPageContent").html(htmlView);
            getbooklist();
            loadcommonFunctions();
        },
        function (error) {
            errorAlert.setContent(error).setTitle("<b>Error!</b>").open();
        },
        true
    );
    }

	function getbooklist(){

		Services.getbooklistforStock(null,function (bindata) {
			data_list = bindata.data;
			formathtml(data_list);
		},
		function (error) {
			LogoutPageSE().Init();
		},
		true
		);


	}

    function formathtml(data_list){
        HTML='<option value="">---Select Book---</option>';
        $.each(data_list, function(index, row){
            HTML += '<option value="'+ row.book_id +'">'+ row.book_name +'</option>';
        });

        $('#book_list').html(HTML);
    }

    function loadcommonFunctions(){
        $("#book_list").on('change', function(){
            $("#error").hide();
        });
        $("#book_quantity").on('keyup', function(){
            $("#error").hide();
        });
        $("#update_stock_qty").on('click',function(){
            var book_id = $("#book_list").val();
            var book_qty = $("#book_quantity").val();
            if($.trim(book_id) =="" ||  $.trim(book_qty) =="" || isNaN(book_qty)){
                $("#error").show();
               // alert("Invalid Update");
                return false;
            }else{
                Services.updateBookStock(book_id,book_qty,function (bindata) {
                    data_list = bindata.data;

                    if(data_list=="Success"){
                        alert("Updated Successfully");
                        updateBookStock().Init();
                    }
                },
                function (error) {
                   // LogoutPageSE().Init();
                },
                true
                );
            }
        });
    }

}