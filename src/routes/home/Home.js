
const apiKey = 'bf9a59578fcb278c84eca3877be1aed1'

export default {

    fetchApi(showType=0, mName= '') {

        return new Promise((resolve) => {

            let url = ''
            if( showType === 0 ){
                url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
            }else if( showType === 1 ){
                url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
        
            }else{
                url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${mName}`
        
            }

            let moviesTemp = []

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
                            
                        moviesTemp = [...moviesTemp, ...movies]
                    }
                })

            }).then(() => {
                resolve(moviesTemp)

            })
        })

    }
}



    
    
