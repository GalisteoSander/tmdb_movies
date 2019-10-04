import React from 'react';
import * as helpers from './../../helpers';


let videos = [
    { id: '123', key: 'AZK98', site: 'reddit.com', size: '99', type: 'teaser' },
    { id: '456', key: 'ERT98', site: 'aa.ee', size: '1256', type: 'TRAILER' },
    { id: '123', key: 'GH986', site: 'asqe.jej', size: '1686', type: 'TRAILER' }];


let movies = [
    { id: '231', original_title: 'star wars: episode IV', backdrop_path: 'overThere' },
    { id: '65', original_title: 'the irishman', backdrop_path: null },
    { id: '007', original_title: 'it 2 ', backdrop_path: 'overHere' }];


describe('helper functions', () => {

    it(`concatMoviePages should return the results of the n page objects it receives after 
    concatenating them`, () => {
        let moviePages = [
            {
                page: 1,
                total_pages: 500,
                results: [{ movieTitle: 'movie1' }, { movieTitle: 'movie2' }]
            },
            {
                page: 2,
                total_pages: 500,
                results: [{ movieTitle: 'movie4' }, { movieTitle: 'movie5' }]
            }
        ]
        expect(helpers.concatMoviePages(moviePages)).toHaveLength(4);
    });

    it(`filterMoviesByHasImageToDisplay should return the received array of movie objects
    with only those that have a !==null  backdrop_path`, () => {
        expect(helpers.filterMoviesByHasImageToDisplay(movies)).toHaveLength(2);
    });


    it(`filterMovieVideosByItIsTrailer should return the received array 
    with only those videos that have a type property of 'video' ignoring case`, () => {
        expect(helpers.filterMovieVideosByItIsTrailer(videos)).toHaveLength(2);
    });


    it(`getVideoKeys should map an iterable returning an array with only the values corresponding to the" 
      'key' property of each item"`, () => {

        expect(helpers.getVideoKeys(videos)).toEqual([
            'AZK98', 'ERT98', 'GH986'
        ]);
    })

})



