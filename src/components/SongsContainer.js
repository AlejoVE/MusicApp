import React, { useContext, useEffect } from 'react';
import { SongsContext } from '../songs/SongsContext';
import { types } from '../types/types';
import { Loading } from './Loading';
import { SongList } from './SongList';

export const SongsContainer = () => {
	const { songsState, songsDispatch } = useContext(SongsContext);
	const { songsIsLoading, songs } = songsState;

	useEffect(() => {
		songsDispatch({
			type: types.setSongs,
			payload: songs,
		});
	}, [songsDispatch]);

	return (
		<div className='songs-container'>
			<ul>
				{!songsIsLoading ? (
					songs.map(({ name, album, artists, id }, i) => {
						return (
							<SongList
								name={name}
								key={id}
								album={album}
								artists={artists}
								id={id}
								index={i + 1}
							/>
						);
					})
				) : (
					<Loading />
				)}
			</ul>
		</div>
	);
};
