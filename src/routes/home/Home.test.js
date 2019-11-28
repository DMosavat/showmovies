import React from 'react';
import { shallow } from 'enzyme';
import Home from './index'

const apiKey = 'bf9a59578fcb278c84eca3877be1aed1'

describe('<Home />', () => {

    it('should render the form', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.html()).toMatchSnapshot();
    })

})


describe('check themoviedb path' , () => {

    it('it should get discover movies' ,  done => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
        .then(() =>{
            done()
        })
        .catch((err) => {
            console.log(err);
        })

    })

    it('it should get top movies' ,  done => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
        .then(() =>{
            done()
        })
        .catch((err) => {
            console.log(err);
        })

    })

    it('it should can search movies' ,  done => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=jack`)
        .then(() =>{
            done()
        })
        .catch((err) => {
            console.log(err);
        })

    })


})