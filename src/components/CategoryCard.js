import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CategoryContext } from '../categories/CategoriesContext';
import { types } from '../types/types';

export const CategoryCard = ({ name, imgUrl, id }) => {
	const { categoriesDispatch } = useContext(CategoryContext);

	const handleClick = () => {
		categoriesDispatch({
			type: types.setActiveCategory,
			payload: {
				id,
				name,
			},
		});
	};
	return (
		<div
			className='category-card hvr-grow'
			style={{
				backgroundImage: `url("${imgUrl}")`,
			}}
		>
			<h2>{name}</h2>
			<Link onClick={handleClick} className='link' to={`/playlists/${id}`}>
				More...
			</Link>
		</div>
	);
};
