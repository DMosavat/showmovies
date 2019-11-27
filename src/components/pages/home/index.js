
import React, { PureComponent } from 'react'
import { Carousel } from 'react-bootstrap'
import './Home.css'

class Home extends PureComponent{

    render(){
        return(
            <div className= 'Home'>
                <div className="row justify-content-md-center">
                    <Carousel >
                        <Carousel.Item>
                            <img
                            className="Home-img"
                            src="https://image.tmdb.org/t/p/w1000_and_h563_face/o7qi2v4uWQ8bZ1tW3KI0Ztn2epk.jpg"
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="Home-img"
                            src="https://image.tmdb.org/t/p/w1000_and_h563_face/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg"
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="Home-img"
                            src="https://image.tmdb.org/t/p/w500_and_h282_face/mzzHr6g1yvZ05Mc7hNj3tUdy2bM.jpg"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        )
    }
}

export default Home;