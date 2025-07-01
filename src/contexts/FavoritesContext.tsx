import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Dish, FavoritesContextType } from '../types';

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<Dish[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('foody_favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('foody_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (dish: Dish) => {
    setFavorites(prevFavorites => {
      const isAlreadyFavorite = prevFavorites.some(fav => fav.id === dish.id);
      if (!isAlreadyFavorite) {
        return [...prevFavorites, dish];
      }
      return prevFavorites;
    });
  };

  const removeFromFavorites = (dishId: string) => {
    setFavorites(prevFavorites => prevFavorites.filter(fav => fav.id !== dishId));
  };

  const toggleFavorite = (dish: Dish) => {
    const isAlreadyFavorite = favorites.some(fav => fav.id === dish.id);
    if (isAlreadyFavorite) {
      removeFromFavorites(dish.id);
    } else {
      addToFavorites(dish);
    }
  };

  const isFavorite = (dishId: string) => {
    return favorites.some(fav => fav.id === dishId);
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  const value: FavoritesContextType = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
    clearFavorites,
    favoritesCount: favorites.length
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};