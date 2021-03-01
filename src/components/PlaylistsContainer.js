import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { CategoryContext } from '../categories/CategoriesContext';
import { useFetchPlaylists } from '../hooks/useFetchPlaylists';
import { Playlist } from './Playlist';

export const PlaylistsContainer = () => {
	const { authState } = useContext(AuthContext);
	const { token } = authState;

	const { activeCategory } = useContext(CategoryContext);
	const { activeCategory: myCategory } = activeCategory;
	const { id, name } = myCategory;

	const categoryId = localStorage.getItem('categoryId') || id;
	const categoryName = localStorage.getItem('categoryName') || name;

	const { playlists } = useFetchPlaylists(token, categoryId);

	return (
		<div>
			<h2>{categoryName}</h2>
			<ul>
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
		</div>
	);
};
