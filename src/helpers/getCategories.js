import { getAuthToken } from './getAuthToken';

const categories_URL = `https://api.spotify.com/v1/browse/categories`;

export const getCategories = async () => {
	const limit = 8;
	const token = await getAuthToken();
	const signal = AbortController.signal;
	const res = await fetch(`${categories_URL}?limit=${limit}`, {
		signal: signal,
		method: 'GET',
		headers: {
			//prettier-ignore
			'Authorization': `Bearer ${token}`,
		},
	});

	const { categories } = await res.json();

	return { token, categories: categories.items };
};
