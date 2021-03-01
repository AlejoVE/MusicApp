import React, { useReducer } from 'react';

import { AppRouter } from './router/AppRouter';
import { PlaylistsContext } from './Playlist/PlaylistsContext';
import { playlistsReducer } from './Playlist/playlistsReducer';
import { categoriesReducer } from './categories/categoriesReducer';
import { authReducer } from './auth/authReducer';
import { CategoryContext } from './categories/CategoriesContext';
import { AuthContext } from './auth/AuthContext';
import { songsReducer } from './songs/songsReducer';
import { SongsContext } from './songs/SongsContext';

const init = () => {
	return { activePlaylistId: '', isSelected: false };
};

const initCategories = () => {
	return { activeCategory: '' };
};

const initAuth = () => {
	return { token: '' };
};

const initSongs = () => {
	return { songs: [], songsIsLoading: true };
};

export const MusicApp = () => {
	const [playlistsState, playlistDispatch] = useReducer(
		playlistsReducer,
		{},
		init
	);
	const [activeCategory, categoriesDispatch] = useReducer(
		categoriesReducer,
		{},
		initCategories
	);

	const [authState, authDispatch] = useReducer(authReducer, {}, initAuth);

	const [songsState, songsDispatch] = useReducer(songsReducer, {}, initSongs);
	return (
		<AuthContext.Provider value={{ authState, authDispatch }}>
			<SongsContext.Provider value={{ songsState, songsDispatch }}>
				<CategoryContext.Provider
					value={{ activeCategory, categoriesDispatch }}
				>
					<PlaylistsContext.Provider
						value={{ playlistsState, playlistDispatch }}
					>
						<AppRouter />
					</PlaylistsContext.Provider>
				</CategoryContext.Provider>
			</SongsContext.Provider>
		</AuthContext.Provider>
	);
};
