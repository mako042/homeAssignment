import products from '../data/products'

function Cart({ cart, setCart, setPageType }) {
  const cartItems = Object.entries(cart).map(([id, quantity]) => {
    const product = products.find(p => p.id === parseInt(id))
    return { ...product, quantity }
  })

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = (subtotal * 0.08).toFixed(2)
  const total = (parseFloat(subtotal) + parseFloat(tax)).toFixed(2)

  const formatPrice = (price) => {
    return '$' + price.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
  }

  const formatPriceWithCents = (price) => {
    return '$' + parseFloat(price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }

  const handlePlus = (id) => {
    setCart(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }))
  }

  const handleMinus = (id) => {
    setCart(prev => {
      const newQty = prev[id] - 1
      if (newQty <= 0) {
        const { [id]: _, ...rest } = prev
        return rest
      }
      return { ...prev, [id]: newQty }
    })
  }

  const handleRemove = (id) => {
    setCart(prev => {
      const { [id]: _, ...rest } = prev
      return rest
    })
  }

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <button 
          onClick={() => setPageType('tv')}
          className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="flex gap-8">
        <div className="flex-1">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center gap-6 py-6 border-b border-gray-200">
              <img src={item.images[0]} alt={item.model} className="w-24 h-24 object-cover rounded-lg" />
              
              <div className="flex-1">
                <p className="text-gray-500 text-sm">{item.brand}</p>
                <p className="font-medium text-lg">{item.model}</p>
              </div>

              <div className="flex items-center gap-4">
                <button 
                  onClick={() => handleMinus(item.id)}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100"
                >
                  −
                </button>
                <span className="w-8 text-center font-medium">{item.quantity}</span>
                <button 
                  onClick={() => handlePlus(item.id)}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100"
                >
                  +
                </button>
              </div>

              <p className="font-semibold w-24 text-right">{formatPrice(item.price * item.quantity)}</p>

              <button 
                onClick={() => handleRemove(item.id)}
                className="text-gray-400 hover:text-red-500"
              >
                🗑️
              </button>
            </div>
          ))}
        </div>

        <div className="w-80 bg-gray-50 p-6 rounded-xl h-fit">
          <h3 className="text-xl font-bold mb-6">Order Summary</h3>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium">{formatPriceWithCents(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (8%)</span>
              <span className="font-medium">{formatPriceWithCents(tax)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-gray-500">Calculated at checkout</span>
            </div>
            
            <div className="border-t border-gray-300 pt-3 mt-3">
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>{formatPriceWithCents(total)}</span>
              </div>
            </div>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors mb-3">
            Proceed to Checkout
          </button>
          
          <button 
            onClick={() => setPageType('tv')}
            className="w-full text-center text-gray-600 py-2 hover:text-black transition-colors"
          >
            Back to Shopping
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart