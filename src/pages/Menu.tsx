import React, { useState, useMemo } from 'react';
import { Search, Filter, Star, Clock, Plus, Heart } from 'lucide-react';
import { dishes, categories } from '../data/dishes';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';
import Button from '../components/UI/Button';

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating'>('name');
  const { addItem } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const filteredAndSortedDishes = useMemo(() => {
    let filtered = dishes;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(dish => dish.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(dish =>
        dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dish.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort dishes
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [selectedCategory, searchTerm, sortBy]);

  const handleAddToCart = (dish: any) => {
    addItem(dish);
  };

  const handleToggleFavorite = (dish: any) => {
    toggleFavorite(dish);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
              Our Delicious Menu
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our carefully curated selection of dishes, each crafted with passion and the finest ingredients from around the world
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
              <input
                type="text"
                placeholder="Search for your favorite dishes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-orange-200 rounded-2xl focus:ring-4 focus:ring-orange-100 focus:border-orange-400 transition-all duration-200 text-lg"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center space-x-3 bg-white rounded-2xl border-2 border-orange-200 px-4 py-2">
              <Filter className="h-6 w-6 text-orange-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'rating')}
                className="border-none bg-transparent focus:ring-0 text-lg font-medium text-gray-700"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-2xl scale-105'
                : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-500 shadow-lg border-2 border-orange-100'
            }`}
          >
            🍽️ All Items ({dishes.length})
          </button>
          {categories.map(category => {
            const count = dishes.filter(dish => dish.category === category.id).length;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-2xl scale-105'
                    : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-500 shadow-lg border-2 border-orange-100'
                }`}
              >
                <span className="text-2xl">{category.icon}</span>
                <span>{category.name} ({count})</span>
              </button>
            );
          })}
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredAndSortedDishes.map((dish, index) => (
            <div 
              key={dish.id} 
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full font-bold shadow-lg text-lg">
                  ${dish.price.toFixed(2)}
                </div>
                <button
                  onClick={() => handleToggleFavorite(dish)}
                  className={`absolute top-4 left-4 p-2 rounded-full transition-all duration-200 transform hover:scale-110 ${
                    isFavorite(dish.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white text-gray-400 hover:text-red-500'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isFavorite(dish.id) ? 'fill-current' : ''}`} />
                </button>
                {dish.popular && (
                  <div className="absolute bottom-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse">
                    ⭐ Popular
                  </div>
                )}
                {dish.vegetarian && (
                  <div className="absolute bottom-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    🌱 Vegetarian
                  </div>
                )}
                {dish.spicy && (
                  <div className="absolute bottom-12 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    🌶️ Spicy
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-1 group-hover:text-orange-500 transition-colors duration-200">
                  {dish.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
                  {dish.description}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < Math.floor(dish.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-gray-700">{dish.rating.toFixed(1)}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    <Clock className="h-4 w-4" />
                    <span>{dish.prepTime}</span>
                  </div>
                </div>
                
                <Button
                  onClick={() => handleAddToCart(dish)}
                  className="w-full py-3 text-lg font-bold transform hover:scale-105 transition-all duration-200 shadow-lg"
                  size="sm"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredAndSortedDishes.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white rounded-3xl shadow-xl p-12 max-w-md mx-auto">
              <div className="text-gray-400 mb-6">
                <Search className="h-20 w-20 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">No dishes found</h3>
              <p className="text-gray-500 text-lg">Try adjusting your search or filter criteria</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;