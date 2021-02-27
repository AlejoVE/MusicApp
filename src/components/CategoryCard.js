import React from 'react';

export const CategoryCard = ({ name, imgUrl, history }) => {
	return (
		<div
			className='category-card hvr-grow'
			style={{
				backgroundImage: `url("${imgUrl}")`,
			}}
		>
			<h2>{name}</h2>
		</div>
	);
};
