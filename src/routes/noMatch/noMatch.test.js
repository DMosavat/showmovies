import React from 'react';
import { shallow } from 'enzyme';
import NoMatch from './index'

describe('noMatch Test', () => {

    describe('<NoMatch />', () => {

        it('should render the form', () => {
            const wrapper = shallow(<NoMatch />);
            expect(wrapper.html()).toMatchSnapshot();
        })
    
    })

})