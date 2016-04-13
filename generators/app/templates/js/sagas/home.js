import {takeLatest} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import {FETCH_REPOSITORIES, updateRepositories} from '../actions/home';
import {fetchByOrganization} from '../api/repositories';



/**
 *
 */
export function* fetchRepositoriesWorker(action) {
	const {organization} = action.payload;
	const repositories = yield call(fetchByOrganization, organization);

	yield put(updateRepositories(repositories));
}

/**
 *
 */
export function* watchFetchRepositories() {
	yield* takeLatest(FETCH_REPOSITORIES, fetchRepositoriesWorker);
}
