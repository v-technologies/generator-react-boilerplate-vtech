import {AN_ACTION} from '../actions/<%= name %>';



const initialState = {
};



export default function <%= name %>(state = initialState, {type, payload}) {
	switch (type) {
		case AN_ACTION:
			return {
				...state,
				something: payload.something
			};

		default:
			return state;
	}
}
