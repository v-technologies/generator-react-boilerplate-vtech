import {takeEvery, takeLatest} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import {AN_ACTION, anotherAction} from '../actions/<%= name %>';
import {apiFunction} from '../api/<%= name %>';



function* somethingWorker({type, payload}) {
	const apiResults = yield call(
		apiFunction,
		payload.id
	);

	yield put(anotherAction(apiResults));
}

export function* watchSomething() {
	yield* takeLatest(AN_ACTION, somethingWorker);
}
