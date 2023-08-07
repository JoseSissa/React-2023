import { useState, useRef, useEffect } from 'react';
import './App.css'


import { Movies } from './components/Movies/Movies'
import { useMovies } from './hooks/useMovies.mjs'


function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInout = useRef(true)

  useEffect(() => {
    if(isFirstInout.current) {
      isFirstInout.current = search === ''
      return
    }
    if(search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if(search.match(/^d+$/)) {
      setError('No se puede buscar una película con número')
      return
    }
    if(search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search]);

  return { search, updateSearch, error }
}


function App() {

  const { mappedMovies } = useMovies()
  // const [query, setQuery] = useState('');
  const { search, updateSearch, error } = useSearch()

  // Hook que permite guardar valores para que persistan entre renderizaciones
  // const counter = useRef(0)
  // counter.current++
  // console.log(counter);
  // console.log(counter.current);

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(e);
  //   console.log(new window.FormData(e.target));
  //   console.log(Object.fromEntries(new window.FormData(e.target)));
  //   const { query } = Object.fromEntries(new window.FormData(e.target))
  // }

  const handleInput = (e) => {
    updateSearch(e.target.value)
  }

  return (
    <>
      <header>
        <h1>Buscador de Películas</h1>
        <form action="" className="form">
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }}
           value={search} onChange={handleInput} name='query' type="text" placeholder="Avengers, Star Wars ..."/>
          {
            error ? <p style={{color: 'red'}}>{error}</p> : ''
          }
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
