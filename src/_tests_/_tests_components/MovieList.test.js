
import React from 'react';
import { shallow } from 'enzyme';
import { MovieList } from '../../components/MovieList';
import { MovieItem } from '../../components/MovieItem';

const setUp = () => {
    const props = {
        movieItems: [
            {
                id: 299534,
                original_title: 'Avengers: Endgame',
                backdrop_path: 'TcMBFSGVi1c'
            },
            {
                id: 458156,
                original_title: 'john wick: chapter 3',
                backdrop_path: 'pU8-7BX9uxs'
            },
            {
                id: 475557,
                original_title: 'Joker',
                backdrop_path: 'jvmVaFHkk'
            }
        ],
        pending: false,
        error: false
    }
    const component = shallow(<MovieList {...props} />);
    return component;
}

describe('MovieList component', () => {
    let component;


    beforeEach(() => {
        component = setUp();
    })

    it('Should render MovieList without errors', () => {
        expect(component.find(`[test-attrib='movie-list']`).exists()).toBe(true);
    })

    it('Should render 3 MovieItems', () => {
        expect(component.find(MovieItem)).toHaveLength(3);

    })

    it('Should not render a Spinner', () => {
        expect(component.find('Spinner').exists()).toBe(false);
    })

    it('Should not render an ErrorSnackbar', () => {
        expect(component.find('ErrorSnackbar').exists()).toBe(false);
    })

    it('Should render only one Spinner when loading more items', () => {
        component.setProps({ pending: true });
        expect(component.find('Spinner')).toHaveLength(1);
    })

    it('Should render a Spinner when there are no movie items', () => {
        component.setProps({ movieItems: [] });
        expect(component.find(MovieItem)).toHaveLength(0);
    })

    it('Should render an ErrorSnackbar when error is true', () => {
        component.setProps({ error: true });
        expect(component.find('ErrorSnackbar')).toHaveLength(1);
    })

})