export const restaurants = [
  {
    id: '1',
    name: 'Pizza Palace',
    cuisine: 'Italian',
    rating: 4.8,
    deliveryTime: '25-35 min',
    deliveryFee: 2.99,
    image: '🍕',
    description: 'Authentic Italian pizzas with fresh ingredients',
    menu: [
      { id: '1', name: 'Margherita Pizza', price: 12.99, description: 'Fresh mozzarella, tomato sauce, basil', image: '🍕' },
      { id: '2', name: 'Pepperoni Pizza', price: 14.99, description: 'Pepperoni, mozzarella, tomato sauce', image: '🍕' },
      { id: '3', name: 'Vegetarian Pizza', price: 13.99, description: 'Mixed vegetables, mozzarella, tomato sauce', image: '🍕' },
      { id: '4', name: 'Hawaiian Pizza', price: 15.99, description: 'Ham, pineapple, mozzarella, tomato sauce', image: '🍕' },
      { id: '5', name: 'Garlic Bread', price: 4.99, description: 'Fresh baked garlic bread', image: '🍞' },
      { id: '6', name: 'Caesar Salad', price: 8.99, description: 'Fresh romaine, parmesan, caesar dressing', image: '🥗' }
    ]
  },
  {
    id: '2',
    name: 'Burger House',
    cuisine: 'American',
    rating: 4.6,
    deliveryTime: '20-30 min',
    deliveryFee: 1.99,
    image: '🍔',
    description: 'Juicy burgers and crispy fries',
    menu: [
      { id: '1', name: 'Classic Burger', price: 9.99, description: 'Beef patty, lettuce, tomato, onion, pickles', image: '🍔' },
      { id: '2', name: 'Cheeseburger', price: 10.99, description: 'Beef patty, cheese, lettuce, tomato, special sauce', image: '🍔' },
      { id: '3', name: 'Bacon Burger', price: 12.99, description: 'Beef patty, bacon, cheese, lettuce, tomato', image: '🍔' },
      { id: '4', name: 'Chicken Burger', price: 11.99, description: 'Grilled chicken, lettuce, tomato, mayo', image: '🍔' },
      { id: '5', name: 'French Fries', price: 3.99, description: 'Crispy golden fries', image: '🍟' },
      { id: '6', name: 'Onion Rings', price: 4.99, description: 'Crispy battered onion rings', image: '🍟' }
    ]
  },
  {
    id: '3',
    name: 'Sushi Express',
    cuisine: 'Japanese',
    rating: 4.9,
    deliveryTime: '30-40 min',
    deliveryFee: 3.99,
    image: '🍣',
    description: 'Fresh sushi and Japanese cuisine',
    menu: [
      { id: '1', name: 'Salmon Sushi Roll', price: 8.99, description: 'Fresh salmon, rice, nori', image: '🍣' },
      { id: '2', name: 'Tuna Sushi Roll', price: 9.99, description: 'Fresh tuna, rice, nori', image: '🍣' },
      { id: '3', name: 'California Roll', price: 7.99, description: 'Crab, avocado, cucumber', image: '🍣' },
      { id: '4', name: 'Dragon Roll', price: 12.99, description: 'Eel, avocado, cucumber, eel sauce', image: '🍣' },
      { id: '5', name: 'Miso Soup', price: 3.99, description: 'Traditional miso soup', image: '🍲' },
      { id: '6', name: 'Edamame', price: 4.99, description: 'Steamed soybeans', image: '🫘' }
    ]
  },
  {
    id: '4',
    name: 'Taco Fiesta',
    cuisine: 'Mexican',
    rating: 4.7,
    deliveryTime: '25-35 min',
    deliveryFee: 2.49,
    image: '🌮',
    description: 'Authentic Mexican tacos and burritos',
    menu: [
      { id: '1', name: 'Beef Tacos (3pc)', price: 10.99, description: 'Seasoned beef, lettuce, cheese, salsa', image: '🌮' },
      { id: '2', name: 'Chicken Tacos (3pc)', price: 10.99, description: 'Grilled chicken, lettuce, cheese, salsa', image: '🌮' },
      { id: '3', name: 'Vegetarian Tacos (3pc)', price: 9.99, description: 'Black beans, rice, lettuce, cheese, salsa', image: '🌮' },
      { id: '4', name: 'Beef Burrito', price: 11.99, description: 'Seasoned beef, rice, beans, cheese, salsa', image: '🌯' },
      { id: '5', name: 'Chicken Burrito', price: 11.99, description: 'Grilled chicken, rice, beans, cheese, salsa', image: '🌯' },
      { id: '6', name: 'Guacamole', price: 5.99, description: 'Fresh avocado dip', image: '🥑' }
    ]
  },
  {
    id: '5',
    name: 'Curry Corner',
    cuisine: 'Indian',
    rating: 4.8,
    deliveryTime: '30-40 min',
    deliveryFee: 2.99,
    image: '🍛',
    description: 'Spicy Indian curries and naan bread',
    menu: [
      { id: '1', name: 'Butter Chicken', price: 14.99, description: 'Creamy tomato curry with chicken', image: '🍛' },
      { id: '2', name: 'Chicken Tikka Masala', price: 14.99, description: 'Spicy tomato curry with grilled chicken', image: '🍛' },
      { id: '3', name: 'Vegetable Curry', price: 12.99, description: 'Mixed vegetables in curry sauce', image: '🍛' },
      { id: '4', name: 'Lamb Curry', price: 16.99, description: 'Tender lamb in spicy curry', image: '🍛' },
      { id: '5', name: 'Naan Bread', price: 3.99, description: 'Fresh baked naan', image: '🫓' },
      { id: '6', name: 'Basmati Rice', price: 4.99, description: 'Fragrant basmati rice', image: '🍚' }
    ]
  },
  {
    id: '6',
    name: 'Noodle Bar',
    cuisine: 'Asian',
    rating: 4.5,
    deliveryTime: '20-30 min',
    deliveryFee: 2.49,
    image: '🍜',
    description: 'Fresh noodles and Asian specialties',
    menu: [
      { id: '1', name: 'Chicken Pad Thai', price: 12.99, description: 'Stir-fried noodles with chicken', image: '🍜' },
      { id: '2', name: 'Beef Ramen', price: 13.99, description: 'Rich broth with beef and noodles', image: '🍜' },
      { id: '3', name: 'Vegetable Lo Mein', price: 11.99, description: 'Stir-fried noodles with vegetables', image: '🍜' },
      { id: '4', name: 'Shrimp Fried Rice', price: 13.99, description: 'Fried rice with shrimp and vegetables', image: '🍚' },
      { id: '5', name: 'Spring Rolls (4pc)', price: 5.99, description: 'Crispy vegetable spring rolls', image: '🥟' },
      { id: '6', name: 'Wonton Soup', price: 6.99, description: 'Pork wontons in broth', image: '🍲' }
    ]
  }
];

