import {watchFetchRepositories} from './home';



/**
 *
 */
export default function* sagas() {
	yield [
		watchFetchRepositories()
	];
}
