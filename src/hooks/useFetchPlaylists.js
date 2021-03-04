import { useEffect, useContext } from 'react';
import { getPlaylistByCategory } from '../helpers/getPlaylists';
import { PlaylistsContext } from '../Playlist/PlaylistsContext';
import { types } from '../types/types';

export const useFetchPlaylists = (token, category_id) => {
	const { playlistDispatch } = useContext(PlaylistsContext);

	useEffect(() => {
		const abortController = new AbortController();
		getPlaylistByCategory(token, category_id).then((data) => {
			playlistDispatch({
				type: types.setPlaylists,
				payload: [...data],
			});
		});

		return function cleanUp() {
			abortController.abort();
		};
	}, [category_id, token, playlistDispatch]);
};
