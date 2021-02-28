import { useState, useEffect } from 'react';
import { getPlaylistByCategory } from '../helpers/getPlaylists';

export const useFetchPlaylists = (token, category_id) => {
	const [state, setState] = useState({
		playlists: [],
	});

	useEffect(() => {
		getPlaylistByCategory(token, category_id).then((data) => {
			setState({
				playlists: [...data],
			});
		});
	}, [category_id]);

	return state;
};
