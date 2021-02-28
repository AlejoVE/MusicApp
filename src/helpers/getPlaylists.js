import { getAuthToken } from './getAuthToken';
const base_URL = 'https://api.spotify.com/v1/browse/categories';

export const getPlaylistByCategory = async (token, category_id) => {
	try {
		const limit = 10;

		const res = await fetch(
			`${base_URL}/${category_id}/playlists?limit=${limit}`,
			{
				method: 'GET',
				//prettier-ignore
				headers: { 
                    'Authorization': `Bearer ${token}`,
                
                },
			}
		);

		const { playlists } = await res.json();

		if (playlists === undefined) {
			return [];
		}
		console.log(playlists.items);

		return playlists.items;
	} catch (error) {
		console.log(error);
	}
};
