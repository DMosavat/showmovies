import React from 'react';
import { Card, ListGroupItem } from 'react-bootstrap'

import './MovieCard.css'

function MovieCard(props){
    
    let { movie, addToFavoriteList , removeFavFilm, favorites } = props

    let found = favorites.find(element => element.id === movie.id);
    let fav = false
    if ( found ){
      fav = true
    }

    return (

      <Card className= 'Card' >
        <Card.Img variant="top" src= { movie.poster_path } />
        <Card.Body style={{ height: '11rem' }}>
          <Card.Title className='Card-Title'>{movie.title}</Card.Title>
          <Card.Text className= 'Card-Text' >Release Date: {movie.release_date}</Card.Text>
          <Card.Text className= 'Card-Text' >Rate: {movie.vote_average}</Card.Text>
          <Card.Text className= 'Card-Text' >Vote Count: {movie.vote_count}</Card.Text>
        </Card.Body>
        <ListGroupItem>
          {
            fav === false?
            <button className="btn btn-link" style={{ fontSize:12}} onClick={()=> addToFavoriteList(movie) }>Add To Favorite list</button>
            :<button className="btn btn-link" style={{ fontSize:12}} onClick={()=> removeFavFilm(movie.id) }>Remove from Favorite</button>
            
          }
        </ListGroupItem>
      </Card>
     
    )
  
}


export default MovieCard;
