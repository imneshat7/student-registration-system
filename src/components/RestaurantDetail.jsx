import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { restaurants } from '../data/restaurants';
import MenuItem from './MenuItem';
import { useCart } from '../context/CartContext';

export default function RestaurantDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { items } = useCart();
  const restaurant = restaurants.find(r => r.id === id);

  if (!restaurant) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-gray-500 text-lg">Restaurant not found</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
        >
          Back to Restaurants
        </button>
      </div>
    );
  }

  const cartItemsFromThisRestaurant = items.filter(item => item.restaurantId === id);

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/')}
        className="mb-6 text-gray-600 hover:text-orange-600 flex items-center space-x-2"
      >
        <span>←</span>
        <span>Back to Restaurants</span>
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-8 text-white">
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-8xl">{restaurant.image}</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">{restaurant.name}</h1>
              <p className="text-orange-100 text-lg">{restaurant.cuisine}</p>
            </div>
          </div>
          <div className="flex items-center space-x-6 text-orange-100">
            <div className="flex items-center space-x-2">
              <span>⭐</span>
              <span className="font-semibold">{restaurant.rating}</span>
            </div>
            <span>•</span>
            <span>{restaurant.deliveryTime}</span>
            <span>•</span>
            <span>Delivery Fee: ${restaurant.deliveryFee}</span>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600">{restaurant.description}</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {restaurant.menu.map(item => (
            <MenuItem
              key={item.id}
              item={item}
              restaurantId={restaurant.id}
              restaurantName={restaurant.name}
            />
          ))}
        </div>
      </div>

      {cartItemsFromThisRestaurant.length > 0 && (
        <div className="fixed bottom-4 right-4">
          <button
            onClick={() => navigate('/cart')}
            className="bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-700 transition-colors flex items-center space-x-2"
          >
            <span>🛒</span>
            <span>View Cart ({cartItemsFromThisRestaurant.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
          </button>
        </div>
      )}
    </div>
  );
}

