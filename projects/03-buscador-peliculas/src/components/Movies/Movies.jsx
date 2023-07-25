function ListOfMovies ({ movies }) {
    return (
        <ul>
            {
                movies.map(elem => (
                    <li key={elem.id}>
                        <h3>{elem.title}</h3>
                        <p>{elem.year}</p>
                        <img src={elem.poster} alt={elem.title} />
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