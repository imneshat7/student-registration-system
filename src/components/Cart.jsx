import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { restaurants } from '../data/restaurants';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h2>
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <span className="text-6xl mb-4 block">🛒</span>
          <p className="text-gray-500 text-lg mb-6">Your cart is empty</p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            Browse Restaurants
          </button>
        </div>
      </div>
    );
  }

  const totalPrice = getTotalPrice();
  const deliveryFee = items.length > 0 ? restaurants.find(r => r.id === items[0].restaurantId)?.deliveryFee || 0 : 0;
  const finalTotal = totalPrice + deliveryFee;

  const groupedItems = items.reduce((acc, item) => {
    const key = item.restaurantId;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {Object.entries(groupedItems).map(([restaurantId, restaurantItems]) => {
            const restaurant = restaurants.find(r => r.id === restaurantId);
            return (
              <div key={restaurantId} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center space-x-3 mb-4 pb-4 border-b">
                  <span className="text-3xl">{restaurant?.image}</span>
                  <h3 className="text-xl font-bold text-gray-800">{restaurant?.name}</h3>
                </div>
                {restaurantItems.map(item => (
                  <div key={`${item.id}-${item.restaurantId}`} className="flex items-center justify-between py-4 border-b last:border-b-0">
                    <div className="flex items-center space-x-4 flex-1">
                      <span className="text-3xl">{item.image}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{item.name}</h4>
                        <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.restaurantId, item.quantity - 1)}
                          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                        >
                          −
                        </button>
                        <span className="text-lg font-semibold w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.restaurantId, item.quantity + 1)}
                          className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <div className="text-right w-24">
                        <p className="font-semibold text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.restaurantId)}
                        className="text-red-500 hover:text-red-700 ml-2"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h3>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between text-xl font-bold text-gray-800">
                  <span>Total</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold mb-3"
            >
              Proceed to Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full py-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

