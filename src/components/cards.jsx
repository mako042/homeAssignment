import products from '../data/products';
import { useState, useEffect } from 'react';

const Card = ({ product }) => {
  const { brand, model, price, images, isSpecialOffer } = product;
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const currentImage = images && images.length > 0 ? images[currentIndex] : '';

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
      <div className="relative shrink-0" style={{ height: '60%' }}>
        {isSpecialOffer && (
          <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-4 py-1.5 rounded-md z-20 shadow-md">
            Special Offer
          </div>
        )}

        <div className="w-full h-full bg-gray-100 overflow-hidden relative">
          <img 
            src={currentImage}
            alt={`${brand} ${model}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {images && images.length > 1 && (
            <>
              {/* Левая стрелка */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-9 h-9 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 z-30"
              >
                ←
              </button>

              {/* Правая стрелка */}
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-9 h-9 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 z-30"
              >
                →
              </button>
            </>
          )}
        </div>
      </div>

      <div className="flex-1 flex flex-col p-6">
        <div className="text-sm text-gray-500 mb-1 text-left">{brand}</div>
        
        <h3 className="font-semibold text-[17px] leading-tight text-gray-900 mb-6 line-clamp-2 flex-1 text-left">
          {model}
        </h3>
        
        <div className="mt-auto">
          <div className="mb-6">
            <span className="text-3xl font-bold text-gray-900 tracking-tight">
              ${price.toLocaleString()}
            </span>
          </div>

          <button className="w-full bg-black hover:bg-gray-900 active:bg-black text-white font-medium py-3.5 rounded-xl transition-all duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  //для будущей итерации -- сортировка в зависимости от категории в ссылке
  // const [currentCategory, setCurrentCategory] = useState('');

  // useEffect(() => {
  //   const path = window.location.pathname;
  //   const categoryFromUrl = path.split('/')[1] || ''; // берём часть после первого /
  //   setCurrentCategory(categoryFromUrl);
  // }, []);

  // const filteredProducts = currentCategory 
  //   ? products.filter(product => product.category === currentCategory)
  //   : products;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {/* {filteredProducts.map((product) => ( */}
      {products.filter((product) => product.category === "tv").map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Cards;