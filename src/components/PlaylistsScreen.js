import React, { useContext } from 'react';
import { PlaylistsContext } from '../Playlist/PlaylistsContext';
import { NotSelected } from './NotSelected';
import { PlaylistsContainer } from './PlaylistsContainer';
import { SongsContainer } from './SongsContainer';

export const PlaylistsScreen = ({ history }) => {
	const { playlistsState } = useContext(PlaylistsContext);
	const { isSelected } = playlistsState;

	return (
		<>
			<div className='playlists-screen-container'>
				<PlaylistsContainer history={history} />

				{!isSelected ? <NotSelected /> : <SongsContainer />}
			</div>
		</>
	);
};
