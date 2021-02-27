import React, { useReducer } from 'react';

import { AppRouter } from './router/AppRouter';
import { PlaylistsContext } from './Playlist/PlaylistsContex';
import { playlistsReducer } from './Playlist/playlistsReducer';

const init = () => {
	return { playlists: [] };
};

export const MusicApp = () => {
	const [playlists, dispatch] = useReducer(playlistsReducer, {}, init);

	return (
		<PlaylistsContext.Provider value={{ playlists, dispatch }}>
			<AppRouter />
		</PlaylistsContext.Provider>
	);
};
