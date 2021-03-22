import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import HomeScreen from './screens/HomeScreen';

function App() {
	return (
		<Wrapper>
			<Router>
				<Switch>
					<Route exact path="/" component={HomeScreen} />
				</Switch>
			</Router>
		</Wrapper>
	);
}

export default App;

const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
	background-color: #242526;
`;
