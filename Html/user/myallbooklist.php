<style>
* {
  box-sizing: border-box;
}

.columns {
  float: left;
  width: 26.3%;
  padding: 8px;
  max-height: 417px;
}

.price {
  list-style-type: none;
  border: 1px solid #eee;
  margin: 0;
  padding: 0;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.price:hover {
  box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2)
}

.price .header {
  background-color: #111;
  color: white;
  font-size: 25px;
}

.price li {
  border-bottom: 1px solid #eee;
  padding: 20px;
  text-align: center;
}

.price .grey {
  background-color: #eee;
  font-size: 20px;
}

.button {
  background-color: #04AA6D;
  border: none;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
}

@media only screen and (max-width: 600px) {
  .columns {
    width: 100%;
  }
}
</style>
    <div class="container-fluid">
        <!-- Input -->
        <div class="row clearfix">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="card">
					<div class="header">
                        <h2> My Books </h2>
                        <p style="float: right;"><input type="text" name="filter" id="filter" style="padding: 6px;margin-top: 8px;font-size: 17px;border: 1px solid #b3b0b0;" placeholder="Search By Anything"></p>
                    </div>


					<div class="body">

						<div class="row clearfix booklistall" >








					</div>



				</div>




			</div>
		</div>

	</div>
	<!-- Jquery Core Js -->

   <!--<script src="assets/bundles/mainscripts.bundle.js"></script>-->
