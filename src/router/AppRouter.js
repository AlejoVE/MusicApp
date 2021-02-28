import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainScreen } from '../components/MainScreen';
import { PlaylistsScreen } from '../components/PlaylistsScreen';

export const AppRouter = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path='/main' component={MainScreen} />
					<Route
						exact
						path='/playlists/:name'
						component={PlaylistsScreen}
					/>
					<Route exact path='/' component={MainScreen} />
				</Switch>
			</div>
		</Router>
	);
};
