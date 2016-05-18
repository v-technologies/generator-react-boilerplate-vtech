import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import store from './store';
import HomeContainer from './components/HomeContainer';
import {fetchRepositories} from './actions/home';



/**
 *	Dispatches an action of type FETCH_REPOSITORIES when entering
 *	the home route.
 */
const onEnterHome = () =>
	store.dispatch(
		fetchRepositories(
			'v-technologies'
		)
	);



/**
 * Application routes.
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
