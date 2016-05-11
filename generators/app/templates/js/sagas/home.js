import {takeLatest} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import * as actions from '../actions/home';
import * as api from '../api/repositories';



/**
 *
 */
export function* fetchRepositoriesWorker({
	payload: {
		organization
	}
}) {
	yield put(actions.updateRepositories(
		yield call(api.fetchByOrganization, organization)
	));
}

/**
 *
 */
export function* watchFetchRepositories() {
	yield* takeLatest(
		actions.FETCH_REPOSITORIES,
		fetchRepositoriesWorker
	);
}
