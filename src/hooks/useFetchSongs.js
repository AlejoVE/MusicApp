import { useState, useEffect } from 'react';
import { getSongs } from '../helpers/getSongs';

export const useFetchSongs = (token, playlist_id) => {
	const [state, setState] = useState({
		songs: [],
	});

	useEffect(() => {
		getSongs(token, playlist_id).then((data) => {
			setState({
				songs: [...data],
			});
		});
	}, [playlist_id]);

	return state;
};
