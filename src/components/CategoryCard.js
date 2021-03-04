import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { CategoryContext } from '../categories/CategoriesContext';
import { useFetchPlaylists } from '../hooks/useFetchPlaylists';
import { types } from '../types/types';

export const CategoryCard = ({ name, imgUrl, id }) => {
	const { categoriesDispatch } = useContext(CategoryContext);
	const { authState } = useContext(AuthContext);
	const { token } = authState;
	const history = useHistory();

	const getPlaylists = useFetchPlaylists(token, id);

	const handleClick = () => {
		getPlaylists();
		categoriesDispatch({
			type: types.setActiveCategory,
			payload: {
				id,
				name,
			},
		});
		history.push(`/playlists/${id}`);
	};
	return (
		<div
			onClick={handleClick}
			className='category-card hvr-grow'
			style={{
				backgroundImage: `url("${imgUrl}")`,
			}}
		>
			<h2>{name}</h2>
		</div>
	);
};
