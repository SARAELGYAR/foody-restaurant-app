import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, Dish, CartContextType } from '../types';

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('foody_cart');
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('foody_cart', JSON.stringify(items));
  }, [items]);

  const addItem = (dish: Dish) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.dish.id === dish.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.dish.id === dish.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { dish, quantity: 1 }];
    });
  };

  const removeItem = (dishId: string) => {
    setItems(prevItems => prevItems.filter(item => item.dish.id !== dishId));
  };

  const updateQuantity = (dishId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(dishId);
      return;
    }
    
    setItems(prevItems =>
      prevItems.map(item =>
        item.dish.id === dishId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce((sum, item) => sum + (item.dish.price * item.quantity), 0);
  const itemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const value: CartContextType = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    total,
    itemsCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};