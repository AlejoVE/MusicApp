import React from 'react';
import { getAuthToken } from './helpers/getToken';

export const MusicApp = () => {
	getAuthToken();
	return (
		<div>
			<h1>My App</h1>
		</div>
	);
};
