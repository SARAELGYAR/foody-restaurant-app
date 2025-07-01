import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Clock, Plus, Search, Filter, ArrowLeft, Trash2, ShoppingCart } from 'lucide-react';
import { useFavorites } from '../contexts/FavoritesContext';
import { useCart } from '../contexts/CartContext';
import { categories } from '../data/dishes';
import Button from '../components/UI/Button';

const Favorites: React.FC = () => {
  const { favorites, removeFromFavorites, clearFavorites, favoritesCount } = useFavorites();
  const { addItem } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating'>('name');

  const filteredAndSortedFavorites = useMemo(() => {
    let filtered = favorites;

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
  }, [favorites, selectedCategory, searchTerm, sortBy]);

  const handleAddToCart = (dish: any) => {
    addItem(dish);
  };

  const handleRemoveFromFavorites = (dishId: string) => {
    removeFromFavorites(dishId);
  };

  const favoritesByCategory = useMemo(() => {
    const grouped: { [key: string]: number } = {};
    favorites.forEach(dish => {
      grouped[dish.category] = (grouped[dish.category] || 0) + 1;
    });
    return grouped;
  }, [favorites]);

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-orange-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-lg mx-auto">
              <div className="relative mb-8">
                <Heart className="mx-auto h-24 w-24 text-gray-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <Heart className="h-8 w-8 text-red-400" />
                  </div>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">No Favorites Yet</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Start exploring our delicious menu and add your favorite dishes by clicking the heart icon!
              </p>
              <Link to="/menu">
                <Button size="lg" className="transform hover:scale-105 transition-transform duration-200">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Explore Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-orange-50">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <Heart className="h-16 w-16 text-red-500 fill-current animate-pulse" />
                <div className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  {favoritesCount}
                </div>
              </div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Your Favorite Dishes
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your personal collection of the most delicious dishes you've discovered at Foody
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold">{favoritesCount}</div>
              <div className="text-sm opacity-90">Total Favorites</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold">{Object.keys(favoritesByCategory).length}</div>
              <div className="text-sm opacity-90">Categories</div>
            </div>
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold">
                {favorites.filter(dish => dish.rating >= 4.5).length}
              </div>
              <div className="text-sm opacity-90">High Rated</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold">
                ${Math.round(favorites.reduce((sum, dish) => sum + dish.price, 0) / favorites.length || 0)}
              </div>
              <div className="text-sm opacity-90">Avg Price</div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
              <input
                type="text"
                placeholder="Search your favorites..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-pink-200 rounded-2xl focus:ring-4 focus:ring-pink-100 focus:border-pink-400 transition-all duration-200 text-lg"
              />
            </div>

            <div className="flex items-center space-x-4">
              {/* Sort Dropdown */}
              <div className="flex items-center space-x-3 bg-white rounded-2xl border-2 border-pink-200 px-4 py-2">
                <Filter className="h-6 w-6 text-pink-500" />
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

              {/* Clear All Button */}
              <Button
                onClick={clearFavorites}
                variant="outline"
                className="border-red-300 text-red-500 hover:bg-red-50"
              >
                <Trash2 className="h-5 w-5 mr-2" />
                Clear All
              </Button>
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
                ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-2xl scale-105'
                : 'bg-white text-gray-700 hover:bg-pink-50 hover:text-pink-500 shadow-lg border-2 border-pink-100'
            }`}
          >
            💖 All Favorites ({favoritesCount})
          </button>
          {categories.map(category => {
            const count = favoritesByCategory[category.id] || 0;
            if (count === 0) return null;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-2xl scale-105'
                    : 'bg-white text-gray-700 hover:bg-pink-50 hover:text-pink-500 shadow-lg border-2 border-pink-100'
                }`}
              >
                <span className="text-2xl">{category.icon}</span>
                <span>{category.name} ({count})</span>
              </button>
            );
          })}
        </div>

        {/* Favorites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredAndSortedFavorites.map((dish, index) => (
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
                <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold shadow-lg text-lg">
                  ${dish.price.toFixed(2)}
                </div>
                <button
                  onClick={() => handleRemoveFromFavorites(dish.id)}
                  className="absolute top-4 left-4 p-2 bg-red-500 text-white rounded-full transition-all duration-200 hover:bg-red-600 transform hover:scale-110"
                >
                  <Heart className="h-5 w-5 fill-current" />
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
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-1 group-hover:text-red-500 transition-colors duration-200">
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
                
                <div className="flex space-x-2">
                  <Button
                    onClick={() => handleAddToCart(dish)}
                    className="flex-1 py-3 text-sm font-bold transform hover:scale-105 transition-all duration-200 shadow-lg"
                    size="sm"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <button
                    onClick={() => handleRemoveFromFavorites(dish.id)}
                    className="p-3 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-xl transition-all duration-200 transform hover:scale-110"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAndSortedFavorites.length === 0 && searchTerm && (
          <div className="text-center py-16">
            <div className="bg-white rounded-3xl shadow-xl p-12 max-w-md mx-auto">
              <div className="text-gray-400 mb-6">
                <Search className="h-20 w-20 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">No favorites found</h3>
              <p className="text-gray-500 text-lg">Try adjusting your search criteria</p>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu">
                <Button size="lg" className="w-full sm:w-auto transform hover:scale-105 transition-transform duration-200">
                  <Plus className="mr-2 h-5 w-5" />
                  Add More Favorites
                </Button>
              </Link>
              <Button
                onClick={() => {
                  favorites.forEach(dish => addItem(dish));
                }}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-orange-300 text-orange-500 hover:bg-orange-50"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add All to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;