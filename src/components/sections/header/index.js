import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

function Header(){

    return(
        <div className= 'Header' >
            <div className= 'row justify-content-md-center'>
                <div className = 'Header-nav' >
                    <ul className="row  mr-auto"  >
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="#">Favorites</Link>
                        <Link className="nav-link" to="#">About</Link>
                    </ul>
                </div>
            </div>

        </div>
    );

}

export default Header;