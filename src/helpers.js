import {
    BASE_URL_FOR_VIDEOS, PAGE_EQUALS, BASE_URL_FOR_DISCOVER, START_QUERY_AND_API_KEY, APPEND_TO_RESPONSE_VIDEOS, AND, BASE_URL_IMAGE, TRAILER
} from './constants';

export const constructImageUrl = (imagePath) => {
    return `${BASE_URL_IMAGE}${imagePath}`;
}

export const constructUrlToAppendVideos = (movieId) => {
    return `${BASE_URL_FOR_VIDEOS}${movieId}${START_QUERY_AND_API_KEY}${AND}${APPEND_TO_RESPONSE_VIDEOS}`;
}

export const constructUrlsForDiscover = (currentPage, numberOfPagesToFetch) => {
    let urls = [...Array(numberOfPagesToFetch)].map((url, index) => {
        return `${BASE_URL_FOR_DISCOVER}${START_QUERY_AND_API_KEY}${AND}${PAGE_EQUALS}${currentPage + index}`
    });
    return urls;
}

export const selectRandomVideo = (videos) => {
    return videos[Math.floor(Math.random() * videos.length)];
}

export const concatMoviePages = (moviePages) => {
    return [].concat(...(moviePages.map(page => page.results)));
}

export const filterByHasImageToDisplay = (movieItems) => {
    return movieItems.filter(movieItem => movieItem.backdrop_path !== null);
}

export const filterByTrailers = (videos) => {
    return videos.filter(video => video.type.toLowerCase() === TRAILER)
}

export const getVideoKeys = (videos) => {
    return videos.map(video => video.key)
}

