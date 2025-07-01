export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
}

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
  rating: number;
  prepTime: string;
}

export interface CartItem {
  dish: Dish;
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
  createdAt: Date;
  deliveryAddress?: string;
  paymentMethod: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: Omit<User, 'id'> & { password: string }) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (dish: Dish) => void;
  removeItem: (dishId: string) => void;
  updateQuantity: (dishId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemsCount: number;
}

export interface FavoritesContextType {
  favorites: Dish[];
  addToFavorites: (dish: Dish) => void;
  removeFromFavorites: (dishId: string) => void;
  toggleFavorite: (dish: Dish) => void;
  isFavorite: (dishId: string) => boolean;
  clearFavorites: () => void;
  favoritesCount: number;
}