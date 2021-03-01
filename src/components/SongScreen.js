import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { categoriesReducer } from '../categories/categoriesReducer';
import { SongsContext } from '../songs/SongsContext';

export const SongScreen = () => {
	const history = useHistory();
	const { songsState } = useContext(SongsContext);
	const { activeSong } = songsState;
	const { name, album, artists } = activeSong;
	const { images } = album;

	const categoryName = localStorage.getItem('categoryName');
	console.log(images[0].url);

	const goBack = () => {
		history.push(`/playlists/${categoryName}`);
	};

	return (
		<div>
			<div>
				<img src={`${images[0].url}`}></img>
				<div>
					<h2>Name</h2>
					<button onClick={goBack}>Go back</button>
				</div>
			</div>
		</div>
	);
};
