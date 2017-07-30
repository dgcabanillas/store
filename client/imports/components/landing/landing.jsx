import React, { Component } from 'react';
import { browserHistory } from "react-router";

import './landing.sass';
import Offers from '../offers/offers.jsx';
import Search from '../search/search.jsx';
import Products from '../products/products.jsx';

export default class Landing extends Component{
	render(){
		return(
			<div className="landing">
				<Offers />
				<Search />
				<Products />
			</div>
		);
	}
}
