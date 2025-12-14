import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function MenuItem({ item, restaurantId, restaurantName }) {
  const { addToCart, items, updateQuantity } = useCart();
  const [quantity, setQuantity] = useState(0);

  const cartItem = items.find(
    i => i.id === item.id && i.restaurantId === restaurantId
  );
  const currentQuantity = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    addToCart({ ...item, restaurantName }, restaurantId);
  };

  const handleIncrement = () => {
    if (currentQuantity === 0) {
      handleAddToCart();
    } else {
      updateQuantity(item.id, restaurantId, currentQuantity + 1);
    }
  };

  const handleDecrement = () => {
    if (currentQuantity > 1) {
      updateQuantity(item.id, restaurantId, currentQuantity - 1);
    } else {
      updateQuantity(item.id, restaurantId, 0);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        <div className="text-5xl flex-shrink-0">{item.image}</div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-1">{item.name}</h3>
          <p className="text-gray-600 text-sm mb-3">{item.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-orange-600">${item.price.toFixed(2)}</span>
            {currentQuantity === 0 ? (
              <button
                onClick={handleAddToCart}
                className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
                Add to Cart
              </button>
            ) : (
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleDecrement}
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  −
                </button>
                <span className="text-lg font-semibold w-8 text-center">{currentQuantity}</span>
                <button
                  onClick={handleIncrement}
                  className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

