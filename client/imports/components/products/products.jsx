import React, { Component } from 'react';
import { browserHistory } from "react-router";

import './products.sass';
import Product from './components/product.jsx';

export default class Products extends Component{
	render(){
		return(
			<div className="container products">
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
			</div>
		);
	}
}
