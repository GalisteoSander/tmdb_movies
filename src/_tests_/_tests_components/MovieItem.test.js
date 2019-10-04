import React from 'react';
import { shallow } from 'enzyme';
import { MovieItem } from '../../components/MovieItem';
import { Card, Typography } from "@material-ui/core";

const setUp = () => {
    const props = {
        index: 1,
        movieTitle: 'ohWhatAmovie',
        movieImageUrl: '/imageUrlAsd'
    }
    const component = shallow(<MovieItem {...props} />);
    return component;
}


describe('MovieItem Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    })

    it('Should render MovieItem without errors', () => {
        expect(component.find('Link').exists()).toBe(true);
    })

    it('Should render a Card subComponent', () => {
        expect(component.find(Card).exists()).toBe(true);

    })

    it('Should render a Typography subComponent', () => {

        expect(component.find(Typography).exists()).toBe(true);

    })

    it('children of Typography movie title subComponent should match movieTitle prop', () => {

        expect(component.find(Typography).dive().prop('children')).toBe('ohWhatAmovie');

    })

    it('Should render an img subComponent', () => {
        expect(component.find('img').exists()).toBe(true);

    })

    it('src of image component should be movieImageUrl prop', () => {
        expect(component.find('img').prop('src')).toBe('/imageUrlAsd');
    })



})