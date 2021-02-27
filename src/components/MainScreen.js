import React from 'react';
import { CategoryContainer } from './CategoryContainer';
import { Button } from './ui/Button';

export const MainScreen = () => {
	return (
		<div className='main-container'>
			<div className='header-container'>
				<img
					className='header-img'
					src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png'
				></img>
			</div>
			<CategoryContainer />
			<Button value='My playlists' />
		</div>
	);
};
