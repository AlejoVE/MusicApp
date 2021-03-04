import React, { useContext } from 'react';
import { CategoryCard } from './CategoryCard';
import { useFetchCategories } from '../hooks/useFetchCategories';
import { CategoryContext } from '../categories/CategoriesContext';

export const CategoryContainer = () => {
	//get categories
	const getCategories = useFetchCategories();
	getCategories();
	const { categoriesState } = useContext(CategoryContext);
	const { categories } = categoriesState;

	return (
		<div className='category-container'>
			{
				// prettier/ignore
				categories.slice(12).map(({ name, id, icons }) => (
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
