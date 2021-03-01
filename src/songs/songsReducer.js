import { types } from '../types/types';

export const songsReducer = (state = {}, action) => {
	switch (action.type) {
		case types.setSongs:
			return {
				...state,
				songs: [...action.payload],
				songsIsLoading: false,
			};

		case types.songsIsLoading:
			return {
				...state,
				songsIsLoading: true,
			};

		case types.setActiveSong:
			return {
				...state,
				activeSong: action.payload,
			};

		default:
			return state;
	}
};
