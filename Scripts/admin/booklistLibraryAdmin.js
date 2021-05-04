var booklistLibraryAdmin = function () {
    var errorAlert;

    var initialize = function () {

		LoaddPage();
    }
    return {
        Init: initialize
    };


    function LoaddPage(){
        Common.LoadHTMLPage("Html/admin/booklistLibraryAdmin.php",
        function (htmlView) {
            $(".LoadPageContent").html(htmlView);
            LoadDataforTable();
        },
        function (error) {
            errorAlert.setContent(error).setTitle("<b>Error!</b>").open();
        },
        true
    );
    }

	function LoadDataforTable(){

		Services.GetBooklistforAdmin(null,function (bindata) {
			data_list = bindata.data;
			Setdatatotable(data_list);
		},
		function (error) {
			LogoutPageSE().Init();
		},
		true
		);



	}


	function Setdatatotable(){
        var cnt=0;
		var bookslistadmin = $('#bookslistadmin').DataTable({
			"data": data_list,
            "columns": [
				{ "title": "Sno.", data: "book_name", "class": "center"  },
				{ "title": "Logo", data: "book_logo", "class": "center" },
				{ "title": "Name", data: "book_name", "class": "center" },
				{ "title": "Author", data: "book_author", "class": "center" },
				{ "title": "Description", data: "book_desc", "class": "center" },
				{ "title": "In Stock", data: "instock", "class": "center" },
				{ "title": "Borrowed", data: "borrwed", "class": "center" },
				{ "title": "Action", data: "borrwed", "class": "center" },
				{ "title": "id", data: "book_id", "class": "center hidden" },
			],
			columnDefs: [
				{ orderable: false, "targets": -1 },
				{ "targets": [], "searchable": false },
				{
					"render": function(data, type, row){
                        cnt++;
						return cnt;
					},
					"targets": 0
				},
				{
					"render": function(data, type, row){
						return '<img src="files/'+ row.book_logo +'" style="width: 100%;">';
					},
					"targets": 1
				},
				{
					"render": function(data, type, row){
                        var str = row.book_desc;
                        if(str.length > 55 ){
                            var res = str.substring(0, 55);
                            return res+"...";
                        }else{
                            return row.book_desc;
                        }
					},
					"targets": 4
				},
				{
					"render": function(data, type, row){
						return '<a id="edit_class" alt="'+row.book_id+'"  class="a_blue_datatable_hyperlink" href="#"> <img src="assets/images/edit.png"> </a>';
					},
					"targets": 7
				},
			],
			order: [[0, "asc"]],
			autoWidth: false,
			destroy:true,
			aLengthMenu: [
				[5, 50, 100, 200, -1],
				[5, 50, 100, 200, "All"]
			],
				iDisplayLength: -1
        });
        LoadButtonOperation();  // Button operations function
	}


	function LoadButtonOperation(){

		$("#bookslistadmin").on("click", "#edit_class", function() {
			var book_id = $(this).attr('alt');
			editBooks(book_id).Init();
		});
	}



};