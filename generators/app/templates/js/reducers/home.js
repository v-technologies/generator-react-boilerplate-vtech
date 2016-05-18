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
export default function home(state = initialState, action) {
	switch (action.type) {
		case UPDATE_REPOSITORIES:
			return {
				repositories: action.payload.repositories
			};

		default:
			return state;
	}
}
