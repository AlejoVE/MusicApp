const base_url = `https://api.spotify.com/v1/playlists`;

export const getSongs = async (token, playlist_id) => {
	const limit = 10;

	try {
		const res = await fetch(
			`${base_url}/${playlist_id}/tracks?limit=${limit}`,
			{
				method: 'GET',
				//prettier-ignore
				headers: { 'Authorization': `Bearer ${token}`},
			}
		);

		const { items } = await res.json();

		const songs = [];

		items.forEach((song) => {
			const { track } = song;
			const { album, artists, id, name } = track;

			songs.push({ album, artists, id, name });
		});

		return songs;
	} catch (error) {
		console.log(error);
	}
};
