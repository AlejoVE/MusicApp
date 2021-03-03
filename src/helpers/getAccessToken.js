const refresh_token = process.env.REACT_APP_REFRESH_TOKEN;
const basic_encoded = process.env.REACT_APP_ENCODED_CLIENT_ID_CLIENT_SECRET;

export const getAccessToken = async () => {
	try {
		const res = await fetch('https://accounts.spotify.com/api/token', {
			body: `grant_type=refresh_token&refresh_token=${refresh_token}`,
			headers: {
				Authorization: `Basic ${basic_encoded}`,
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			method: 'POST',
		});
		const data = await res.json();

		return data;
	} catch (error) {
		console.log(error);
	}
};
