import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { getItemCount } = useCart();
  const location = useLocation();
  const itemCount = getItemCount();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-3xl">🍔</span>
            <h1 className="text-2xl font-bold text-orange-600">FoodExpress</h1>
          </Link>
          
          <nav className="flex items-center space-x-6">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md transition-colors ${
                location.pathname === '/'
                  ? 'text-orange-600 font-semibold'
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              Restaurants
            </Link>
            <Link
              to="/orders"
              className={`px-3 py-2 rounded-md transition-colors ${
                location.pathname === '/orders'
                  ? 'text-orange-600 font-semibold'
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              My Orders
            </Link>
            <Link
              to="/cart"
              className="relative px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center space-x-2"
            >
              <span>🛒</span>
              <span>Cart</span>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

