import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, CreditCard } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/UI/Button';

const Cart: React.FC = () => {
  const { items, updateQuantity, removeItem, clearCart, total, itemsCount } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const deliveryFee = 3.99;
  const tax = total * 0.1;
  const finalTotal = total + deliveryFee + tax;

  const handleCheckout = () => {
    if (!user) {
      navigate('/login', { state: { from: { pathname: '/cart' } } });
      return;
    }
    
    // Create order details
    const orderDetails = {
      orderId: `ORD-${Date.now()}`,
      items: items.map(item => ({
        name: item.dish.name,
        quantity: item.quantity,
        price: item.dish.price
      })),
      subtotal: total,
      deliveryFee,
      tax,
      total: finalTotal,
      estimatedDelivery: '25-35 minutes',
      deliveryAddress: user.address || '123 Main St, City, State 12345',
      paymentMethod: 'Credit Card ****1234'
    };
    
    // Save order details for confirmation page
    localStorage.setItem('foody_last_order', JSON.stringify(orderDetails));
    
    // Clear cart and navigate to confirmation
    clearCart();
    navigate('/order-confirmation');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md mx-auto">
              <ShoppingBag className="mx-auto h-24 w-24 text-gray-400 mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
              <p className="text-xl text-gray-600 mb-8">
                Looks like you haven't added anything to your cart yet
              </p>
              <Link to="/menu">
                <Button size="lg" className="transform hover:scale-105 transition-transform duration-200">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Browse Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 px-8 py-12">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">Your Cart</h1>
                <p className="text-orange-100 text-lg">
                  {itemsCount} {itemsCount === 1 ? 'delicious item' : 'delicious items'} ready to order
                </p>
              </div>
              <Link
                to="/menu"
                className="text-white hover:text-orange-200 transition-colors duration-200 flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>

          <div className="p-8">
            {/* Cart Items */}
            <div className="space-y-6 mb-8">
              {items.map((item, index) => (
                <div
                  key={item.dish.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 p-6 bg-gradient-to-r from-gray-50 to-orange-50 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Dish Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.dish.image}
                      alt={item.dish.name}
                      className="w-28 h-28 rounded-xl object-cover shadow-lg"
                    />
                  </div>

                  {/* Dish Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {item.dish.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-3 leading-relaxed">
                      {item.dish.description}
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="text-xl font-bold text-orange-500">
                        ${item.dish.price.toFixed(2)}
                      </div>
                      {item.dish.vegetarian && (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                          🌱 Vegetarian
                        </span>
                      )}
                      {item.dish.spicy && (
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                          🌶️ Spicy
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center border-2 border-orange-200 rounded-xl bg-white shadow-sm">
                      <button
                        onClick={() => updateQuantity(item.dish.id, item.quantity - 1)}
                        className="p-3 hover:bg-orange-50 transition-colors duration-200 rounded-l-xl"
                      >
                        <Minus className="h-5 w-5 text-orange-500" />
                      </button>
                      <span className="px-6 py-3 font-bold text-lg min-w-[4rem] text-center text-gray-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.dish.id, item.quantity + 1)}
                        className="p-3 hover:bg-orange-50 transition-colors duration-200 rounded-r-xl"
                      >
                        <Plus className="h-5 w-5 text-orange-500" />
                      </button>
                    </div>

                    <div className="text-2xl font-bold text-gray-900 min-w-[6rem] text-right">
                      ${(item.dish.price * item.quantity).toFixed(2)}
                    </div>

                    <button
                      onClick={() => removeItem(item.dish.id)}
                      className="p-3 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-xl transition-all duration-200 transform hover:scale-110"
                    >
                      <Trash2 className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="border-t-2 border-gray-200 pt-8">
              <div className="bg-gradient-to-r from-orange-50 via-red-50 to-pink-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Order Summary</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-xl">
                    <span className="text-gray-700">Subtotal ({itemsCount} items)</span>
                    <span className="font-semibold text-gray-900">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xl">
                    <span className="text-gray-700">Delivery Fee</span>
                    <span className="font-semibold text-gray-900">${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xl">
                    <span className="text-gray-700">Tax (10%)</span>
                    <span className="font-semibold text-gray-900">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t-2 border-orange-200 pt-4">
                    <div className="flex justify-between text-3xl font-bold">
                      <span className="text-gray-900">Total</span>
                      <span className="text-orange-500">
                        ${finalTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button
                    onClick={handleCheckout}
                    className="w-full py-4 text-xl font-bold transform hover:scale-105 transition-all duration-200 shadow-lg"
                    size="lg"
                  >
                    <CreditCard className="mr-3 h-6 w-6" />
                    {user ? 'Place Order' : 'Sign In to Place Order'}
                  </Button>
                  
                  <button
                    onClick={clearCart}
                    className="w-full py-3 text-red-500 border-2 border-red-200 rounded-xl hover:bg-red-50 transition-colors duration-200 font-semibold text-lg"
                  >
                    Clear Cart
                  </button>
                </div>

                {/* Estimated Delivery Time */}
                <div className="mt-6 text-center p-4 bg-white rounded-xl shadow-sm">
                  <p className="text-gray-600 text-sm">
                    🚚 <strong>Estimated Delivery:</strong> 25-35 minutes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;