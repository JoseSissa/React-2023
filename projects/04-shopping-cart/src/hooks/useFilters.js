
import { useState } from "react"

export function useFilters () {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    });


  const filterProducts = (products) => {
    return products.filter(elem => {
      return (
        elem.price >= filters.minPrice && (
            // Si la categoría de el filtro es all entonces mostrará todos los productos que tengan como precio mínimo el minprice
            // En caso de que no, preguntará si la categoría del elem === a la categoría del filtro, entonces lo retorna (easy)
            filters.category === 'all' ||
            elem.category === filters.category
        )
      )
    })
  }

  return { filters, filterProducts, setFilters }
}
