import React from 'react';

export const PlaylistsScreen = ({ history }) => {
	const goBack = () => {
		history.push('/');
	};
	return (
		<div>
			<h1>Playlists Screen</h1>

			<button onClick={goBack}>Go back</button>
		</div>
	);
};
