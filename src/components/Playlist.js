import React from 'react';
import { Button } from './ui/Button';

export const Playlist = ({ name, description, tracks, id }) => {
	return (
		<li>
			<h2>{name}</h2>
			<p>{description}</p>
			<em>Number of songs: {tracks.total}</em>
			<Button value='see songs' id={id} />
		</li>
	);
};
