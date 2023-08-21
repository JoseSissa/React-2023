import { Home } from './pages/Home';
import { About } from './pages/About';
import { Router } from './components/Router';
import { Search } from './pages/Search';

const appRoutes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/search/:query',
    component: Search
  }
]

function App() {

  return (
    <main>
      <h1>Router</h1>
      <Router routes={appRoutes}
      />
    </main>
  )
}

export default App