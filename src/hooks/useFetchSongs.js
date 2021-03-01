import { useState, useEffect, useContext } from 'react';
import { getSongs } from '../helpers/getSongs';
import { SongsContext } from '../songs/SongsContext';
import { types } from '../types/types';

export const useFetchSongs = (token, playlist_id) => {
	const { songsDispatch } = useContext(SongsContext);
	const [state, setState] = useState({
		songs: [],
	});

	useEffect(() => {
		getSongs(token, playlist_id).then((data) => {
			songsDispatch(setSongs(data));
			setState({
				songs: [...data],
			});
		});
	}, [playlist_id]);

	return state;
};

const setSongs = (songs) => ({
	type: types.setSongs,
	payload: songs,
});
