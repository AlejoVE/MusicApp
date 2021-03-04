export const types = {
	SetToken: '[auth] get token',

	setCategories: '[categories] set lists of categories',
	getCategories: '[categories] get lists of categories',
	setActiveCategory: '[categories] set active category',

	getPlaylists: '[playlists] get lists of playlists',
	getSongs: '[playlists] get songs in playlist',
	setActivePlaylist: '[playlists] set active playlist',
	setPlaylists: '[playlists] set playlists',
	clearPlaylists: '[playlists] clear playlists',
	deactivateSelected: '[playlists] deactivate selected',

	setSongs: '[songs] set songs',
	setActiveSong: '[songs] set active song',
	songsIsLoading: '[songs] songs is loading',
	songsEndLoading: '[songs] songs finish loading',
	clearSongs: '[songs] clear songs',
};
