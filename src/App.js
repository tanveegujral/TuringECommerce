import React from 'react';
import { hot } from 'react-hot-loader/root';
import ErrorBoundary from './Components/ErrorBoundary';
import Routes from './Routes';

const App = () => (
	<ErrorBoundary>
		<Routes />
	</ErrorBoundary>
);

export default hot(App);
