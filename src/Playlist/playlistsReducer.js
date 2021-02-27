import { types } from '../types/types';

export const playlistsReducer = (state = {}, action) => {
	switch (action.type) {
		case types.getPlaylists:
			return {
				...state,
				playlists: [...action.payload],
			};

		case types.setActivePlaylist:
			return {
				...state,
				activeListID: action.payload,
			};

		default:
			return state;
	}
};
