import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute, Router, browserHistory} from 'react-router';
import App from './Components/App';
import Home from './Components/Home';

ReactDOM.render(
	(
		<Router history={browserHistory} >
			<Route path="/" component={App}>
				<IndexRoute component={Home}/>
			</Route>
		</Router>
  	),
	document.getElementById('app')
)
