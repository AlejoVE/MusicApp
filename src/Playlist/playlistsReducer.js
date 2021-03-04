import { types } from '../types/types';

export const playlistsReducer = (state = {}, action) => {
	switch (action.type) {
		case types.setActivePlaylist:
			return {
				...state,
				activePlaylistId: action.payload,
				isSelected: true,
			};

		case types.deactivateSelected:
			return {
				...state,
				isSelected: false,
			};

		case types.setPlaylists:
			return {
				...state,
				playlists: [...action.payload],
			};

		case types.clearPlaylists:
			return {
				...state,
				playlists: [],
			};

		default:
			return state;
	}
};
