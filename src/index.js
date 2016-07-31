import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute, Router, browserHistory} from 'react-router';
import App from './Components/App';
import Login from './Components/Login/Login';
import Home from './Components/Home';


var Parse = require('parse').Parse;
Parse.initialize(
  'LlfYEifUnczdxWQzEgWw4kb8v7206BdAvMGkAXJP',
  'ig4C5CZdidYDAhl1g87xQTd4OeH35C8YzuJgsQgm'
);

console.log('initialized Parse');

ReactDOM.render(
	(
		<Router history={browserHistory} >
			<Route path="/" component={App}>
				<IndexRoute component={Login}/>
				<Route path="/Login" component={Login}/>
				<Route path="/Home" component={Home}/>
			</Route>
		</Router>
  	),
	document.getElementById('app')
)
