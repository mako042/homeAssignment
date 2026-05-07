import { useState, useEffect } from 'react'
import products from '../data/products'
import Filter from './filter'
import SpecialDeal from './specialDeal'
import Cards from './cards'

function ProductListing({ category, cart, setCart }) {
  const [filteredProducts, setFilteredProducts] = useState([])
  const [sortType, setSortType] = useState('low-to-high')
  const [filters, setFilters] = useState({
    brand: '',
    minPrice: '',
    maxPrice: 5000
  })

  useEffect(() => {
    let result = products.filter(p => p.category === category)
    
    if (filters.brand) {
      result = result.filter(p => p.brand === filters.brand)
    }
    
    if (filters.minPrice) {
      result = result.filter(p => p.price >= parseInt(filters.minPrice))
    }
    
    if (filters.maxPrice) {
      result = result.filter(p => p.price <= parseInt(filters.maxPrice))
    }

    if (sortType === 'low-to-high') {
      result.sort((a, b) => a.price - b.price)
    } else {
      result.sort((a, b) => b.price - a.price)
    }

    setFilteredProducts(result)
  }, [filters, sortType, category])

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters)
  }

  return (
    <main className="flex gap-4 px-8 py-4">
      <div className="flex flex-col gap-4">
        <Filter 
          category={category} 
          onApply={handleApplyFilters} 
          defaultFilters={filters}
        />
        <SpecialDeal />
      </div>
      <section className="flex-1">
        <div className="flex justify-between items-center mb-4 mx-6">
          <p>{filteredProducts.length} products</p>
          <div className="flex items-center gap-3">
            <p className="text-black font-medium">Sort by:</p>
            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              className="bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 text-gray-700 w-44"
            >
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>
        </div>
        <Cards products={filteredProducts} cart={cart} setCart={setCart} />
      </section>
    </main>
  )
}

export default ProductListing