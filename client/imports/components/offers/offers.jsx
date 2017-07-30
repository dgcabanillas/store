import React, { Component } from 'react';
import { browserHistory } from "react-router";

import './offers.sass';

export default class Offers extends Component{
	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
						  	<ol className="carousel-indicators">
						    	<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
							    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
						    	<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
						  	</ol>
						    <div className="carousel-inner" role="listbox">
							    <div className="item active">
							      	<img src="../carousel/img1.png" alt="First slide"/>
							    </div>
							    <div className="item">
							      	<img src="../carousel/img2.png" alt="Second slide"/>
							    </div>
							    <div className="item">
							      	<img src="../carousel/img3.png" alt="Third slide"/>
							    </div>
						  	</div>
						    <a className="left carousel-control" href="#carouselExampleIndicators" role="button" data-slide="prev">
							    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
							    <span className="sr-only">Previous</span>
							</a>
							<a className="right carousel-control" href="#carouselExampleIndicators" role="button" data-slide="next">
							    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
							    <span className="sr-only">Next</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
