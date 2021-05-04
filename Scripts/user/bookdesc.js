var bookdesc = function (book_id) {
    var errorAlert;

    var initialize = function () {

		LoaddPage();
    }
    return {
        Init: initialize
    };


    function LoaddPage(){
        Common.LoadHTMLPage("Html/user/bookdesc.php",
        function (htmlView) {
            $(".LoadPageContent").html(htmlView);
            loadcommonFunctions();
            getbook_details(book_id);
        },
        function (error) {
            errorAlert.setContent(error).setTitle("<b>Error!</b>").open();
        },
        true
    );
    }

    function loadcommonFunctions(){
        $("#back_to_allbck").on('click',function(){
            allbooklist().Init();
        });

        $("#addtosubscription").on('click', function(){
            Services.addbooktosubscription(book_id, 'out',function (bindata) {
                data_list = bindata.data;
                if(data_list=="Success"){
                    alert("Book Added to My Books");
                    myallbooklist().Init();
                }else{
                    alert("Sorry, Cant able to Process Your Request");
                }
            },
            function (error) {
                //LogoutPageSE().Init();
            },
            true
            );
        });
    }

    function getbook_details(book_id){

		Services.getbookdetailsByid(book_id,function (bindata) {
			data_list = bindata.data;
			Settoallfields(data_list);
		},
		function (error) {
			//LogoutPageSE().Init();
		},
		true
		);
    }

    function Settoallfields(data_list){
        $("#book_name").html(data_list[0].book_name);
        $("#book_author").html("Author :"+ data_list[0].book_author);
        $("#available_stock").html("Available stock : "+data_list[0].instock);
        $("#book_desc").html( data_list[0].book_desc);
        $("#book_logo").attr('src', "files/"+data_list[0].book_logo);
        if(data_list[0].instock == 0 ){
            $("#addtosubscription").prop("disabled",true);
            $("#addtosubscription").html("Out Of Stock")
        }



    }
}