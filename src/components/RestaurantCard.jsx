import React from 'react';
import { Link } from 'react-router-dom';

export default function RestaurantCard({ restaurant }) {
  return (
    <Link
      to={`/restaurant/${restaurant.id}`}
      className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
    >
      <div className="relative h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
        <span className="text-8xl group-hover:scale-110 transition-transform">
          {restaurant.image}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-800">{restaurant.name}</h3>
          <div className="flex items-center space-x-1 bg-yellow-100 px-2 py-1 rounded-full">
            <span className="text-yellow-600">⭐</span>
            <span className="text-sm font-semibold text-yellow-700">{restaurant.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-3">{restaurant.cuisine} • {restaurant.deliveryTime}</p>
        <p className="text-gray-500 text-sm mb-3">{restaurant.description}</p>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Delivery Fee: ${restaurant.deliveryFee}</span>
          <span className="text-orange-600 font-semibold">Order Now →</span>
        </div>
      </div>
    </Link>
  );
}

