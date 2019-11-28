import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import MovieCard from './../../components/movieCard';
import MovieSearch from './../../components/movieSearch';
import HomeM from './Home'
import './Home.css'


class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
      favorites: [],
      mName: '',
      fav: false
    }
  }

  componentDidMount() {
    this.fetchMovie()

  } 
  

  fetchMovie(showType=0) {

    this.setState({ movies: [], fav: false})

    HomeM.fetchApi(showType, this.state.mName )
    .then((movies) => {

      this.setState(prevState => {
        return {
          movies : [...prevState.movies , ...movies]
        }
      })

    })

  }


  addToFavoriteList(favorites) {

    this.setState(prevState => {
          return {
            favorites : [...prevState.favorites , favorites]
          }
      })
  }

  removeFavFilm(movieId){

    this.setState(prevState => {
      return {
        favorites : prevState.favorites.filter(favorites => favorites.id !== movieId),
      }
    })
  }

  showFavoriteMovie(){
    this.setState({
       fav: true
    })
  }

  Search(event){

    this.setState({
      mName : event.target.value
    })

    if (this.state.mName.length >= 3)
      this.fetchMovie(2);
    else if ( this.state.mName.length === 2 )
      this.fetchMovie(0);

  }

  render() {

    const { movies, favorites } = this.state

    return (
      <div className= 'Home' >

          <div>
            <MovieSearch Search= {this.Search.bind(this)} 
                         fetchMovieID= {this.fetchMovie.bind(this)}
                         showFavoriteMovie= {this.showFavoriteMovie.bind(this)} 
                         mName= { this.state.mName }/>
          </div>
          
          <div >
            <InfiniteScroll
                    className="row justify-content-md-center"
                    pageStart={0}
                    loadMore= {()=>{}}
                    loader={<div className="loader">Loading ...</div>}
                >

                    {!this.state.fav?
                      movies.map((movie , index) => movie.id >0 ? 
                      <MovieCard  movie={ movie } favorites={ favorites } key={ index } 
                                  addToFavoriteList={ this.addToFavoriteList.bind(this) }
                                  removeFavFilm={ this.removeFavFilm.bind(this) }/>:null)
                    :
                      favorites.map((movie , index) => movie.id >0 ? 
                      <MovieCard  movie={ movie } favorites={ favorites } key={ index } 
                                  addToFavoriteList={ this.addToFavoriteList.bind(this) }
                                  removeFavFilm={ this.removeFavFilm.bind(this) }/>:null)
                    }

            </InfiniteScroll>
            
            {this.state.fav && !favorites.length?
                <h1 className= 'Home-noFav' >You have no movie in your favorites</h1>
                :null
            }

            {!this.state.fav && !movies.length?
                <div className= 'Home-noFav' />
                :null
            }

          </div>

      </div>
    )
  } // END render


  
}

export default Home;
