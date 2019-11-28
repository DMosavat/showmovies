import React from 'react';
import { shallow } from 'enzyme';
import MovieSearch from './index'

describe('MovieSearch Test', () => {

    describe('<MovieSearch />', () => {

        it('should render the form', () => {
            const wrapper = shallow(<MovieSearch />);
            expect(wrapper.html()).toMatchSnapshot();
        })
    
    })
})