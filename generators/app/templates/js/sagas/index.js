import {watchFetchRepositories} from './home';



/**
 *	Exports all sagas of the application.
 */
export default function* sagas() {
	yield [
		watchFetchRepositories()
	];
}
