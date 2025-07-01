import { Dish } from '../types';

export const dishes: Dish[] = [
  // Appetizers
  {
    id: 'app-1',
    name: 'Truffle Arancini',
    description: 'Crispy risotto balls filled with truffle and parmesan, served with marinara sauce',
    price: 14.99,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'appetizers',
    rating: 4.8,
    prepTime: '15 mins',
    vegetarian: true
  },
  {
    id: 'app-2',
    name: 'Pan-Seared Scallops',
    description: 'Fresh Atlantic scallops with cauliflower purée and crispy pancetta',
    price: 18.99,
    image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'appetizers',
    rating: 4.9,
    prepTime: '12 mins'
  },
  {
    id: 'app-3',
    name: 'Burrata Caprese',
    description: 'Creamy burrata with heirloom tomatoes, basil oil, and aged balsamic',
    price: 16.99,
    image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'appetizers',
    rating: 4.7,
    prepTime: '8 mins',
    vegetarian: true,
    popular: true
  },
  {
    id: 'app-4',
    name: 'Buffalo Cauliflower Wings',
    description: 'Crispy cauliflower tossed in spicy buffalo sauce with ranch dip',
    price: 12.99,
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'appetizers',
    rating: 4.6,
    prepTime: '10 mins',
    vegetarian: true,
    spicy: true
  },
  {
    id: 'app-5',
    name: 'Shrimp Cocktail',
    description: 'Jumbo shrimp served with classic cocktail sauce and lemon',
    price: 15.99,
    image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'appetizers',
    rating: 4.5,
    prepTime: '5 mins'
  },

  // Main Courses
  {
    id: 'main-1',
    name: 'Wagyu Beef Tenderloin',
    description: 'Grade A5 Wagyu with roasted vegetables and red wine reduction',
    price: 89.99,
    image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'mains',
    rating: 5.0,
    prepTime: '25 mins',
    popular: true
  },
  {
    id: 'main-2',
    name: 'Grilled Salmon',
    description: 'Atlantic salmon with lemon herb butter and seasonal vegetables',
    price: 28.99,
    image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'mains',
    rating: 4.8,
    prepTime: '18 mins'
  },
  {
    id: 'main-3',
    name: 'Chicken Parmesan',
    description: 'Breaded chicken breast with marinara sauce and melted mozzarella',
    price: 24.99,
    image: 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'mains',
    rating: 4.7,
    prepTime: '22 mins'
  },
  {
    id: 'main-4',
    name: 'Vegetarian Pasta Primavera',
    description: 'Fresh pasta with seasonal vegetables in a light cream sauce',
    price: 19.99,
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'mains',
    rating: 4.6,
    prepTime: '15 mins',
    vegetarian: true
  },
  {
    id: 'main-5',
    name: 'BBQ Ribs',
    description: 'Slow-cooked pork ribs with house BBQ sauce and coleslaw',
    price: 32.99,
    image: 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'mains',
    rating: 4.9,
    prepTime: '30 mins'
  },

  // Pizza
  {
    id: 'pizza-1',
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh mozzarella, tomato sauce, and basil',
    price: 16.99,
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'pizza',
    rating: 4.7,
    prepTime: '12 mins',
    vegetarian: true,
    popular: true
  },
  {
    id: 'pizza-2',
    name: 'Pepperoni Supreme',
    description: 'Loaded with pepperoni, mushrooms, bell peppers, and extra cheese',
    price: 19.99,
    image: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'pizza',
    rating: 4.8,
    prepTime: '15 mins'
  },
  {
    id: 'pizza-3',
    name: 'BBQ Chicken Pizza',
    description: 'Grilled chicken, red onions, cilantro, and BBQ sauce',
    price: 21.99,
    image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'pizza',
    rating: 4.6,
    prepTime: '18 mins'
  },
  {
    id: 'pizza-4',
    name: 'Vegetarian Deluxe',
    description: 'Mushrooms, bell peppers, olives, tomatoes, and red onions',
    price: 18.99,
    image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'pizza',
    rating: 4.5,
    prepTime: '14 mins',
    vegetarian: true
  },
  {
    id: 'pizza-5',
    name: 'Meat Lovers',
    description: 'Pepperoni, sausage, bacon, and ham with extra cheese',
    price: 24.99,
    image: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'pizza',
    rating: 4.9,
    prepTime: '16 mins'
  },

  // Burgers
  {
    id: 'burger-1',
    name: 'Classic Cheeseburger',
    description: 'Beef patty with cheese, lettuce, tomato, and special sauce',
    price: 14.99,
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'burgers',
    rating: 4.6,
    prepTime: '12 mins',
    popular: true
  },
  {
    id: 'burger-2',
    name: 'Bacon Avocado Burger',
    description: 'Beef patty with crispy bacon, avocado, and chipotle mayo',
    price: 17.99,
    image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'burgers',
    rating: 4.8,
    prepTime: '15 mins'
  },
  {
    id: 'burger-3',
    name: 'Veggie Burger',
    description: 'Plant-based patty with lettuce, tomato, and vegan mayo',
    price: 13.99,
    image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'burgers',
    rating: 4.4,
    prepTime: '10 mins',
    vegetarian: true
  },
  {
    id: 'burger-4',
    name: 'Spicy Jalapeño Burger',
    description: 'Beef patty with jalapeños, pepper jack cheese, and spicy sauce',
    price: 16.99,
    image: 'https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'burgers',
    rating: 4.7,
    prepTime: '14 mins',
    spicy: true
  },
  {
    id: 'burger-5',
    name: 'BBQ Ranch Burger',
    description: 'Beef patty with BBQ sauce, ranch, onion rings, and cheddar',
    price: 18.99,
    image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'burgers',
    rating: 4.5,
    prepTime: '16 mins'
  },

  // Salads
  {
    id: 'salad-1',
    name: 'Caesar Salad',
    description: 'Crisp romaine lettuce with parmesan, croutons, and Caesar dressing',
    price: 12.99,
    image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'salads',
    rating: 4.5,
    prepTime: '8 mins',
    vegetarian: true
  },
  {
    id: 'salad-2',
    name: 'Greek Salad',
    description: 'Mixed greens with feta, olives, tomatoes, and Greek dressing',
    price: 14.99,
    image: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'salads',
    rating: 4.6,
    prepTime: '10 mins',
    vegetarian: true
  },
  {
    id: 'salad-3',
    name: 'Grilled Chicken Salad',
    description: 'Mixed greens with grilled chicken, avocado, and balsamic vinaigrette',
    price: 16.99,
    image: 'https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'salads',
    rating: 4.7,
    prepTime: '12 mins'
  },
  {
    id: 'salad-4',
    name: 'Quinoa Power Bowl',
    description: 'Quinoa with roasted vegetables, chickpeas, and tahini dressing',
    price: 15.99,
    image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'salads',
    rating: 4.4,
    prepTime: '15 mins',
    vegetarian: true
  },
  {
    id: 'salad-5',
    name: 'Salmon Nicoise',
    description: 'Grilled salmon with mixed greens, eggs, olives, and vinaigrette',
    price: 19.99,
    image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'salads',
    rating: 4.8,
    prepTime: '18 mins'
  },

  // Seafood
  {
    id: 'seafood-1',
    name: 'Lobster Thermidor',
    description: 'Fresh lobster in creamy sauce with herbs and cheese',
    price: 45.99,
    image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'seafood',
    rating: 4.9,
    prepTime: '25 mins',
    popular: true
  },
  {
    id: 'seafood-2',
    name: 'Fish and Chips',
    description: 'Beer-battered cod with crispy fries and tartar sauce',
    price: 18.99,
    image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'seafood',
    rating: 4.6,
    prepTime: '15 mins'
  },
  {
    id: 'seafood-3',
    name: 'Shrimp Scampi',
    description: 'Garlic butter shrimp over linguine with white wine sauce',
    price: 24.99,
    image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'seafood',
    rating: 4.7,
    prepTime: '18 mins'
  },
  {
    id: 'seafood-4',
    name: 'Crab Cakes',
    description: 'Maryland-style crab cakes with remoulade sauce',
    price: 28.99,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'seafood',
    rating: 4.8,
    prepTime: '20 mins'
  },
  {
    id: 'seafood-5',
    name: 'Grilled Octopus',
    description: 'Mediterranean-style grilled octopus with lemon and herbs',
    price: 26.99,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'seafood',
    rating: 4.5,
    prepTime: '22 mins'
  },

  // Desserts
  {
    id: 'dessert-1',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with molten center, vanilla ice cream',
    price: 12.99,
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'desserts',
    rating: 4.9,
    prepTime: '15 mins',
    popular: true
  },
  {
    id: 'dessert-2',
    name: 'New York Cheesecake',
    description: 'Classic creamy cheesecake with berry compote',
    price: 9.99,
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'desserts',
    rating: 4.7,
    prepTime: '5 mins'
  },
  {
    id: 'dessert-3',
    name: 'Tiramisu',
    description: 'Classic Italian dessert with mascarpone and espresso',
    price: 10.99,
    image: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'desserts',
    rating: 4.8,
    prepTime: '8 mins'
  },
  {
    id: 'dessert-4',
    name: 'Apple Pie',
    description: 'Homemade apple pie with cinnamon and vanilla ice cream',
    price: 8.99,
    image: 'https://images.pexels.com/photos/2067623/pexels-photo-2067623.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'desserts',
    rating: 4.6,
    prepTime: '10 mins'
  },
  {
    id: 'dessert-5',
    name: 'Chocolate Mousse',
    description: 'Rich chocolate mousse with whipped cream and berries',
    price: 11.99,
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'desserts',
    rating: 4.5,
    prepTime: '6 mins'
  },

  // Beverages
  {
    id: 'bev-1',
    name: 'Craft Beer Selection',
    description: 'Local craft beers on tap, rotating selection',
    price: 6.99,
    image: 'https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'beverages',
    rating: 4.6,
    prepTime: '2 mins'
  },
  {
    id: 'bev-2',
    name: 'House Wine',
    description: 'Red or white wine by the glass, carefully selected',
    price: 8.99,
    image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'beverages',
    rating: 4.5,
    prepTime: '2 mins'
  },
  {
    id: 'bev-3',
    name: 'Fresh Lemonade',
    description: 'House-made lemonade with fresh lemons and mint',
    price: 4.99,
    image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'beverages',
    rating: 4.7,
    prepTime: '3 mins'
  },
  {
    id: 'bev-4',
    name: 'Specialty Coffee',
    description: 'Artisan coffee drinks made with premium beans',
    price: 5.99,
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'beverages',
    rating: 4.8,
    prepTime: '5 mins'
  },
  {
    id: 'bev-5',
    name: 'Smoothies',
    description: 'Fresh fruit smoothies with yogurt and honey',
    price: 7.99,
    image: 'https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'beverages',
    rating: 4.4,
    prepTime: '4 mins'
  }
];

// Generate additional dishes to reach 50 per category
const generateMoreDishes = (baseDishes: Dish[], category: string, count: number): Dish[] => {
  const categoryDishes = baseDishes.filter(dish => dish.category === category);
  const additionalDishes: Dish[] = [];
  
  // Base images for each category
  const categoryImages: { [key: string]: string[] } = {
    appetizers: [
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    mains: [
      'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    pizza: [
      'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    burgers: [
      'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    salads: [
      'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    seafood: [
      'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    desserts: [
      'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2067623/pexels-photo-2067623.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    beverages: [
      'https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  };
  
  for (let i = 0; i < count; i++) {
    const baseDish = categoryDishes[i % categoryDishes.length];
    const variations = [
      'Deluxe', 'Premium', 'Special', 'Signature', 'Chef\'s', 'House', 'Traditional', 'Modern',
      'Gourmet', 'Classic', 'Artisan', 'Homestyle', 'Mediterranean', 'Asian Fusion', 'Spicy',
      'Mild', 'Extra', 'Double', 'Triple', 'Mini', 'Large', 'Family Size', 'Organic'
    ];
    
    const variation = variations[i % variations.length];
    const images = categoryImages[category] || categoryImages.mains;
    
    additionalDishes.push({
      ...baseDish,
      id: `${category}-${i + 6}`,
      name: `${variation} ${baseDish.name}`,
      image: images[i % images.length],
      price: Math.round((baseDish.price + (Math.random() * 10 - 5)) * 100) / 100,
      rating: Math.round((4.0 + Math.random() * 1) * 10) / 10,
      popular: Math.random() > 0.85,
      spicy: Math.random() > 0.8,
      vegetarian: baseDish.vegetarian || Math.random() > 0.7
    });
  }
  
  return additionalDishes;
};

// Add more dishes to reach 50 per category
const categoryIds = ['appetizers', 'mains', 'pizza', 'burgers', 'salads', 'seafood', 'desserts', 'beverages'];
categoryIds.forEach(category => {
  const additionalDishes = generateMoreDishes(dishes, category, 45);
  dishes.push(...additionalDishes);
});

export const categories = [
  {
    id: 'appetizers',
    name: 'Appetizers',
    description: 'Start your meal with our exquisite selection',
    icon: '🥗'
  },
  {
    id: 'mains',
    name: 'Main Courses',
    description: 'Our signature dishes crafted to perfection',
    icon: '🍽️'
  },
  {
    id: 'pizza',
    name: 'Pizza',
    description: 'Wood-fired pizzas with fresh ingredients',
    icon: '🍕'
  },
  {
    id: 'burgers',
    name: 'Burgers',
    description: 'Juicy burgers made with premium beef',
    icon: '🍔'
  },
  {
    id: 'salads',
    name: 'Salads',
    description: 'Fresh and healthy salad options',
    icon: '🥙'
  },
  {
    id: 'seafood',
    name: 'Seafood',
    description: 'Fresh catches from the ocean',
    icon: '🦞'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet endings to your dining experience',
    icon: '🍰'
  },
  {
    id: 'beverages',
    name: 'Beverages',
    description: 'Carefully curated drinks to complement your meal',
    icon: '🥂'
  }
];