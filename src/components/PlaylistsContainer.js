import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { CategoryContext } from '../categories/CategoriesContext';
import { useFetchPlaylists } from '../hooks/useFetchPlaylists';
import { Playlist } from './Playlist';

export const PlaylistsContainer = ({ history }) => {
	const { authState } = useContext(AuthContext);
	const { token } = authState;
	console.log(token);

	const { activeCategory } = useContext(CategoryContext);
	const { activeCategory: myCategory } = activeCategory;
	const { id, name } = myCategory;

	const categoryId = localStorage.getItem('categoryId') || id;
	const categoryName = localStorage.getItem('categoryName') || name;

	const { playlists } = useFetchPlaylists(token, categoryId);

	const goBack = () => {
		history.push('/');
	};

	return (
		<div className='playlists-container'>
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
				Go back
			</button>
		</div>
	);
};
