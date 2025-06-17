import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Home, Plus, User, Settings, BookOpen, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard: React.FC = () => {
  const { userProfile } = useAuth();

  const isOwner = userProfile?.userType === 'owner';

  const ownerStats = [
    { label: 'Active Properties', value: '5', icon: Home, color: 'bg-blue-500' },
    { label: 'Total Bookings', value: '23', icon: BookOpen, color: 'bg-green-500' },
    { label: 'Average Rating', value: '4.5', icon: Star, color: 'bg-yellow-500' },
    { label: 'Monthly Revenue', value: '₹85,000', icon: User, color: 'bg-purple-500' }
  ];

  const tenantStats = [
    { label: 'Current Booking', value: '1', icon: Home, color: 'bg-blue-500' },
    { label: 'Past Bookings', value: '3', icon: BookOpen, color: 'bg-green-500' },
    { label: 'Favorites', value: '8', icon: Star, color: 'bg-yellow-500' },
    { label: 'Reviews Given', value: '2', icon: User, color: 'bg-purple-500' }
  ];

  const stats = isOwner ? ownerStats : tenantStats;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {userProfile?.displayName}!
          </h1>
          <p className="text-gray-600 mt-2">
            {isOwner ? 'Manage your properties and bookings' : 'Track your bookings and find new places'}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              {isOwner ? (
                <>
                  <button className="w-full flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <Plus className="h-5 w-5 text-blue-600" />
                    <span className="text-blue-600 font-medium">Add New Property</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                    <BookOpen className="h-5 w-5 text-green-600" />
                    <span className="text-green-600 font-medium">View Bookings</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                    <Settings className="h-5 w-5 text-purple-600" />
                    <span className="text-purple-600 font-medium">Manage Properties</span>
                  </button>
                </>
              ) : (
                <>
                  <button className="w-full flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <Home className="h-5 w-5 text-blue-600" />
                    <span className="text-blue-600 font-medium">Find Properties</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                    <BookOpen className="h-5 w-5 text-green-600" />
                    <span className="text-green-600 font-medium">My Bookings</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
                    <Star className="h-5 w-5 text-yellow-600" />
                    <span className="text-yellow-600 font-medium">Saved Properties</span>
                  </button>
                </>
              )}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 pb-4 border-b border-gray-200">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Home className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {isOwner ? 'New booking received' : 'Booking confirmed'}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 pb-4 border-b border-gray-200">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Star className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {isOwner ? 'Received 5-star review' : 'Review submitted'}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <User className="h-4 w-4 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Profile updated successfully
                  </p>
                  <p className="text-xs text-gray-500 mt-1">3 days ago</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;