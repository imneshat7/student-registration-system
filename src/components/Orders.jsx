import React from 'react';
import { useOrders } from '../context/OrderContext';
import { restaurants } from '../data/restaurants';

export default function Orders() {
  const { orders } = useOrders();

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'preparing':
        return 'bg-blue-100 text-blue-800';
      case 'on the way':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (orders.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">My Orders</h2>
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <span className="text-6xl mb-4 block">📦</span>
          <p className="text-gray-500 text-lg mb-6">You haven't placed any orders yet</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">My Orders</h2>
      
      <div className="space-y-6">
        {orders.map(order => {
          const restaurant = restaurants.find(r => r.id === order.restaurantId);
          const orderDate = new Date(order.date);
          
          return (
            <div key={order.id} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{restaurant?.image}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{order.restaurantName}</h3>
                    <p className="text-sm text-gray-500">
                      {orderDate.toLocaleDateString()} at {orderDate.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(order.status)}`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>

              <div className="border-t pt-4 mb-4">
                <div className="space-y-2 mb-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <span>{item.image}</span>
                        <span className="text-gray-700">
                          {item.name} × {item.quantity}
                        </span>
                      </div>
                      <span className="font-semibold text-gray-800">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-3 border-t">
                  <div>
                    <p className="text-sm text-gray-600">Delivery to:</p>
                    <p className="text-sm font-medium text-gray-800">
                      {order.deliveryInfo.address}, {order.deliveryInfo.city}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Total</p>
                    <p className="text-xl font-bold text-orange-600">${order.total.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

