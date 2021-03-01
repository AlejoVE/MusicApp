import React from 'react';

export const SongList = ({ name, artists, album }) => {
	return (
		<li>
			<h2>{name}</h2>
			{/* <p>Artists: {artists}</p>
			<em>Album: {album}</em> */}
		</li>
	);
};
