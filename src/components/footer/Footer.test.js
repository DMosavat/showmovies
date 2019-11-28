import React from 'react';
import { shallow } from 'enzyme';
import Footer from './index'

describe('Footer Test', () => {

    describe('<Footer />', () => {

        it('should render the form', () => {
            const wrapper = shallow(<Footer />);
            expect(wrapper.html()).toMatchSnapshot();
        })
    
    })
})