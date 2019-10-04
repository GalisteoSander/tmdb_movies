import {
    BASE_URL_FOR_VIDEOS, PAGE_EQUALS, BASE_URL_FOR_DISCOVER, START_QUERY_AND_API_KEY, APPEND_TO_RESPONSE_VIDEOS, AND, BASE_URL_IMAGE, YOUTUBE_EMBED_URL, TRAILER
} from './constants';


export const constructUrlOfMovieImage = (imagePath) => {
    return `${BASE_URL_IMAGE}${imagePath}`;
}

export const constructUrlToAppendVideosToMovie = (movieId) => {
    return `${BASE_URL_FOR_VIDEOS}${movieId}${START_QUERY_AND_API_KEY}${AND}${APPEND_TO_RESPONSE_VIDEOS}`;
}

export const constructUrlsForDiscover = (currentPage, numberOfPagesToFetch) => {
    let urls = [...Array(numberOfPagesToFetch)].map((url, index) => {
        return `${BASE_URL_FOR_DISCOVER}${START_QUERY_AND_API_KEY}${AND}${PAGE_EQUALS}${currentPage + index}`
    });
    return urls;
}

export const constructUrlForVideoTrailer = (movieId) => {
    return `${YOUTUBE_EMBED_URL}${movieId}`;
}

export const selectRandomVideo = (videos) => {
    if (!videos)
        return null;
    return videos[Math.floor(Math.random() * videos.length)];
}

export const concatMoviePages = (moviePages) => {
    return [].concat(...(moviePages.map(page => page.results)));
}

export const filterMoviesByHasImageToDisplay = (movieItems) => {
    return movieItems.filter(movieItem => movieItem.backdrop_path !== null);
}

export const filterMovieVideosByItIsTrailer = (videos) => {
    return videos.filter(video => video.type.toLowerCase() === TRAILER)
}

export const getVideoKeys = (videos) => {
    return videos.map(video => video.key)
}
