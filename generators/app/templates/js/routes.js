import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import store from './store';
import HomeContainer from './components/HomeContainer';
import {fetchRepositories} from './actions/home';



/**
 *
 */
const onEnterHome = ({params}) =>
	store.dispatch(
		fetchRepositories(
			params.organization || 'v-technologies'
		)
	);



/**
 *
 */
const routes = (
	<Router history={browserHistory}>
		<Route
			path="/(:organization)"
			component={HomeContainer}
			onEnter={onEnterHome}
		/>
	</Router>
);



export default routes;
