import './App.css'


import { Movies } from './components/Movies/Movies'
import { useMovies } from './hooks/useMovies'



function App() {

  const { mappedMovies } = useMovies()

  return (
    <>
      <header>
        <h1>Buscador de Películas</h1>
        <form action="" className="form">
          <input type="text" placeholder="Avengers, Star Wars ..."/>
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </>
  )
}

export default App
