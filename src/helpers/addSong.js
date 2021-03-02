import Swal from 'sweetalert2';
import { getAccessToken } from './getAccessToken';

const base_url = 'https://api.spotify.com/v1/playlists/4qhYOIILXPZGcwOAOd9Vt6/';

export const addSong = async (songId) => {
	const data = await getAccessToken();
	const { access_token } = data;

	const encode = encodeURIComponent(`spotify:track:${songId}`);
	try {
		await fetch(`${base_url}tracks?uris=${encode}`, {
			method: 'POST',
			headers: {
				//prettier-ignore
				'Authorization': `Bearer ${access_token}`,
			},
		});

		Swal.fire('Good choice!', 'Check your playlist ;)', 'success');
	} catch (error) {
		Swal.fire('Error', 'Sorry, there was an error, try later', 'error');
		console.log(error);
	}
};
