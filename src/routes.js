import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login/index';
import Profile from './pages/Profile/index';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Login}></Route>
				<Route path="/profile" component={Profile}></Route>
			</Switch>
		</BrowserRouter>
	);
}
