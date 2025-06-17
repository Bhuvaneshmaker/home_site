import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Wifi, Car, Star, IndianRupee } from 'lucide-react';
import { Property } from '../types';
import { motion } from 'framer-motion';

interface PropertyCardProps {
  property: Property;
  index?: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
    >
      <div className="relative">
        <img 
          src={property.images[0] || 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'} 
          alt={property.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {property.type}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <div className="bg-white rounded-full px-2 py-1 flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{property.ratings.average}</span>
          </div>
        </div>
        {!property.availability.available && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
              Not Available
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
          {property.title}
        </h3>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.location.city}, {property.location.state}</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span className="capitalize">{property.availability.occupancy}</span>
            </div>
            {property.features.wifi && (
              <div className="flex items-center space-x-1">
                <Wifi className="h-4 w-4" />
                <span>WiFi</span>
              </div>
            )}
            {property.features.parking && (
              <div className="flex items-center space-x-1">
                <Car className="h-4 w-4" />
                <span>Parking</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center space-x-1">
              <IndianRupee className="h-5 w-5 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">{property.rent.toLocaleString()}</span>
              <span className="text-gray-600">/month</span>
            </div>
            <div className="text-sm text-gray-600">
              Deposit: ₹{property.deposit.toLocaleString()}
            </div>
          </div>
        </div>
        
        <Link 
          to={`/property/${property.id}`}
          className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default PropertyCard;