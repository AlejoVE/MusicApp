import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { CategoryContext } from '../categories/CategoriesContext';
import { getCategories } from '../helpers/getCategories';
import { types } from '../types/types';

export const useFetchCategories = () => {
	const { categoriesDispatch } = useContext(CategoryContext);
	const { authDispatch } = useContext(AuthContext);

	return async () => {
		try {
			const data = await getCategories();

			authDispatch(setToken(data.token));
			categoriesDispatch({
				type: types.setCategories,
				payload: data.categories,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

const setToken = (token) => ({
	type: types.SetToken,
	payload: token,
});
