import React, { Component } from 'react';



const ErrorMessagesComponent = () => {
    return (
	        <div class="content">
				 <div class="row">
					<div class="col-md-12">
					  <div class="box box-primary">
						<div class="box-header">
						  <h3 class="box-title"> Error Messages </h3>
						</div>
						<div class="box-body  table-responsive">
						
							<div class="box-body">
							  <div class="alert alert-danger alert-dismissible">
								<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
								<h4><i class="icon fa fa-ban"></i> Alert!</h4>
								Danger alert preview. This alert is dismissable. A wonderful serenity has taken possession of my entire
								soul, like these sweet mornings of spring which I enjoy with my whole heart.
							  </div>
							  <div class="alert alert-info alert-dismissible">
								<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
								<h4><i class="icon fa fa-info"></i> Alert!</h4>
								Info alert preview. This alert is dismissable.
							  </div>
							  <div class="alert alert-warning alert-dismissible">
								<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
								<h4><i class="icon fa fa-warning"></i> Alert!</h4>
								Warning alert preview. This alert is dismissable.
							  </div>
							  <div class="alert alert-success alert-dismissible">
								<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
								<h4><i class="icon fa fa-check"></i> Alert!</h4>
								Success alert preview. This alert is dismissable.
							  </div>
							</div>	

							
						</div>	
					  </div>
					</div>
				</div> 
			</div>
    );
}
 
export default ErrorMessagesComponent;
