const basic_encoded = process.env.REACT_APP_ENCODED_CLIENT_ID_CLIENT_SECRET;

export const getRefreshToken = async () => {
	const res = await fetch('https://accounts.spotify.com/api/token', {
		body:
			'grant_type=authorization_code&code=AQANUd67yyf8KDUhBG2KwBVIkblBmNaBL970CQfpyz7mxWJUB_DfTZ2DdEHr9ppfnFd--mRYNIc79Y4bogw9q1AZsF0ur_MnpPUndreCtAtaYEau1qLgL_yJJ0nNMGGg0IFIKxKFDgOlOri6V0BquHyzf0oGGPMSI4grR2_u1qHXYvEpop-yd855igrfkoYgAbkE26ao6wz4XLBiV2T1NS0tRiDamoo&redirect_uri=https%3A%2F%2Fmarca.com%2F',
		headers: {
			//prettier-ignore
			'Authorization':
				`Basic ${basic_encoded}`,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		method: 'POST',
	});

	const data = await res.json();
	console.log(data);
};
