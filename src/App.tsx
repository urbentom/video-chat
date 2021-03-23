import React from 'react';
import styled from 'styled-components';
// TODO: Make custom auth in the future, this will do for now
import { withAuthenticator } from '@aws-amplify/ui-react';

// Import Main Router
import Router from './router';

import { AuthContextProvider } from './contexts/AuthContext';

// Configure Amplify with aws export file
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function App() {
	return (
		<Wrapper>
			<Router />
		</Wrapper>
	);
}

export default withAuthenticator(App);

const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
	background-color: #242526;
`;
