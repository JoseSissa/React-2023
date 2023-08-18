import { products as initialProducts } from './mocks/products.json'
import { useFilters } from './hooks/useFilters'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { Footer } from './components/Footer'

function App() {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}

export default App
