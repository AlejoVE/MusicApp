import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SongsContext } from '../songs/SongsContext';
import { types } from '../types/types';

export const SongList = ({ name, artists, album, id }) => {
	const categoryName = localStorage.getItem('categoryName');
	const { songsDispatch } = useContext(SongsContext);

	const setActiveSong = () => {
		songsDispatch({
			type: types.setActiveSong,
			payload: {
				name,
				artists,
				album,
				id,
			},
		});
	};
	return (
		<li onClick={setActiveSong}>
			<Link to={`/playlists/${categoryName}/song`}>{name}</Link>
		</li>
	);
};
