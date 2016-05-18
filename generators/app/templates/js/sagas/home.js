import {takeLatest} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import {FETCH_REPOSITORIES, updateRepositories} from '../actions/home';
import {fetchByOrganization} from '../api/repositories';



/**
 *
 */
export function* fetchRepositoriesWorker(action) {
	// calls fetchByOrganization() and waits for the result
	const repositories = yield call(
		fetchByOrganization,
		action.payload.organization
	);

	// sends an action of type UPDATE_REPOSITORIES
	yield put(updateRepositories(repositories));
}

/**
 *
 */
export function* watchFetchRepositories() {
	yield* takeLatest(
		FETCH_REPOSITORIES,
		fetchRepositoriesWorker
	);
}
