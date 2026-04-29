import { useState, useEffect } from 'react'
import products from '../data/products'

const styles = {
  input: "w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 text-center",
}

const Filter = ({ category, onApply, defaultFilters }) => {
  const [brand, setBrand] = useState(defaultFilters.brand || '')
  const [minPrice, setMinPrice] = useState(defaultFilters.minPrice || '')
  const [maxPrice, setMaxPrice] = useState(defaultFilters.maxPrice || 5000)

  const brands = [...new Set(products.filter(p => p.category === category).map(p => p.brand))]

  useEffect(() => {
    setBrand('')
    setMinPrice('')
    setMaxPrice(5000)
  }, [category])

  const handleApply = () => {
    onApply({ brand, minPrice, maxPrice })
  }

  return (
    <div className="w-70 h-90 origin-top-left border-2 border-black-400 rounded-xl p-6 bg-white shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Filters</h2>
      {/* Brand */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
          Brand
        </label>
        <div className="relative">
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 text-gray-700"
          >
            <option value="">All Brands</option>
            {brands.map(b => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
          Price Range
        </label>
        <div className="flex gap-3">
          <div className="flex-1">
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className={styles.input}
              placeholder="Min"
            />
            <p className="text-xs text-gray-500 mt-1 text-center">Min</p>
          </div>

          <div className="flex-1">
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className={styles.input}
              placeholder="Max"
            />
            <p className="text-xs text-gray-500 mt-1 text-center">Max</p>
          </div>
        </div>
      </div>

      {/* Apply Filters Button */}
      <button
        onClick={handleApply}
        className="w-full bg-black hover:bg-gray-900 transition-colors text-white font-medium py-4 rounded-2xl text-base"
      >
        Apply Filters
      </button>
    </div>
  )
}

export default Filter
