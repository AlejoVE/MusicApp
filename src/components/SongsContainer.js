import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { getArtistsString } from '../helpers/getArtistsString';
import { useFetchSongs } from '../hooks/useFetchSongs';
import { PlaylistsContext } from '../Playlist/PlaylistsContext';
import { SongsContext } from '../songs/SongsContext';
import { types } from '../types/types';
import { SongList } from './SongList';
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
					songs.map(({ name, album, artists, id }) => {
						// const artistsNames = getArtistsString(artists);

						return (
							<SongList
								name={name}
								key={id}
								album={album}
								artists={artists}
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
