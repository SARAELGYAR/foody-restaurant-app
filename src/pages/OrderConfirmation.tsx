import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, Clock, MapPin, Phone, ArrowLeft, Star } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/UI/Button';

interface OrderDetails {
  orderId: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  subtotal: number;
  deliveryFee: number;
  tax: number;
  total: number;
  estimatedDelivery: string;
  deliveryAddress: string;
  paymentMethod: string;
}

const OrderConfirmation: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);

  useEffect(() => {
    // Get order details from localStorage (set during checkout)
    const savedOrder = localStorage.getItem('foody_last_order');
    if (savedOrder) {
      setOrderDetails(JSON.parse(savedOrder));
      // Clear the saved order after displaying
      localStorage.removeItem('foody_last_order');
    } else {
      // If no order details, redirect to menu
      navigate('/menu');
    }
  }, [navigate]);

  if (!orderDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-20 w-20 text-green-500 animate-bounce" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-xl text-gray-600">
            Thank you for your order, {user?.name}! We're preparing your delicious meal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                1
              </span>
              Order Summary
            </h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="font-medium text-gray-700">Order ID:</span>
                <span className="font-mono text-orange-600">#{orderDetails.orderId}</span>
              </div>
              
              <div className="space-y-3">
                {orderDetails.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div className="flex-1">
                      <span className="text-gray-900">{item.name}</span>
                      <span className="text-gray-500 ml-2">x{item.quantity}</span>
                    </div>
                    <span className="font-medium text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal:</span>
                  <span>${orderDetails.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee:</span>
                  <span>${orderDetails.deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax:</span>
                  <span>${orderDetails.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-gray-900 pt-2 border-t border-gray-300">
                  <span>Total:</span>
                  <span className="text-orange-600">${orderDetails.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="flex items-center text-orange-700 mb-2">
                <Clock className="h-5 w-5 mr-2" />
                <span className="font-medium">Estimated Delivery Time</span>
              </div>
              <p className="text-orange-600 font-semibold text-lg">
                {orderDetails.estimatedDelivery}
              </p>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                  2
                </span>
                Delivery Details
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Delivery Address</p>
                    <p className="text-gray-600">{orderDetails.deliveryAddress}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Contact Number</p>
                    <p className="text-gray-600">{user?.phone || '+1 (555) 123-4567'}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                  3
                </span>
                Payment Information
              </h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Payment Method:</span>
                  <span className="font-medium text-gray-900">{orderDetails.paymentMethod}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Status:</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Paid
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Tracking */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Status</h2>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-2">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-medium text-green-600">Order Placed</span>
            </div>
            
            <div className="flex-1 h-1 bg-orange-200 mx-4">
              <div className="h-full bg-orange-500 w-1/3 animate-pulse"></div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mb-2 animate-pulse">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-medium text-orange-600">Preparing</span>
            </div>
            
            <div className="flex-1 h-1 bg-gray-200 mx-4"></div>
            
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                <span className="text-gray-500">🚚</span>
              </div>
              <span className="text-sm font-medium text-gray-500">On the Way</span>
            </div>
            
            <div className="flex-1 h-1 bg-gray-200 mx-4"></div>
            
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                <span className="text-gray-500">📦</span>
              </div>
              <span className="text-sm font-medium text-gray-500">Delivered</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/menu">
            <Button size="lg" className="w-full sm:w-auto">
              Order Again
            </Button>
          </Link>
          
          <Link to="/">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Feedback Section */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">How was your experience?</h3>
          <p className="text-gray-600 mb-6">We'd love to hear your feedback!</p>
          
          <div className="flex justify-center space-x-2 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className="text-yellow-400 hover:text-yellow-500 transition-colors duration-200"
              >
                <Star className="h-8 w-8 fill-current" />
              </button>
            ))}
          </div>
          
          <Button variant="outline">
            Leave a Review
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;