import React from 'react';
import { CategoryCard } from './CategoryCard';
import { useFetchCategories } from '../hooks/useFetchCategories';

export const CategoryContainer = () => {
	const { categories } = useFetchCategories();
	console.log(categories);
	return (
		<div className='category-container'>
			{
				// prettier/ignore
				categories.slice(12).map(({ name, id, icons }) => (
					<CategoryCard name={name} key={id} imgUrl={icons[0].url} />
				))
			}
		</div>
	);
};
