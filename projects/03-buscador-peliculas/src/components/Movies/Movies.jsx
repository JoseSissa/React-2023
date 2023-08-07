function ListOfMovies ({ movies }) {
    return (
        <ul className="movies">
            {
                movies.map(elem => (
                    <li className="movie" key={elem.id}>
                        <h3>{elem.title}</h3>
                        <p>{elem.year}</p>
                        <img src={elem.image} alt={elem.title} />
                    </li>
                ))
            }
        </ul>
    )
}

function NoMobiesResult () {
    return (
        <p>No se encontraron películas para esta búsqueda</p>
    )
}

export function Movies ({ movies }) {
    const hasMovies = movies?.length > 0

    return (
        hasMovies 
            ? <ListOfMovies movies={movies} />
            : <NoMobiesResult />
    )
}