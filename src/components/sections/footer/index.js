import React from 'react';
import Card from 'react-bootstrap/Card'
import './Footer.css'

function Footer(){

    return(
        <div className= 'Footer'>
            <Card className="text-center">
                <Card.Footer className="text-muted">
                    <label className ='Footer-label' >© 2019 Show Movies App</label>
                </Card.Footer>
            </Card>
        </div>
    );

}

export default Footer;