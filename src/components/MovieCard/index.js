import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

function MovieCard(props){
    
    let { movie, fav, addToFavoriteList , removeFavFilm } = props

    return (
      
      <Card style={{ width: '15rem', margin:5, backgroundColor:'#F2F2F2' }}>
        <Card.Img variant="top" src= { movie.poster_path } />
        <Card.Body style={{ height: '12rem' }}>
          <Card.Title style={{ fontSize:16}}>{movie.title}</Card.Title>
          <Card.Text style={{ fontSize:14}}>Release Date: {movie.release_date}</Card.Text>
          <Card.Text style={{ fontSize:14}}>Rate: {movie.vote_average}</Card.Text>
          <Card.Text style={{ fontSize:14}}>Vote Count: {movie.vote_count}</Card.Text>
        </Card.Body>
        <ListGroupItem>
          {
            fav === false?
            <button className="btn btn-link" style={{ fontSize:12}} onClick={()=> addToFavoriteList(movie) }>Add Favorite list</button>
            :<button className="btn btn-link" style={{ fontSize:12}} onClick={()=> removeFavFilm(movie.id) }>Remove</button>
            
          }
        </ListGroupItem>
      </Card>
     
    )
  
}


export default MovieCard;
