import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { CategoryContext } from '../categories/CategoriesContext';
import { getCategories } from '../helpers/getCategories';
import { types } from '../types/types';

export const useFetchCategories = () => {
	const { categoriesDispatch } = useContext(CategoryContext);
	const [state, setState] = useState({
		categories: [],
	});

	const { authDispatch } = useContext(AuthContext);

	useEffect(() => {
		const abortController = new AbortController();
		getCategories().then((data) => {
			authDispatch(setToken(data.token));
			categoriesDispatch({
				type: types.setCategories,
				payload: data.categories,
			});
			setState({
				categories: [...data.categories],
			});
		});

		return function cleanUp() {
			abortController.abort();
		};
	}, [authDispatch, categoriesDispatch]);

	return state;
};

const setToken = (token) => ({
	type: types.SetToken,
	payload: token,
});
