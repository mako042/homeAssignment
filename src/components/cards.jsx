import products from '../data/products';

const Card = ({ product }) => {
  const { brand, model, price, images, isSpecialOffer } = product;
  
  const mainImage = images && images.length > 0 ? images[0] : '';

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
      
      {/* Image Container - 60% высоты карточки */}
      <div className="relative shrink-0" style={{ height: '60%' }}>
        {isSpecialOffer && (
          <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-4 py-1.5 rounded-md z-20 shadow-md">
            Special Offer
          </div>
        )}

        <div className="w-full h-full bg-gray-100 overflow-hidden">
          <img 
            src={mainImage}
            alt={`${brand} ${model}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col p-6">
        
        <div className="text-sm text-gray-500 mb-1">{brand}</div>
        
        <h3 className="font-semibold text-[17px] leading-tight text-gray-900 mb-6 line-clamp-2 flex-1">
          {model}
        </h3>

        {/* Price + Button */}
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
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Cards;