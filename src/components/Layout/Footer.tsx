import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold">Foody</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Experience culinary excellence with our carefully crafted dishes made from the finest ingredients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Restaurant Street<br />
                  Culinary District, CD 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-400">hello@foody.com</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <div className="text-gray-400">
                  <div>Mon - Thu: 11:00 AM - 10:00 PM</div>
                  <div>Fri - Sat: 11:00 AM - 11:00 PM</div>
                  <div>Sunday: 12:00 PM - 9:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="/menu" className="block text-gray-400 hover:text-orange-500 transition-colors duration-200">
                Our Menu
              </a>
              <a href="/contact" className="block text-gray-400 hover:text-orange-500 transition-colors duration-200">
                Contact Us
              </a>
              <a href="#" className="block text-gray-400 hover:text-orange-500 transition-colors duration-200">
                Reservations
              </a>
              <a href="#" className="block text-gray-400 hover:text-orange-500 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-400 hover:text-orange-500 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Foody Restaurant. All rights reserved. Made with ❤️ for food lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;