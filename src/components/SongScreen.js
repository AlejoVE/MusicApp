import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { SongsContext } from '../songs/SongsContext';
import { addSong } from '../helpers/addSong';

export const SongScreen = () => {
	const history = useHistory();
	const { songsState } = useContext(SongsContext);
	const { activeSong } = songsState;
	const { album, id } = activeSong;
	const { images } = album;

	const categoryName = localStorage.getItem('categoryName');
	console.log(images[0].url);

	const goBack = () => {
		history.push(`/playlists/${categoryName}`);
	};

	const handleAddSong = () => {
		addSong(id);
	};

	return (
		<div>
			<div>
				<img src={`${images[0].url}`} alt='Album cover'></img>
				<div>
					<h2>Name</h2>
					<button onClick={goBack}>Go back</button>
					<button onClick={handleAddSong}>Add song to Playlist</button>
				</div>
			</div>
		</div>
	);
};
