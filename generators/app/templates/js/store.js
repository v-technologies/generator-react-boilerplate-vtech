import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {identity} from 'lodash';
import reducers from './reducers';
import sagas from './sagas';



/**
 *
 */
const shouldSetupDevTools = (
	process.env.NODE_ENV !== 'production'
	&& window.devToolsExtension
);

const sagaMiddleware = createSagaMiddleware();
const devToolsMiddleware = shouldSetupDevTools
	? window.devToolsExtension()
	: identity;

const store = createStore(
	reducers,
	compose(
		applyMiddleware(sagaMiddleware),
		devToolsMiddleware
	)
);

sagaMiddleware.run(sagas);



export default store;
