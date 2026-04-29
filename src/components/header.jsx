function Header({ pageType, setPageType, cart }) {
  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <header className="bg-white py-5 flex items-center justify-between px-20">
      
      <div className="flex items-center gap-10 flex-1">
        <div 
          onClick={() => setPageType('tv')}
          className="text-2xl font-bold text-black cursor-pointer"
        >
          TechStore
        </div>
        <nav className="flex items-center gap-8">
          <button 
            onClick={() => setPageType('tv')} 
            className={`transition-colors text-[17px] ${pageType === 'tv' ? 'text-black font-semibold' : 'text-gray-700 hover:text-black'}`}
          >
            TV
          </button>
          <button 
            onClick={() => setPageType('phone')} 
            className={`transition-colors text-[17px] ${pageType === 'phone' ? 'text-black font-semibold' : 'text-gray-700 hover:text-black'}`}
          >
            Phone
          </button>
          <button 
            onClick={() => setPageType('laptop')} 
            className={`transition-colors text-[17px] ${pageType === 'laptop' ? 'text-black font-semibold' : 'text-gray-700 hover:text-black'}`}
          >
            Laptop
          </button>
        </nav>
      </div>

      <nav className="flex items-center gap-6">
        <div 
          onClick={() => setPageType('cart')} 
          className="relative cursor-pointer hover:scale-110 transition-transform"
        >
          <img 
            src="/src/assets/cart.png" 
            alt="Cart" 
            className="w-9 h-9" 
          />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </div>
        <img 
          src="/src/assets/user.png" 
          alt="User" 
          className="w-9 h-9 cursor-pointer hover:scale-110 transition-transform" 
        />
      </nav>

    </header>
  );
}

export default Header;
