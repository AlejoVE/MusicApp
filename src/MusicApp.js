import React, { useReducer } from 'react';

import { AppRouter } from './router/AppRouter';
import { PlaylistsContext } from './Playlist/PlaylistsContext';
import { playlistsReducer } from './Playlist/playlistsReducer';
import { categoriesReducer } from './categories/categoriesReducer';
import { authReducer } from './auth/authReducer';
import { CategoryContext } from './categories/CategoriesContext';
import { AuthContext } from './auth/AuthContext';

const init = () => {
	return { activePlaylistId: '', isSelected: false };
};

const initCategories = () => {
	return { activeCategory: '' };
};

const initAuth = () => {
	return { token: '' };
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
	return (
		<AuthContext.Provider value={{ authState, authDispatch }}>
			<CategoryContext.Provider
				value={{ activeCategory, categoriesDispatch }}
			>
				<PlaylistsContext.Provider
					value={{ playlistsState, playlistDispatch }}
				>
					<AppRouter />
				</PlaylistsContext.Provider>
			</CategoryContext.Provider>
		</AuthContext.Provider>
	);
};
