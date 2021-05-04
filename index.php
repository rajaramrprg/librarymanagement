<?php
session_start();
if(!isset($_SESSION['login_type']) )
{
	header("Location: TOLOGIN");
}
?>
<!doctype html>
<html class="no-js " lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
<meta name="description" content="Responsive Bootstrap 4 and web Application ui kit.">

<title>PG</title>
<!-- Favicon-->
<!--<link rel="icon" href="favicon.ico" type="image/x-icon">-->
<link rel="stylesheet" href="assets/plugins/bootstrap/css/bootstrap.min.css">
<!-- Bootstrap Material Datetime Picker Css -->
<link href="assets/plugins/bootstrap-material-datetimepicker/css/bootstrap-material-datetimepicker.css" rel="stylesheet" />
<!-- Wait Me Css -->
<link href="assets/plugins/waitme/waitMe.css" rel="stylesheet" />
<!-- Bootstrap Select Css -->
<link href="assets/plugins/bootstrap-select/css/bootstrap-select.css" rel="stylesheet" />-->
<link rel="stylesheet" href="assets/plugins/jquery-datatable/dataTables.bootstrap4.min.css">


<link rel="stylesheet" href="assets/plugins/jvectormap/jquery-jvectormap-2.0.3.css"/>
<link rel="stylesheet" href="assets/plugins/morrisjs/morris.css" />
<!-- Custom Css -->
<link rel="stylesheet" href="assets/css/main.css">
<link rel="stylesheet" href="assets/css/color_skins.css">
<style>
	bg {
	  background-image: url('assets/images/bg.jpg');
	}
</style>


</head>
<body class="theme-orange" style="background-image: url('assets/images/bg1.jpg');">
<!-- Page Loader -->
<div class="page-loader-wrapper">
    <div class="loader">
        <div class="line"></div>
		<div class="line"></div>
		<div class="line"></div>
        <p>Please wait...</p>
        <div class="m-t-30"><img src="assets/images/logo_dummy.png" alt="Alackrity" style="width: 100px;height: 27px;"></div>
    </div>
</div>
<!-- Overlay For Sidebars -->
<div class="overlay"></div><!-- Search  -->
<div class="search-bar">
    <div class="search-icon"> <i class="material-icons">search</i> </div>
    <input type="text" placeholder="Explore Nexa...">
    <div class="close-search"> <i class="material-icons">close</i> </div>
</div>

<!-- Top Bar -->
<nav class="navbar">
    <div class="col-12">
        <div class="navbar-header">
            <a href="javascript:void(0);" class="bars"></a>
            <a class="navbar-brand" href=""><img src="assets/images/logo_dummy.png" alt="Nexa" style="width: 100px;height: 27px;"></a>
        </div>

        <ul class="nav navbar-nav navbar-right">


            <li><a  id="LogoutFromSession"  class="mega-menu xs-hide activity_logout" data-close="true"><i class="zmdi zmdi-power"></i></a></li>

        </ul>
    </div>
</nav>

<!-- Left Sidebar -->
<aside id="leftsidebar" class="sidebar">
    <!-- User Info -->
    <div class="user-info">
        <div class="image">
            <img src="assets/images/xs/avatar1.jpg" width="48" height="48" alt="User" />
        </div>
        <div class="info-container">
            <div class="name" data-toggle="dropdown"> <?php echo $_SESSION['userName']; ?> </div>

        </div>
    </div>
    <!-- #User Info -->
    <!-- Menu -->
    <div class="menu">
        <ul class="list">
			<li class="header"></li>
            <?php if($_SESSION['login_type']=="admin"){ ?>
			<!--<li class=""><a href="#" id="dashboard_menu_lib" class="mainli"  alt="mainli"><i class="zmdi zmdi-home"></i><span>Dashboard</span> </a></li>-->
			<li>
				<a href="#" class="menu-toggle"><i class="zmdi zmdi-grid"></i><span>Books</span></a>
                <ul class="ml-menu">
                    <li><a class="subli"  alt="subli" id="add_books_lib">Add Books</a></li>
                    <li><a class="subli"  alt="subli" id="book_list_lib">Book List</a></li>
                    <!--<li class=""><a class="subli"  alt="subli" id="pending_list_menu">Pending List</a></li>-->
                    <li><a class="subli"  alt="subli" id="update_book_stock">Update Stock</a></li>
                </ul>
            </li>
            <?php } ?>
            <?php if($_SESSION['login_type']=="user"){ ?>
			<!--<li class=""><a href="#" id="dashboard_menu_user" class="mainli"  alt="mainli"><i class="zmdi zmdi-home"></i><span>Dashboard</span> </a></li>-->
			<li>

			<li class=""><a href="#" id="allbooks_menu_user" class="mainli"  alt="mainli"><i class="zmdi zmdi-home"></i><span>Books</span> </a></li>
			<li>

			<li class=""><a href="#" id="mybooks_menu_user" class="mainli"  alt="mainli"><i class="zmdi zmdi-home"></i><span>My Books</span> </a></li>
			<li>

            </li>
            <?php } ?>
        </ul>
    </div>
    <!-- #Menu -->
</aside>
<input type="hidden" name="user_type" id="user_type" value="<?php echo $_SESSION['login_type']; ?>">
<!-- Right Sidebar -->
<aside id="rightsidebar" class="right-sidebar">
    <ul class="nav nav-tabs">
        <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#skins">Skins</a></li>
        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#chat">Chat</a></li>
        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#settings">Setting</a></li>
    </ul>
    <div class="tab-content">
        <div role="tabpanel" class="tab-pane in active in active slideRight" id="skins">
            <div class="slim_scroll">
                <h6>Flat Color</h6>
                <ul class="choose-skin">
                    <li data-theme="purple"><div class="purple"></div><span>Purple</span></li>
                    <li data-theme="blue"><div class="blue"></div><span>Blue</span></li>
                    <li data-theme="cyan"><div class="cyan"></div><span>Cyan</span></li>
                </ul>
                <h6>Multi Color</h6>
                <ul class="choose-skin">
                    <li data-theme="black"><div class="black"></div><span>Black</span></li>
                    <li data-theme="deep-purple"><div class="deep-purple"></div><span>Deep Purple</span></li>
                    <li data-theme="red"><div class="red"></div><span>Red</span></li>
                </ul>
                <h6>Gradient Color</h6>
                <ul class="choose-skin">
                    <li data-theme="green"><div class="green"></div><span>Green</span> </li>
                    <li data-theme="orange" class="active"><div class="orange"></div><span>Orange</span></li>
                    <li data-theme="blush"><div class="blush"></div><span>Blush</span></li>
                </ul>
            </div>
        </div>
        <div role="tabpanel" class="tab-pane pullUp" id="chat">
            <div class="right_chat slim_scroll">
                <div class="search">
                    <div class="input-group">
                        <div class="form-line">
                            <input type="text" class="form-control" placeholder="Search..." required autofocus>
                        </div>
                    </div>
                </div>
                <h6>Recent</h6>
                <ul class="list-unstyled">
                    <li class="online">
                        <a href="javascript:void(0);">
                            <div class="media">
                                <img class="media-object " src="assets/images/xs/avatar4.jpg" alt="">
                                <div class="media-body">
                                    <span class="name">Sophia</span>
                                    <span class="message">There are many variations of passages of Lorem Ipsum available</span>
                                    <span class="badge badge-outline status"></span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="online">
                        <a href="javascript:void(0);">
                            <div class="media">
                                <img class="media-object " src="assets/images/xs/avatar5.jpg" alt="">
                                <div class="media-body">
                                    <span class="name">Grayson</span>
                                    <span class="message">All the Lorem Ipsum generators on the</span>
                                    <span class="badge badge-outline status"></span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="offline">
                        <a href="javascript:void(0);">
                            <div class="media">
                                <img class="media-object " src="assets/images/xs/avatar2.jpg" alt="">
                                <div class="media-body">
                                    <span class="name">Isabella</span>
                                    <span class="message">Contrary to popular belief, Lorem Ipsum</span>
                                    <span class="badge badge-outline status"></span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="me">
                        <a href="javascript:void(0);">
                            <div class="media">
                                <img class="media-object " src="assets/images/xs/avatar1.jpg" alt="">
                                <div class="media-body">
                                    <span class="name">John</span>
                                    <span class="message">It is a long established fact that a reader</span>
                                    <span class="badge badge-outline status"></span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="online">
                        <a href="javascript:void(0);">
                            <div class="media">
                                <img class="media-object " src="assets/images/xs/avatar3.jpg" alt="">
                                <div class="media-body">
                                    <span class="name">Alexander</span>
                                    <span class="message">Richard McClintock, a Latin professor</span>
                                    <span class="badge badge-outline status"></span>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
                <h6>Contacts</h6>
                <ul class="list-unstyled">
                    <li class="offline inlineblock">
                        <a href="javascript:void(0);">
                            <div class="media">
                                <img class="media-object " src="assets/images/xs/avatar10.jpg" alt="">
                                <div class="media-body">
                                    <span class="badge badge-outline status"></span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="offline inlineblock">
                        <a href="javascript:void(0);">
                            <div class="media">
                                <img class="media-object " src="assets/images/xs/avatar6.jpg" alt="">
                                <div class="media-body">
                                    <span class="badge badge-outline status"></span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="offline inlineblock">
                        <a href="javascript:void(0);">
                            <div class="media">
                                <img class="media-object " src="assets/images/xs/avatar7.jpg" alt="">
                                <div class="media-body">
                                    <span class="badge badge-outline status"></span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="offline inlineblock">
                        <a href="javascript:void(0);">
                            <div class="media">
                                <img class="media-object " src="assets/images/xs/avatar8.jpg" alt="">
                                <div class="media-body">
                                    <span class="badge badge-outline status"></span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="offline inlineblock">
                        <a href="javascript:void(0);">
                            <div class="media">
                                <img class="media-object " src="assets/images/xs/avatar9.jpg" alt="">
                                <div class="media-body">
                                    <span class="badge badge-outline status"></span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="online inlineblock">
                        <a href="javascript:void(0);">
                            <div class="media">
                                <img class="media-object " src="assets/images/xs/avatar5.jpg" alt="">
                                <div class="media-body">
                                    <span class="badge badge-outline status"></span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="offline inlineblock">
                        <a href="javascript:void(0);">
                            <div class="media">
                                <img class="media-object " src="assets/images/xs/avatar4.jpg" alt="">
                                <div class="media-body">
                                    <span class="badge badge-outline status"></span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="offline inlineblock">
                        <a href="javascript:void(0);">
                            <div class="media">
                                <img class="media-object " src="assets/images/xs/avatar3.jpg" alt="">
                                <div class="media-body">
                                    <span class="badge badge-outline status"></span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="online inlineblock">
                        <a href="javascript:void(0);">
                            <div class="media">
                                <img class="media-object " src="assets/images/xs/avatar2.jpg" alt="">
                                <div class="media-body">
                                    <span class="badge badge-outline status"></span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="offline inlineblock">
                        <a href="javascript:void(0);">
                            <div class="media">
                                <img class="media-object " src="assets/images/xs/avatar1.jpg" alt="">
                                <div class="media-body">
                                    <span class="badge badge-outline status"></span>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div role="tabpanel" class="tab-pane slideLeft" id="settings">
            <div class="settings slim_scroll">
                <p class="text-left">General Settings</p>
                <ul class="setting-list">
                    <li><span>Report Panel Usage</span>
                        <div class="switch">
                            <label><input type="checkbox" checked><span class="lever"></span></label>
                        </div>
                    </li>
                    <li><span>Email Redirect</span>
                        <div class="switch">
                            <label><input type="checkbox"><span class="lever"></span></label>
                        </div>
                    </li>
                </ul>
                <p class="text-left">System Settings</p>
                <ul class="setting-list">
                    <li><span>Notifications</span>
                        <div class="switch">
                            <label><input type="checkbox" checked><span class="lever"></span></label>
                        </div>
                    </li>
                    <li><span>Auto Updates</span>
                        <div class="switch">
                            <label><input type="checkbox" checked><span class="lever"></span></label>
                        </div>
                    </li>
                </ul>
                <p class="text-left">Account Settings</p>
                <ul class="setting-list">
                    <li><span>Offline</span>
                        <div class="switch">
                            <label><input type="checkbox"><span class="lever"></span></label>
                        </div>
                    </li>
                    <li><span>Location Permission</span>
                        <div class="switch">
                            <label><input type="checkbox" checked><span class="lever"></span></label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</aside>



<!-- Main Content -->
<section class="content home">


    <div class="LoadPageContent">

    </div>

</section>
<!-- Jquery Core Js -->


<script src="assets/bundles/libscripts.bundle.js"></script> <!-- Lib Scripts Plugin Js -->
<script src="assets/bundles/vendorscripts.bundle.js"></script> <!-- Lib Scripts Plugin Js -->

<script src="assets/plugins/autosize/autosize.js"></script> <!-- Autosize Plugin Js -->
<script src="assets/plugins/momentjs/moment.js"></script> <!-- Moment Plugin Js -->
<!-- Bootstrap Material Datetime Picker Plugin Js -->
<script src="assets/plugins/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js"></script>



<script src="assets/bundles/mainscripts.bundle.js"></script>
<!--<script src="assets/js/pages/index.js"></script> -->
<!--<script src="assets/js/jquery-ui.min.js"></script>-->

<script src="assets/js/pages/forms/basic-form-elements.js"></script>
			<!-- Required datatable js -->
			<script src="assets/libs/datatables.net/js/jquery.dataTables.min.js"></script>
			<script src="assets/libs/datatables.net-bs4/js/dataTables.bootstrap4.min.js"></script>
			<!-- Buttons examples -->
			<script src="assets/libs/datatables.net-buttons/js/dataTables.buttons.min.js"></script>
			<script src="assets/libs/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js"></script>
			<!--<script src="assets/libs/jszip/jszip.min.js"></script>-->
			<!--<script src="assets/libs/pdfmake/build/pdfmake.min.js"></script>-->
			<!--<script src="assets/libs/pdfmake/build/vfs_fonts.js"></script>-->
			<script src="assets/libs/datatables.net-buttons/js/buttons.html5.min.js"></script>
			<script src="assets/libs/datatables.net-buttons/js/buttons.print.min.js"></script>
			<script src="assets/libs/datatables.net-buttons/js/buttons.colVis.min.js"></script>
			<!-- Responsive examples -->
			<script src="assets/libs/datatables.net-responsive/js/dataTables.responsive.min.js"></script>
			<script src="assets/libs/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js"></script>
			<!--<script src="assets/js/paginga.jquery.js"></script> -->
			<!--<script src="assets/js/jquery.idle-timer.js"></script>-->

<script src="Scripts/Common.js"></script>
<script src="Scripts/Main.js"></script>
<script src="Scripts/Services.js"></script>
<script src="Scripts/Logout.js"></script>
<script src="Scripts/LogoutSE.js"></script>


<script src="Scripts/Dashboard/dashboard.js"></script>
<script src="Scripts/ComplaintLoadge/complaintloadge.js"></script>
<script src="Scripts/CaseHistroy/casehistory.js"></script>
<script src="Scripts/admin/booklistLibraryAdmin.js"></script>
<script src="Scripts/admin/updateBookStock.js"></script>
<script src="Scripts/admin/addBooks.js"></script>
<script src="Scripts/admin/editBooks.js"></script>
<script src="Scripts/user/allbooklist.js"></script>
<script src="Scripts/user/myallbooklist.js"></script>
<script src="Scripts/user/bookdesc.js"></script>
<script src="Scripts/user/bookdescreturn.js"></script>

</body>
</html>