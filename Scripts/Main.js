$(document).ready(function () {
	var myVar;

	var user_type = $.trim($("#user_type").val());


			$("#LogoutFromSession").click(function () {

				LogoutPage().Init();
			});

			$("#dashboard_menu_lib").click(function () {
				var alt_v = $(this).attr('alt');
				changeMenuhighlights(alt_v , this);
				DashboardPage().Init();
			});

			$("#book_list_lib").click(function () {
				var alt_v = $(this).attr('alt');
				changeMenuhighlights(alt_v , this);
				booklistLibraryAdmin().Init();
			});


			$("#update_book_stock").click(function () {
				var alt_v = $(this).attr('alt');
				changeMenuhighlights(alt_v , this);
				updateBookStock().Init();
			});

			$("#add_books_lib").click(function () {
				var alt_v = $(this).attr('alt');
				changeMenuhighlights(alt_v , this);
				addBooks().Init();
			});

			$("#allbooks_menu_user").click(function () {
				var alt_v = $(this).attr('alt');
				changeMenuhighlights(alt_v , this);
				allbooklist().Init();
			});

			$("#mybooks_menu_user").click(function () {
				var alt_v = $(this).attr('alt');
				changeMenuhighlights(alt_v , this);
				myallbooklist().Init();
			});



			if(user_type=="admin"){
				$("#add_books_lib").trigger( "click");
			}else{
				$("#allbooks_menu_user").trigger( "click");
			}
	});

	function changeMenuhighlights(alt_v, this_var){
		$container = this_var;
		alt_m = alt_v;
		var cont_exist = 0;
		if(alt_v=="mainli"){
			$(".subli").each(function( index ) {
			$(this).parent().removeClass('active');
			$(this).removeClass('toggled');
			$(this).parent().parent().parent().removeClass('active open');
			$(this).parent().parent().parent().find('a.menu-toggle').removeClass('toggled');
		});
		}
		if($($container).parent().parent().parent().find('a.menu-toggle').hasClass('toggled')){
			cont_exist = 1;
		}
		cnt_id_val = $($container).attr('id');
		$(".subli").each(function( index ) {
			$(this).parent().removeClass('active');
			$(this).removeClass('toggled');
			$(this).parent().parent().parent().removeClass('active open');
			$(this).parent().parent().parent().find('a.menu-toggle').removeClass('toggled');
			if(cont_exist){}else{$(this).parent().parent().slideUp();}
		});
		$(".mainli").each(function( index ){
			$(this).parent().removeClass('active open');
			$(this).removeClass('toggled');
		});
		if(alt_v=="subli"){
			$($container).parent().addClass('active');
			$($container).addClass('toggled');
			$($container).parent().parent().parent().addClass('active open');
			$($container).parent().parent().parent().find('a.menu-toggle').addClass('toggled');
			if(cont_exist){}else{$($container).parent().parent().slideDown();}
		}else if(alt_v=="mainli"){
			$($container).parent().addClass('active open');
			$($container).addClass('toggled');
		}
	}