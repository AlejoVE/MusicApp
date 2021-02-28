import { getAuthToken } from './getAuthToken';

const categories_URL = `https://api.spotify.com/v1/browse/categories`;

export const getCategories = async () => {
	const token = await getAuthToken();
	const res = await fetch(categories_URL, {
		method: 'GEt',
		headers: {
			//prettier-ignore
			'Authorization': `Bearer ${token}`,
		},
	});

	const { categories } = await res.json();

	return { token, categories: categories.items };
};
