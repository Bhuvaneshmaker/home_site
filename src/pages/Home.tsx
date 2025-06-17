import React from 'react';
import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import { Property } from '../types';
import { motion } from 'framer-motion';

// Mock data for featured properties
const featuredProperties: Property[] = [
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
  }
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600">
              Discover our handpicked properties with the best amenities
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a 
              href="/properties" 
              className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              View All Properties
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;