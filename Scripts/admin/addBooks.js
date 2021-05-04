var addBooks = function () {
    var errorAlert;

    var initialize = function () {

		LoaddPage();
    }
    return {
        Init: initialize
    };


    function LoaddPage(){
        Common.LoadHTMLPage("Html/admin/addBooks.php",
        function (htmlView) {
            $(".LoadPageContent").html(htmlView);
            loadcommonFunctions();
        },
        function (error) {
            errorAlert.setContent(error).setTitle("<b>Error!</b>").open();
        },
        true
    );
    }

    function loadcommonFunctions(){

        $(".man_field").on('keyup', function(){
            $("#error").hide();
        });

        $("#book_form").on('submit',function(e){
            e.preventDefault();
            var book_name = $("#book_name").val();
            var book_author = $("#book_author").val();
            var book_quantity = $("#book_quantity").val();
            var book_desc = $("#book_desc").val();
            var book_logo = $("#book_logo").val();
            var formData = new FormData(this);
            if($.trim(book_name) =="" ||  $.trim(book_author) =="" || isNaN(book_quantity) || $.trim(book_desc) == "" || $.trim(book_logo) == ""){
                $("#error").show();
                return false;
            }else{
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
                        addBooks().Init();
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