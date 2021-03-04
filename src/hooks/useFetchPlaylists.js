import { useContext } from 'react';
import { getPlaylistByCategory } from '../helpers/getPlaylists';
import { PlaylistsContext } from '../Playlist/PlaylistsContext';
import { types } from '../types/types';

export const useFetchPlaylists = (token, category_id) => {
	const { playlistDispatch } = useContext(PlaylistsContext);
	const abortController = new AbortController();

	return async () => {
		try {
			const data = await getPlaylistByCategory(token, category_id);
			playlistDispatch({
				type: types.setPlaylists,
				payload: [...data],
			});
		} catch (error) {
			abortController.abort();
			console.log(error);
		}
	};
};
