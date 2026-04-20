function Header() {
  return (
    <header className="bg-white py-5 flex items-center justify-between px-20">
      
      <div className="flex items-center gap-10 flex-1">
        <a href="/tv">
          <div className="text-2xl font-bold text-black">
            TechStore
          </div>
        </a>
        <nav className="flex items-center gap-8">
          <a href="/tv" className="text-gray-700 hover:text-black transition-colors text-[17px]">
            TV
          </a>
          <a href="/phone" className="text-gray-700 hover:text-black transition-colors text-[17px]">
            Phone
          </a>
          <a href="/laptop" className="text-gray-700 hover:text-black transition-colors text-[17px]">
            Laptop
          </a>
        </nav>
      </div>

      <nav className="flex items-center gap-6">
        <img 
          src="/src/assets/cart.png" 
          alt="Cart" 
          className="w-9 h-9 cursor-pointer hover:scale-110 transition-transform" 
        />
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