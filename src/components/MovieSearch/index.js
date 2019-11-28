import React from 'react';
import { Card } from 'react-bootstrap'

import './MovieSearch.css'

function MovieSearch(props){
    
   let { Search, fetchMovieID, showFavoriteMovie, mName } = props

   return(
        <Card>
            <Card.Body>
            <div className="row">
                <input 
                type="text" 
                className={["MovieSearch-input"]}
                placeholder="Search movie name ..."
                name="mName"
                value={mName}
                onChange={(e)=>Search(e)} />

                <div >
                    <button className="btn btn-link" 
                        onClick={(e)=>{e.preventDefault(); fetchMovieID(0) }}
                    > New Film 
                    </button>

                    <button className="btn btn-link" 
                        onClick={(e)=>{e.preventDefault(); fetchMovieID(1) }}
                    > Top Film
                    </button>

                    <button className="btn btn-link" 
                        onClick={(e)=>{e.preventDefault(); showFavoriteMovie() }}
                    > Favorites
                    </button>
                </div>
            </div>

            </Card.Body>
        </Card>
   )
}

export default MovieSearch;
