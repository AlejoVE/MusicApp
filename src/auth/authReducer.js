import { types } from '../types/types';

export const authReducer = (state = {}, action) => {
	switch (action.type) {
		case types.SetToken:
			return {
				...state,
				token: action.payload,
			};

		default:
			return state;
	}
};
