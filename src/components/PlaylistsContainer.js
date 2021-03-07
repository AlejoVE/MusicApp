import React, { useContext } from 'react';
import { CategoryContext } from '../categories/CategoriesContext';
import { PlaylistsContext } from '../Playlist/PlaylistsContext';
import { SongsContext } from '../songs/SongsContext';
import { types } from '../types/types';
import { Playlist } from './Playlist';

export const PlaylistsContainer = ({ history }) => {
	const { categoriesState } = useContext(CategoryContext);
	const { activeCategory } = categoriesState;
	const { name } = activeCategory;

	const { playlistsState, playlistDispatch } = useContext(PlaylistsContext);
	const { playlists } = playlistsState;

	const { songsDispatch } = useContext(SongsContext);

	const goBack = () => {
		playlistDispatch({
			type: types.deactivateSelected,
		});

		songsDispatch({
			type: types.clearSongs,
		});
		history.push('/');
	};

	return (
		<div className='playlists-container '>
			<div className='header'>
				<h2>{name}</h2>
			</div>
			<ul className='list'>
				{playlists.length === 0 ? (
					<div className='category-empty'>
						<h2>This category is empty, please select another one.</h2>
					</div>
				) : (
					// prettier/ignore
					playlists.map(({ id, name, description, tracks }) => {
						return (
							<Playlist
								name={name}
								key={id}
								description={description}
								tracks={tracks}
								id={id}
							/>
						);
					})
				)}
			</ul>
			<button className='goBack hvr-grow' onClick={goBack}>
				{'< Go back'}
			</button>
		</div>
	);
};
