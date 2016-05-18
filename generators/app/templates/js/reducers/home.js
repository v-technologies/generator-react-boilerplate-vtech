import {UPDATE_REPOSITORIES} from '../actions/home';



/**
 *	Initial state.
 */
const initialState = {
	repositories: []
};



/**
 *	Reduces home actions.
 *
 *	@param {object} state - State.
 *	@param {object} action - Action.
 *	@return {object} - Updated state.
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
