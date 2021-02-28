const client_id = process.env.REACT_APP_CLIENT_ID;
const client_secret = process.env.REACT_APP_CLIENT_SECRET;

export const getAuthToken = async () => {
	const res = await fetch(`https://accounts.spotify.com/api/token`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/x-www-form-urlencoded',
			//prettier-ignore
			'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret),
		},
		body: 'grant_type=client_credentials',
	});

	const { access_token: token } = await res.json();
	localStorage.setItem('authToken', token);

	return token;
};
