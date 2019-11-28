import React, { Component } from 'react';
import MovieCard from './../../components/MovieCard';
import InfiniteScroll from 'react-infinite-scroller';
import { Card } from 'react-bootstrap'
import './Home.css'

const apiKey = 'bf9a59578fcb278c84eca3877be1aed1'

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
    this.fetchMovieID()

  } 
  

  fetchMovieID(showType=0) {

    let url = ''
    if( showType === 0 ){
       url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
    }else if( showType === 1 ){
      url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`

    }else{
      url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${this.state.mName}`

    }

    this.fetchApi(url)
  }


  fetchApi(url) {
    
    this.setState({ movies: [], fav: false})

    fetch(url).then((res) => res.json()).then((data) => {
      
        data.results.forEach(element => {

            if( element.vote_count > 0 ){
              let movies = [ 
                {
                    id: element.id,
                    title: element.title,
                    release_date: element.release_date,
                    vote_average: element.vote_average,
                    vote_count: element.vote_count,
                    poster_path: 'https://image.tmdb.org/t/p/w500' + element.poster_path
                }
              ]
                  
              this.setState(prevState => {
                return {
                  movies : [...prevState.movies , ...movies]
                }
              })
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
      this.fetchMovieID(2);
    else if ( this.state.mName.length === 2 )
      this.fetchMovieID(0);

  }

  render() {

    const { movies, favorites } = this.state

    return (
      <div className= 'Home' >

        <div>
          <Card>
              <Card.Body>
                <div className="row">
                  
                  <input 
                    style={{ width:300, marginRight:10 }}
                    type="text" 
                    className={["form-control"]}
                    placeholder="Search movie name ..."
                    name="mName"
                    value={this.state.mName}
                    onChange={(e)=>this.Search(e)} />

                    <div >
                        <button className="btn btn-link" 
                            onClick={(e)=>{e.preventDefault(); this.fetchMovieID(0) }}
                        > New Film 
                        </button>

                        <button className="btn btn-link" 
                            onClick={(e)=>{e.preventDefault(); this.fetchMovieID(1) }}
                        > Top Film
                        </button>

                        <button className="btn btn-link" 
                            onClick={(e)=>{e.preventDefault(); this.showFavoriteMovie() }}
                        > Favorites
                        </button>
                    </div>
                </div>
              </Card.Body>
          </Card>
        </div>
          
          <div >
            <InfiniteScroll
                    className="row justify-content-md-center"
                    pageStart={0}
                    loader={<div className="loader">Loading ...</div>}
                >

                    {!this.state.fav?
                    movies.map((movie , index) =>movie.id>0? 
                    <MovieCard  movie={ movie } fav={ this.state.fav } key={ index } 
                                addToFavoriteList={ this.addToFavoriteList.bind(this) }
                                removeFavFilm={ this.removeFavFilm.bind(this) }/>:null)
                    :
                    favorites.map((movie , index) =>movie.id>0? 
                    <MovieCard  movie={ movie } fav={ this.state.fav } key={ index } 
                                addToFavoriteList={ this.addToFavoriteList.bind(this) }
                                removeFavFilm={ this.removeFavFilm.bind(this) }/>:null)}

            </InfiniteScroll>
            
          </div>

      </div>
    )
  } // END render


  
}

export default Home;
