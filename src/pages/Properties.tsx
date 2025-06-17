import React, { useState } from 'react';
import { Search, Filter, MapPin, SlidersHorizontal } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { Property } from '../types';
import { motion } from 'framer-motion';

// Mock data for properties
const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern PG for Working Professionals',
    description: 'Fully furnished PG with all amenities',
    type: 'PG',
    rent: 12000,
    deposit: 24000,
    location: {
      address: '123 Tech Park Road',
      city: 'Bangalore',
      state: 'Karnataka',
      pincode: '560001'
    },
    amenities: ['WiFi', 'Laundry', 'Meals', 'AC', 'Parking'],
    images: ['https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'],
    availability: {
      available: true,
      availableFrom: new Date(),
      occupancy: 'single'
    },
    ownerInfo: {
      name: 'Rajesh Kumar',
      phone: '+91 9876543210',
      email: 'rajesh@example.com',
      uid: 'owner1'
    },
    features: {
      furnished: true,
      wifi: true,
      parking: true,
      laundry: true,
      meals: true,
      ac: true,
      bathroom: 'private'
    },
    ratings: {
      average: 4.5,
      count: 12
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    title: 'Spacious 2BHK Apartment',
    description: 'Beautiful apartment with garden view',
    type: 'Apartment',
    rent: 25000,
    deposit: 50000,
    location: {
      address: '456 Green Valley',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001'
    },
    amenities: ['WiFi', 'Gym', 'Swimming Pool', 'Security'],
    images: ['https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg'],
    availability: {
      available: true,
      availableFrom: new Date(),
      occupancy: 'double'
    },
    ownerInfo: {
      name: 'Priya Sharma',
      phone: '+91 9876543211',
      email: 'priya@example.com',
      uid: 'owner2'
    },
    features: {
      furnished: true,
      wifi: true,
      parking: true,
      laundry: false,
      meals: false,
      ac: true,
      bathroom: 'private'
    },
    ratings: {
      average: 4.7,
      count: 8
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3',
    title: 'Cozy Room Near IT Hub',
    description: 'Single room with attached bathroom',
    type: 'Room',
    rent: 8000,
    deposit: 16000,
    location: {
      address: '789 IT Park',
      city: 'Pune',
      state: 'Maharashtra',
      pincode: '411001'
    },
    amenities: ['WiFi', 'Parking', 'Security'],
    images: ['https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg'],
    availability: {
      available: true,
      availableFrom: new Date(),
      occupancy: 'single'
    },
    ownerInfo: {
      name: 'Amit Patel',
      phone: '+91 9876543212',
      email: 'amit@example.com',
      uid: 'owner3'
    },
    features: {
      furnished: true,
      wifi: true,
      parking: true,
      laundry: true,
      meals: false,
      ac: false,
      bathroom: 'private'
    },
    ratings: {
      average: 4.2,
      count: 15
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '4',
    title: 'Luxury Villa with Pool',
    description: 'Premium villa with swimming pool and garden',
    type: 'House',
    rent: 45000,
    deposit: 90000,
    location: {
      address: '321 Palm Gardens',
      city: 'Goa',
      state: 'Goa',
      pincode: '403001'
    },
    amenities: ['WiFi', 'Swimming Pool', 'Garden', 'Parking', 'Security'],
    images: ['https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg'],
    availability: {
      available: true,
      availableFrom: new Date(),
      occupancy: 'triple'
    },
    ownerInfo: {
      name: 'Maria Fernandes',
      phone: '+91 9876543213',
      email: 'maria@example.com',
      uid: 'owner4'
    },
    features: {
      furnished: true,
      wifi: true,
      parking: true,
      laundry: true,
      meals: false,
      ac: true,
      bathroom: 'private'
    },
    ratings: {
      average: 4.8,
      count: 6
    },
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

const Properties: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedOccupancy, setSelectedOccupancy] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProperties, setFilteredProperties] = useState(mockProperties);

  const handleSearch = () => {
    let filtered = mockProperties;

    if (searchTerm) {
      filtered = filtered.filter(property =>
        property.location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedType) {
      filtered = filtered.filter(property => property.type === selectedType);
    }

    if (selectedOccupancy) {
      filtered = filtered.filter(property => property.availability.occupancy === selectedOccupancy);
    }

    setFilteredProperties(filtered);
  };

  React.useEffect(() => {
    handleSearch();
  }, [searchTerm, selectedType, selectedOccupancy]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect Property</h1>
          <p className="text-gray-600">Discover verified properties with transparent pricing</p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by city, area, or property name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center space-x-2"
            >
              <SlidersHorizontal className="h-5 w-5" />
              <span>Filters</span>
            </button>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${showFilters ? 'block' : 'hidden lg:grid'}`}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Types</option>
                <option value="PG">PG</option>
                <option value="Room">Room</option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Occupancy</label>
              <select
                value={selectedOccupancy}
                onChange={(e) => setSelectedOccupancy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Occupancy</option>
                <option value="single">Single</option>
                <option value="double">Double</option>
                <option value="triple">Triple</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="relevance">Relevance</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Results */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <p className="text-gray-600">
            Showing {filteredProperties.length} properties
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </motion.div>

        {/* Properties Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => (
                <PropertyCard key={property.id} property={property} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No properties found</h3>
              <p className="text-gray-600">Try adjusting your search criteria</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Properties;