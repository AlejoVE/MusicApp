const base_URL = 'https://api.spotify.com/v1/browse/categories';

export const getPlaylistByCategory = async (token, category_id) => {
	try {
		const limit = 5;
		const signal = AbortController.signal;

		const res = await fetch(
			`${base_URL}/${category_id}/playlists?limit=${limit}`,
			{
				signal: signal,
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

		return playlists.items;
	} catch (error) {
		console.log(error);
	}
};
