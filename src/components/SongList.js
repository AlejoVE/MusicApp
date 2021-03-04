import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CategoryContext } from '../categories/CategoriesContext';
import { SongsContext } from '../songs/SongsContext';
import { types } from '../types/types';

export const SongList = ({ name, artists, album, id, index }) => {
	const { categoriesState } = useContext(CategoryContext);

	const { activeCategory } = categoriesState;
	const { id: categoryId } = activeCategory;

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

		history.push(`/playlists/${categoryId}/song`);
	};
	return (
		<li
			className='hvr-mine animate__animated animate__fadeIn'
			onClick={setActiveSong}
		>
			<Link
				to={`/playlists/${categoryId}/song`}
			>{`${index}.                ${name}`}</Link>
		</li>
	);
};
