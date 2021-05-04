
	<div class="block-header">
        <div class="row">
            <div class="col-lg-7 col-md-6 col-sm-12">
                <h2>Add Books
                <!--<small class="text-muted">Welcome to Nexa Application</small> -->
                </h2>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <!-- Input -->
        <div class="row clearfix">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="card">
					<div class="header">
                        <h2> Add New Books </h2>
                        <p style="text-align: center;display: none;color:red;margin-bottom: 0;" id="error">Invalid Update</p>
                    </div>


					<div class="body">
                        <form method="post" enctype="multipart/form-data" id="book_form">
						<div class="row clearfix">
							<div class="col-sm-6">
								<label for="password">Book Name *</label>
								<div class="form-group">
									<div class="form-line">
										<input type="text" id="book_name" name="book_name" class="form-control man_field" placeholder="Enter book name">
									</div>
								</div>
							</div>
							<div class="col-sm-6">
								<label for="password">Author*</label>
								<div class="form-group">
									<div class="form-line">
										<input type="text" id="book_author" name="book_author"  class="form-control man_field" placeholder="Enter Book author name">
									</div>
								</div>
							</div>
						</div>
						<div class="row clearfix">
							<div class="col-sm-6">
								<label for="password">Book Logo*</label>
								<div class="form-group">
									<div class="form-line">
										<input type="file" id="book_logo" name="book_logo"  class="form-control">
									</div>
								</div>
							</div>
							<div class="col-sm-6">
								<label for="password">Quantity*</label>
								<div class="form-group">
									<div class="form-line">
										<input type="text" id="book_quantity" name="book_quantity"  class="form-control man_field">
									</div>
								</div>
							</div>
<input type="hidden" id="where_from" value="add_books" name="where_from">
						</div>
						<div class="row clearfix">
							<div class="col-sm-12">
								<label for="password">Description*</label>
								<div class="form-group">
									<div class="form-line">
										<textarea  type="text" id="book_desc" name="book_desc"  class="form-control man_field" placeholder="Enter Book Description"></textarea>
									</div>
								</div>
							</div>
						</div>
                        <div class="">
                            <div class="">
                                <button type="submit" id="submit_form" class="btn btn-raised btn-primary m-t-1 waves-effect" style="float: right;">Add Book</button>
                            </div>
				        </div>
                        </form>

					</div>



				</div>




			</div>
		</div>

	</div>
	<!-- Jquery Core Js -->

   <!--<script src="assets/bundles/mainscripts.bundle.js"></script>-->
