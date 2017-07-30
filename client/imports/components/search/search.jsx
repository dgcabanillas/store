import React, { Component } from 'react';
import { browserHistory } from "react-router";

import './search.sass';

export default class Search extends Component{
	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<form className="navbar-form navbar-center" role="search">
						  	<div className="form-group">
						  		<input type="text" className="form-control" placeholder="Search"/>
						  	</div>
						  	<button type="submit" className="btn btn-default">Submit</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
