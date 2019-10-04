import React from 'react';
import { MovieTrailerContainer } from '../../containers/MovieTrailerContainer';
import { shallow } from 'enzyme';


const setUp = () => {
    const dispatch = jest.fn();
    const props = {
        match: {
            params: 1234
        },
        dispatch: dispatch,
        keys: ['123aA'],
        error: null,
        pending: false

    }
    const component = shallow(<MovieTrailerContainer {...props} />);
    return component;
}

describe('MovieTrailerContainer', () => {
    let component;

    beforeEach(() => {
        component = setUp()
    })

    it('Should render MovieTrailer without errors', () => {
        expect(component.find('MovieTrailer').exists()).toBe(true);
    })

    it('Should not render Spinner component', () => {
        expect(component.find('Spinner').exists()).toBe(false);
    })

    it('Should render Spinner component when pending is true', () => {
        component.setProps({ pending: true });
        expect(component.find('Spinner').exists()).toBe(true);
    })
})
