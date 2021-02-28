import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { getCategories } from '../helpers/getCategories';
import { types } from '../types/types';

export const useFetchCategories = () => {
	const [state, setState] = useState({
		categories: [],
	});

	const { authDispatch } = useContext(AuthContext);

	useEffect(() => {
		getCategories().then((data) => {
			authDispatch(setToken(data.token));
			setState({
				categories: [...data.categories],
			});
		});
	}, []);

	return state;
};

const setToken = (token) => ({
	type: types.SetToken,
	payload: token,
});
