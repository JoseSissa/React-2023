import { Suspense, lazy } from 'react';

import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Page404 } from './pages/404';
import { Router } from './components/Router';
import { Route } from './components/Route';

const LazyAboutPage = lazy(() => import('./pages/About.jsx'))

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
      <Suspense fallback={null}>
        <Router routes={appRoutes} defaulComponent={Page404}>
          <Route path="/" component={Home} />
          <Route path="/about" component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App