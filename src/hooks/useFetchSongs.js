import { useContext } from 'react';
import { getSongs } from '../helpers/getSongs';
import { SongsContext } from '../songs/SongsContext';
import { types } from '../types/types';

export const useFetchSongs = (token, playlist_id) => {
	const { songsDispatch } = useContext(SongsContext);
	const abortController = new AbortController();

	return async () => {
		try {
			const data = await getSongs(token, playlist_id);
			songsDispatch(setSongs(data));
		} catch (error) {
			songsDispatch({ type: types.songsEndLoading });
			abortController.abort();
			console.log(error);
		}
	};
};

const setSongs = (songs) => ({
	type: types.setSongs,
	payload: songs,
});
