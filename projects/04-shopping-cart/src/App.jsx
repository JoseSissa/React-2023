import { useState } from 'react'
import { products as initialProducts } from './mocks/products.json'
import { useFilters } from './hooks/useFilters'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { Footer } from './components/Footer'

function App() {
  const [products, setProducts] = useState(initialProducts)
  const { filters, filterProducts, setFilters } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      <Footer filters={filters} />
    </>
  )
}

export default App
