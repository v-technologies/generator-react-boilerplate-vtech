import createSagaMiddleware from 'redux-saga';
import {watchFetchRepositories} from './home';



/**
 *
 */
const sagas = createSagaMiddleware(
	watchFetchRepositories
);



export default sagas;
