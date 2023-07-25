import './App.css'


import { Movies } from './components/Movies/Movies'
import { useMovies } from './hooks/useMovies'



function App() {

  const { mappedMovies } = useMovies()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e);
    console.log(new window.FormData(e.target));
    console.log(Object.fromEntries(new window.FormData(e.target)));
    const { query } = Object.fromEntries(new window.FormData(e.target))
  }

  return (
    <>
      <header>
        <h1>Buscador de Películas</h1>
        <form action="" className="form" onSubmit={handleSubmit}>
          <input name='query' type="text" placeholder="Avengers, Star Wars ..."/>
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
