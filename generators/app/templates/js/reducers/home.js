import {UPDATE_REPOSITORIES} from '../actions/home';



/**
 *
 */
const initialState = {
	repositories: []
};



/**
 *
 */
const updateRepositories = (state, {repositories}) => ({
	...state,
	repositories
});



/**
 *
 */
export default function home(state = initialState, {type, payload}) {
	switch (type) {
		case UPDATE_REPOSITORIES:
			return updateRepositories(state, payload);

		default:
			return state;
	}
}
