import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { CategoryContext } from '../categories/CategoriesContext';
import { useFetchPlaylists } from '../hooks/useFetchPlaylists';
import { PlaylistsContext } from '../Playlist/PlaylistsContext';
import { SongsContext } from '../songs/SongsContext';
import { types } from '../types/types';
import { Playlist } from './Playlist';

export const PlaylistsContainer = ({ history }) => {
	const { authState } = useContext(AuthContext);
	const { playlistDispatch } = useContext(PlaylistsContext);
	const { songsDispatch } = useContext(SongsContext);
	const { token } = authState;

	const { categoriesState } = useContext(CategoryContext);
	const { activeCategory: myCategory } = categoriesState;
	const { id, name } = myCategory;

	const categoryId = localStorage.getItem('categoryId') || id;
	const categoryName = localStorage.getItem('categoryName') || name;

	const { playlists } = useFetchPlaylists(token, categoryId);

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
				<h2>{categoryName}</h2>
			</div>
			<ul className='list'>
				{
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
				}
			</ul>
			<button className='goBack hvr-grow' onClick={goBack}>
				{'< Go back'}
			</button>
		</div>
	);
};
