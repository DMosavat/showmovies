
import React from 'react'
import { Carousel } from 'react-bootstrap'
import './slideShow.css'

function slideShow(){

    return(
        <Carousel >
            <Carousel.Item>
                <img
                className="slideShow-img"
                src="https://image.tmdb.org/t/p/w1000_and_h563_face/o7qi2v4uWQ8bZ1tW3KI0Ztn2epk.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="slideShow-img"
                src="https://image.tmdb.org/t/p/w1000_and_h563_face/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="slideShow-img"
                src="https://image.tmdb.org/t/p/w500_and_h282_face/mzzHr6g1yvZ05Mc7hNj3tUdy2bM.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>

    )
    
}

export default slideShow;