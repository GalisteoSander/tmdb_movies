import React from 'react';
import { MovieListContainer } from '../../containers/MovieListContainer';
import { shallow } from 'enzyme';


const setUp = () => {
  const fetchMoviesfn = jest.fn();
  const props = {
    fetchMovies: fetchMoviesfn,
    movieItems: [],
    currentPage: 1,
    scrolling: false,
    pending: false,
    error: false
  }
  const component = shallow(<MovieListContainer fetchMovies={fetchMoviesfn} {...props} />);
  return component;
}

describe('MovieListContainer', () => {
  let component;

  const fetchMoviesfn = jest.fn();

  beforeEach(() => {
    component = setUp()
  })

  it('Should render MovieList without errors', () => {
    expect(component.find('MovieList').exists()).toBe(true);
  })

})
