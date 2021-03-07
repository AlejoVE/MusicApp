import React, { useContext } from 'react';
import { CategoryCard } from './CategoryCard';
import ReactLoading from 'react-loading';

import { useFetchCategories } from '../hooks/useFetchCategories';
import { CategoryContext } from '../categories/CategoriesContext';

export const CategoryContainer = () => {
	//Fetch categories from Spotify
	const getCategories = useFetchCategories();
	getCategories();
	const { categoriesState } = useContext(CategoryContext);
	const { categories, isLoading } = categoriesState;

	if (isLoading) {
		return (
			<ReactLoading
				className='loading-component'
				type='bars'
				color='#5fd662'
				height='20%'
				width='20%'
			/>
		);
	}

	return (
		<div className='category-container'>
			{
				// prettier/ignore
				categories.map(({ name, id, icons }) => (
					<CategoryCard
						name={name}
						key={id}
						imgUrl={icons[0].url}
						id={id}
					/>
				))
			}
		</div>
	);
};
