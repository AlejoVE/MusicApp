import React from 'react';
import { Button } from './ui/Button';

export const Playlist = ({ name, description, tracks, id }) => {
	if (description.includes('<a href=')) {
		description = 'My cool description from Spotify';
	}
	return (
		<li className='li-element'>
			<div>
				<h2>{name}</h2>
				<p>{description}</p>
				<em>Number of songs: {tracks.total}</em>
			</div>
			<Button value='See songs >>>' id={id} />
		</li>
	);
};
