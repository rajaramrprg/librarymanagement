var myallbooklist = function () {
    var errorAlert;

    var initialize = function () {

		LoaddPage();
    }
    return {
        Init: initialize
    };


    function LoaddPage(){
        Common.LoadHTMLPage("Html/user/myallbooklist.php",
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
		Services.getallbookswithSubcription(null,function (bindata) {
			data_list = bindata.data;
			Settocontent(data_list);
		},
		function (error) {
			//LogoutPageSE().Init();
		},
		true
		);


        $("#filter").keyup(function() {

            // Retrieve the input field text and reset the count to zero
            var filter = $(this).val(),
              count = 0;

            // Loop through the comment list
            $('.booklistall div').each(function() {


              // If the list item does not contain the text phrase fade it out
              if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).hide();  // MY CHANGE

                // Show the list item if the phrase matches and increase the count by 1
              } else {
                $(this).show(); // MY CHANGE
                count++;
              }

            });

          });


        $(document).one('click','.bookunSubscribe', function(){
            var book_id = $(this).attr('data-id');
            bookdescreturn(book_id).Init();
        });
    }

    function Settocontent(data_list){
        html='';
        $.each(data_list, function(index, row){
            var rw_img = "files/"+row.book_logo;
            html +='<div class="columns"><ul class="price" style="height: 408px;position: relative;min-height: 408px;max-height: 408px;"><li style="padding-left: 0;padding-right: 0;padding-bottom: 5px;"><img src="'+rw_img+'" style="width: 58%;"></li><li style="padding-top: 2px;"><p style="text-align: center;">'+ row.book_name +'</p><span style="color: #007185;"> '+  row.book_author +' </span></li><li class="grey" style="padding: 0;position: absolute;right: 2px;top: 8px;"><button type="button" data-id="'+row.book_id+'" class="button bookunSubscribe" style="padding: 3px;padding-left: 9px;padding-right: 9px;margin-top: 3px;margin-bottom: 3px;">View</button></li></ul></div>';
        });

        if(html==""){
            $(".booklistall").html("<h3 style='width: 100%;text-align: center;font-size: 22px;'>No Books Added</h3>");
        }else{
            $(".booklistall").html(html);
        }

    }
}