import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { SongsContext } from '../songs/SongsContext';
import { addSong } from '../helpers/addSong';
import { getArtistsString } from '../helpers/getArtistsString';
import { Footer } from './ui/Footer';

export const SongScreen = () => {
	const history = useHistory();
	const { songsState } = useContext(SongsContext);
	const { activeSong } = songsState;
	const { album, id, name, artists } = activeSong;
	const { images, name: albumName } = album;
	const { release_date } = album;

	const categoryName = localStorage.getItem('categoryName');
	console.log('Album', album);
	const songArtists = getArtistsString(artists);
	console.log(songArtists);

	const goBack = () => {
		history.push(`/playlists/${categoryName}`);
	};

	const handleAddSong = () => {
		addSong(id);
	};

	return (
		<div className='song-screen-container animate__animated animate__fadeInLeft animate__faster'>
			<div className='song-card-container '>
				<img src={`${images[0].url}`} alt='Album cover'></img>
				<div className='song-description-container'>
					<div className='song-header'>
						<h2>{name}</h2>
					</div>

					<ul>
						<li>Artists: {songArtists}</li>
						<li>Album: {albumName}</li>
						<li>Release date: {release_date}</li>
					</ul>

					<div className='buttons-container'>
						<button className='go-back hvr-grow' onClick={goBack}>
							{'< Go back'}
						</button>
						<button className='button hvr-grow' onClick={handleAddSong}>
							Add song to Playlist
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};
