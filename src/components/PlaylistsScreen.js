import React, { useContext } from 'react';
import { PlaylistsContext } from '../Playlist/PlaylistsContext';
import { PlaylistsContainer } from './PlaylistsContainer';
import { SongsContainer } from './SongsContainer';

export const PlaylistsScreen = ({ history }) => {
	const { playlistsState } = useContext(PlaylistsContext);
	const { isSelected } = playlistsState;
	console.log(isSelected);

	const goBack = () => {
		history.push('/');
	};

	return (
		<div>
			<PlaylistsContainer />

			{!isSelected ? <h2>Select a playlists</h2> : <SongsContainer />}

			<button onClick={goBack}>Go back</button>
		</div>
	);
};
