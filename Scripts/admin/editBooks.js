var editBooks = function (book_id) {
    var errorAlert;

    var initialize = function () {

		LoaddPage();
    }
    return {
        Init: initialize
    };


    function LoaddPage(){
        Common.LoadHTMLPage("Html/admin/editBooks.php",
        function (htmlView) {
            $(".LoadPageContent").html(htmlView);
            getbook_details(book_id);
            loadcommonFunctions();
        },
        function (error) {
            errorAlert.setContent(error).setTitle("<b>Error!</b>").open();
        },
        true
    );
    }

    function getbook_details(book_id){

		Services.getbookdetailsByid(book_id,function (bindata) {
			data_list = bindata.data;
			Settoallfields(data_list);
		},
		function (error) {
			LogoutPageSE().Init();
		},
		true
		);
    }

    function Settoallfields(data_list){
        $("#book_name").val(data_list[0].book_name);
        $("#book_author").val(data_list[0].book_author);
        $("#book_logo_preview").attr('src',"files/"+data_list[0].book_logo);
        $("#book_desc").val(data_list[0].book_desc);
        $("#imagename").val("files/"+data_list[0].book_logo);
        $("#book_id").val(book_id);
    }

    function loadcommonFunctions(){

        $(".man_field").on('keyup', function(){
            $("#error").hide();
        });

        $("#book_logo").on('change', function(){
            $("#findfilechange").val('1');
        });

        $("#book_form").on('submit',function(e){

            e.preventDefault();
            var book_name = $("#book_name").val();
            var book_author = $("#book_author").val();
            var book_desc = $("#book_desc").val();
            var book_logo = $("#book_logo").val();
            var formData = new FormData(this);
            if($.trim(book_name) =="" ||  $.trim(book_author) =="" || $.trim(book_desc) == ""){
                $("#error").show();
                return false;
            }else{
              var formData = new FormData(this);
                $.ajax({
                    url: "Services/addnewbooksAdmin/",
                    type: "POST",
                    dataType: 'json',
                    data: formData,
                    contentType: false,
                    cache: false,
                    processData: false,
                    success: function (bindata) {

                        alert("Book Added Successfully");
                        booklistLibraryAdmin().Init();

                    },
                    error: function (bindata) {

                    }
                });
            }
        });
    }

    //function savetodb(){

    //}
}