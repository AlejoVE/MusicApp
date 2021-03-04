import React, { useContext } from 'react';
import { types } from '../../types/types';
import { PlaylistsContext } from '../../Playlist/PlaylistsContext';
import { SongsContext } from '../../songs/SongsContext';
import { AuthContext } from '../../auth/AuthContext';
import { useFetchSongs } from '../../hooks/useFetchSongs';

export const Button = ({ value, id }) => {
	const { songsDispatch } = useContext(SongsContext);
	const { playlistDispatch } = useContext(PlaylistsContext);

	const { authState } = useContext(AuthContext);
	const { token } = authState;

	const getSongs = useFetchSongs(token, id);

	const handleClick = () => {
		getSongs();
		const action = {
			type: types.setActivePlaylist,
			payload: id,
		};

		playlistDispatch(action);
		songsDispatch({
			type: types.songsIsLoading,
		});
		songsDispatch({
			type: types.clearSongs,
		});
	};
	return (
		<button className='btn hvr-grow' onClick={handleClick}>
			{value}
		</button>
	);
};
