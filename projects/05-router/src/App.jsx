import { Home } from './pages/Home';
import { About } from './pages/About';
import { Router } from './components/Router';
import { Search } from './pages/Search';
import { Route } from './components/Route';

const appRoutes = [
  {
    path: '/search/:query',
    component: Search
  }
]

function App() {

  return (
    <main>
      <h1>Router</h1>
      <Router routes={appRoutes} >
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Router>
    </main>
  )
}

export default App