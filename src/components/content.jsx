function Content() {
  //tailwindcss styles
  const styles = {
    main: "flex gap-4 px-8 py-4",
    filter: "w-64 h-64 flex-shrink-0 border border-black p-4",
    content: "flex-1",
  };

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
            className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <option value="">All Brands</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
            ▼
          </div>
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
              className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1 text-center">Min</p>
          </div>

          <div className="flex-1">
            <input
              type="text"
              className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
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

  const SpecialDeal = () => (
  <div className="bg-[#ef4444] text-white rounded-2xl p-4 max-w-sm shadow-md relative">
    <button className="absolute top-3 right-3 text-white hover:text-gray-200 transition-colors">
      ✕
    </button>

    <div className="flex items-center gap-2 mb-3">
      <div className="bg-white text-[#ef4444] text-xs font-bold px-3 py-1 rounded-full">
        Special Deal!
      </div>
    </div>

    <h3 className="text-lg font-semibold mb-1">
      Register now to unlock
    </h3>
    <p className="text-white/90 text-[15px] leading-snug mb-4">
      exclusive offers and discounts
    </p>

    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-between">
      <div className="text-center">
        <div className="text-2xl font-bold">06</div>
        <div className="text-xs text-white/70 -mt-1">hours</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold">53</div>
        <div className="text-xs text-white/70 -mt-1">minutes</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold">08</div>
        <div className="text-xs text-white/70 -mt-1">seconds</div>
      </div>
    </div>

    <p className="text-center text-xs text-white/75 mt-3">
      Offer expires in: <span className="font-medium">6:53:08</span>
    </p>
  </div>
  )

  return (
    <main className={styles.main}>
      <div className="flex flex-col gap-4">
        <Filter />
        <SpecialDeal />
      </div>
      <section className={styles.content}>
        <h1>Welcome to TechStore</h1>
        <p>Discover the latest electronics at great prices.</p>
      </section>
    </main>
  );
}

export default Content;
