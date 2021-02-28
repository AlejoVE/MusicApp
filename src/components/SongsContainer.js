import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { useFetchSongs } from '../hooks/useFetchSongs';
import { PlaylistsContext } from '../Playlist/PlaylistsContext';
import { SongScreen } from './SongScreen';

export const SongsContainer = () => {
	const { playlistsState } = useContext(PlaylistsContext);
	const { activePlaylistId } = playlistsState;

	const { authState } = useContext(AuthContext);
	const { token } = authState;

	//Tengo que hacer un context para las canciones y usar una action que cambie el
	//IsLoading en el context de las canciones, debo hacer eso en el useFetchSongs

	const [isLoading, setIsLoading] = useState(true);
	const [songs, setSongs] = useState([]);

	const dataSongs = useFetchSongs(token, activePlaylistId);

	useEffect(() => {
		setIsLoading(false);
		setSongs(dataSongs);
	}, [activePlaylistId]);

	return (
		<div>
			<ul>
				{!isLoading ? (
					songs.map(({ name }) => <SongScreen name={name} />)
				) : (
					<h2>Loading...</h2>
				)}
			</ul>
		</div>
	);
};
