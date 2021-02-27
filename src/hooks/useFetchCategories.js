import { useState, useEffect } from 'react';
import { getCategories } from '../helpers/getCategories';

export const useFetchCategories = () => {
	const [state, setState] = useState({
		categories: [],
	});

	useEffect(() => {
		getCategories().then((data) => {
			setState({
				categories: [...data],
			});
		});
	}, []);

	return state;
};
