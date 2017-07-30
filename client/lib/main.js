import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import Index from "../imports/components/root/index.jsx";
//import "../../public/js/jquery.js";

Meteor.startup(()=>{
	render(<Index/>, document.getElementById('root'));
})
