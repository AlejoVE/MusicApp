import React from 'react';

import { CategoryContainer } from './CategoryContainer';
import { Footer } from './ui/Footer';

export const MainScreen = () => {
	return (
		<>
			<div className='main-container animate__animated animate__fadeIn'>
				<div className='header-container'>
					{/* <img
						className='header-img'
						// src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png'
						src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png'
						alt='Spotify logo'
					></img> */}
					<h1>MusicApp</h1>
				</div>
				<h2 className='sub-title'>Select a category</h2>
				<CategoryContainer />
				<Footer />
			</div>
		</>
	);
};
