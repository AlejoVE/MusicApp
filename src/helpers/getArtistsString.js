export const getArtistsString = (artists) => {
	const myArtistsArray = [];

	artists.forEach((artist) => myArtistsArray.push(artist.name));
	const artistsString = myArtistsArray.join(', ');
	return artistsString;
};
