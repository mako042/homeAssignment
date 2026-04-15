const styles = {
  input: "w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 text-center",
}

const Filter = () => ( 
  <div className="w-70 h-90 origin-top-left border-2 border-black-400 rounded-xl p-6 bg-white shadow-sm">
    <h2 className="text-xl font-semibold mb-6">Filters</h2>
    {/* Brand */}
    <div className="mb-5">
      <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
        Brand
      </label>
      <div className="relative">
        <select
          className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 text-gray-700"
        >
          <option value="">All Brands</option>
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
            type="text"
            className={styles.input}
          />
          <p className="text-xs text-gray-500 mt-1 text-center">Min</p>
        </div>

        <div className="flex-1">
          <input
            type="text"
            className={styles.input}
          />
          <p className="text-xs text-gray-500 mt-1 text-center">Max</p>
        </div>
      </div>
    </div>

    {/* Apply Filters Button */}
    <button
      className="w-full bg-black hover:bg-gray-900 transition-colors text-white font-medium py-4 rounded-2xl text-base"
    >
      Apply Filters
    </button>
  </div>
)

export default Filter
