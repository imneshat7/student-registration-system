# 🍔 FoodExpress - Food Delivery App

A modern, full-featured food delivery application built with React, Vite, and Tailwind CSS.

## Features

- 🏪 **Restaurant Listings** - Browse through multiple restaurants with different cuisines
- 🍕 **Menu Browsing** - View detailed menus for each restaurant
- 🛒 **Shopping Cart** - Add items to cart with quantity management
- 📦 **Order Management** - Track your order history
- 💳 **Checkout System** - Complete checkout with delivery information
- 🎨 **Beautiful UI** - Modern, responsive design with Tailwind CSS
- 💾 **Local Storage** - Cart and orders persist in browser storage

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Context API** - State management for cart and orders

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── RestaurantList.jsx
│   ├── RestaurantCard.jsx
│   ├── RestaurantDetail.jsx
│   ├── MenuItem.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   └── Orders.jsx
├── context/            # Context providers
│   ├── CartContext.jsx
│   └── OrderContext.jsx
├── data/              # Static data
│   └── restaurants.js
├── App.jsx            # Main app component with routing
└── main.jsx           # Entry point
```

## Features in Detail

### Restaurant Browsing
- Filter restaurants by cuisine type
- Search restaurants by name or cuisine
- View restaurant ratings, delivery time, and fees

### Shopping Cart
- Add/remove items
- Adjust quantities
- View cart total with delivery fees
- Items grouped by restaurant

### Order Management
- Complete checkout flow
- Order history tracking
- Order status display
- Delivery information management

## License

MIT
