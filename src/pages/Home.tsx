import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Shield, Users, Award, Truck } from 'lucide-react';
import { dishes } from '../data/dishes';
import Button from '../components/UI/Button';

const Home: React.FC = () => {
  const popularDishes = dishes.filter(dish => dish.popular).slice(0, 8);

  const features = [
    {
      icon: <Clock className="h-10 w-10 text-orange-500" />,
      title: "Fast Delivery",
      description: "Get your favorite meals delivered in 30 minutes or less with our express delivery service"
    },
    {
      icon: <Shield className="h-10 w-10 text-orange-500" />,
      title: "Quality Guaranteed",
      description: "We use only the finest ingredients and maintain the highest standards of food safety"
    },
    {
      icon: <Star className="h-10 w-10 text-orange-500" />,
      title: "Top Rated",
      description: "Consistently rated 5 stars by our satisfied customers across all platforms"
    },
    {
      icon: <Users className="h-10 w-10 text-orange-500" />,
      title: "Expert Chefs",
      description: "Our team of professional chefs brings years of culinary expertise to every dish"
    },
    {
      icon: <Award className="h-10 w-10 text-orange-500" />,
      title: "Award Winning",
      description: "Recognized as the best restaurant in the city for three consecutive years"
    },
    {
      icon: <Truck className="h-10 w-10 text-orange-500" />,
      title: "Free Delivery",
      description: "Enjoy free delivery on orders over $25 within our delivery zone"
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "400+", label: "Delicious Dishes" },
    { number: "15+", label: "Food Categories" },
    { number: "4.9", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-30"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-pink-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-orange-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
              Welcome to <span className="text-yellow-300 drop-shadow-lg">Foody</span>
            </h1>
            <p className="text-xl md:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s' }}>
              Experience culinary excellence with our carefully crafted dishes made from the finest ingredients. 
              Your taste buds deserve the extraordinary journey we're about to take you on.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '1s' }}>
              <Link to="/menu">
                <Button size="lg" className="w-full sm:w-auto transform hover:scale-110 transition-all duration-300 shadow-2xl text-xl px-8 py-4">
                  Explore Menu
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white text-orange-500 border-white hover:bg-orange-50 transform hover:scale-110 transition-all duration-300 shadow-2xl text-xl px-8 py-4">
                  Make Reservation
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-20 fill-white">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Foody?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're committed to providing you with an exceptional dining experience that goes beyond just great food
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Dishes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Popular Dishes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our most loved creations, crafted to perfection by our expert chefs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularDishes.map((dish, index) => (
              <div 
                key={dish.id} 
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    ${dish.price}
                  </div>
                  <div className="absolute top-4 left-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                    Popular
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                    {dish.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                    {dish.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="text-sm font-bold text-gray-700">{dish.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      <Clock className="h-4 w-4" />
                      <span>{dish.prepTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/menu">
              <Button size="lg" className="transform hover:scale-110 transition-all duration-300 shadow-2xl text-xl px-8 py-4">
                View Full Menu
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience Foody?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who have made Foody their favorite dining destination. 
            Your culinary adventure awaits!
          </p>
          <Link to="/menu">
            <Button size="lg" className="transform hover:scale-110 transition-all duration-300 shadow-2xl text-xl px-8 py-4">
              Order Now
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;