import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { useFetchSongs } from '../hooks/useFetchSongs';
import { PlaylistsContext } from '../Playlist/PlaylistsContext';
import { SongsContext } from '../songs/SongsContext';
import { types } from '../types/types';
import { SongList } from './SongList';

export const SongsContainer = () => {
	const { playlistsState } = useContext(PlaylistsContext);
	const { activePlaylistId } = playlistsState;

	const { authState } = useContext(AuthContext);
	const { token } = authState;

	useFetchSongs(token, activePlaylistId);

	const { songsState, songsDispatch } = useContext(SongsContext);
	const { songsIsLoading, songs } = songsState;

	useEffect(() => {
		songsDispatch({
			type: types.setSongs,
			payload: songs,
		});
	}, [activePlaylistId, songsDispatch]);

	return (
		<div>
			<ul>
				{!songsIsLoading ? (
					songs.map(({ name, album, artists, id }) => {
						return (
							<SongList
								name={name}
								key={id}
								album={album}
								artists={artists}
								id={id}
							/>
						);
					})
				) : (
					<h2>Loading...</h2>
				)}
			</ul>
		</div>
	);
};
