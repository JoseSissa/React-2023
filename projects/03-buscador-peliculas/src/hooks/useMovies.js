import responseMovies from '../mocks/with-results.json'

export function useMovies () {
    const movies = responseMovies.Search
    
    const mappedMovies = movies?.map((elem) => (
      {
        id: elem.imdbID,
        title: elem.Title,
        year: elem.Year,
        image: elem.Poster
      }
    ))
  
    return { mappedMovies }
  }