import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';

type RouterProps = {};

const Router: React.FC<RouterProps> = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={HomeScreen} />
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
