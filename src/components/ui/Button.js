import React, { useContext } from 'react';
import { types } from '../../types/types';
import { PlaylistsContext } from '../../Playlist/PlaylistsContext';

export const Button = ({ value, id }) => {
	const { playlistDispatch } = useContext(PlaylistsContext);

	const handleClick = () => {
		const action = {
			type: types.setActivePlaylist,
			payload: id,
		};

		playlistDispatch(action);
	};
	return (
		<button className='button hvr-grow' onClick={handleClick}>
			{value}
		</button>
	);
};
