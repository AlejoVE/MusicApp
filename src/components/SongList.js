import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { SongsContext } from '../songs/SongsContext';
import { types } from '../types/types';

export const SongList = ({ name, artists, album, id, index }) => {
	const categoryName = localStorage.getItem('categoryName');
	const { songsDispatch } = useContext(SongsContext);
	const history = useHistory();

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

		history.push(`/playlists/${categoryName}/song`);
	};
	return (
		<li className='hvr-mine' onClick={setActiveSong}>
			<Link
				to={`/playlists/${categoryName}/song`}
			>{`${index}.                ${name}`}</Link>
		</li>
	);
};
