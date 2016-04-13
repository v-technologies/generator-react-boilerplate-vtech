import {UPDATE_REPOSITORIES} from '../actions/home';



/**
 *
 */
const initialState = {
	repositories: null
};



/**
 *
 */
export default function reduce(state = initialState, {type, payload}) {
	switch (type) {
		case UPDATE_REPOSITORIES:
			return {
				repositories: payload.repositories
			};

		default:
			return state;
	}
}
