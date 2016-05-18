import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import store from './store';
import HomeContainer from './components/HomeContainer';
import {fetchRepositories} from './actions/home';



/**
 *
 */
const onEnterHome = () =>
	store.dispatch(
		fetchRepositories(
			'v-technologies'
		)
	);



/**
 *
 */
const routes = (
	<Router history={browserHistory}>
		<Route
			path="/"
			component={HomeContainer}
			onEnter={onEnterHome}
		/>
	</Router>
);



export default routes;
