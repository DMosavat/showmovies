import React from 'react';


function NoMatch (){
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundImage='url(https://image.tmdb.org/t/p/w1000_and_h563_face/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg)' 

    return(
        <main style={{ height:window.innerHeight }}>
            <div className="container" style={{marginTop:150}}>
                <div className="row" >
                    <div className="col-8"   >
                         <a href='/' style={{ color: '#FFF'}}> Home </a>
                        <h1>Page not found!</h1>
                    </div>
                </div>
            </div>
        </main>
    );
    
}

export default NoMatch;