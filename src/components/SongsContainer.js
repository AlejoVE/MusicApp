import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { useFetchSongs } from '../hooks/useFetchSongs';
import { PlaylistsContext } from '../Playlist/PlaylistsContext';
import { SongsContext } from '../songs/SongsContext';
import { types } from '../types/types';
import { SongScreen } from './SongScreen';

export const SongsContainer = () => {
	const { playlistsState } = useContext(PlaylistsContext);
	const { activePlaylistId } = playlistsState;

	const { authState } = useContext(AuthContext);
	const { token } = authState;

	useFetchSongs(token, activePlaylistId);

	const { songsState, songsDispatch } = useContext(SongsContext);
	const { songsIsLoading, songs } = songsState;

	console.log('My songs', songs);

	//Tengo que hacer un context para las canciones y usar una action que cambie el
	//IsLoading en el context de las canciones, debo hacer eso en el useFetchSongs

	// const [isLoading, setIsLoading] = useState(true);
	// const [songs, setSongs] = useState([]);

	useEffect(() => {
		songsDispatch({
			type: types.setSongs,
			payload: songs,
		});
	}, [activePlaylistId]);

	return (
		<div>
			<ul>
				{!songsIsLoading ? (
					songs.map(({ name }) => <SongScreen name={name} />)
				) : (
					<h2>Loading...</h2>
				)}
			</ul>
		</div>
	);
};
