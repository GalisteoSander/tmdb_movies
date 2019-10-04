
import React from 'react';
import { shallow } from 'enzyme';
import { MovieTrailer } from '../../components/MovieTrailer';


const setUp = () => {
    const props = {
        trailerUrl: 'aTrailerUrl',
        error: false
    }
    const component = shallow(<MovieTrailer {...props} />);
    return component;
}

describe('MovieTrailer component', () => {
    let component;

    beforeEach(() => {
        component = setUp();
    })

    it('Should render MovieTrailer without errors', () => {
        expect(component.find(`[test-attrib='movie-trailer']`).exists()).toBe(true);
    })

    it('Should render a Link component', () => {
        expect(component.find('Link')).toHaveLength(1);
    })

    it('Should render an iframe element', () => {
        expect(component.find('iframe')).toHaveLength(1);
    })

    it('src of iframe should math "trailerUrl" prop', () => {
        expect(component.find('iframe').prop('src')).toBe('aTrailerUrl');
    })

    it('Should not render an ErrorSnackbar', () => {
        expect(component.find('ErrorSnackbar').exists()).toBe(false);
    })

    it('Should render an ErrorSnackbar when error is true', () => {
        component.setProps({ error: true });
        expect(component.find('ErrorSnackbar')).toHaveLength(1);
    })
})