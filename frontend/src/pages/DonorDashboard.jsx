import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';


const DonorDashboard = () => {
  const { user } = useAuth();
  const [newDonation, setNewDonation] = useState({
    items: '',
    quantity: '',
    pickupTime: '',
    description: ''
  });
  const [recentDonations, setRecentDonations] = useState([]);

  useEffect(() => {
    const fetchRecentDonations = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/donations`, {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          setRecentDonations(data);
        }
      } catch (error) {
        console.error('Failed to fetch recent donations:', error);
      }
    };

    fetchRecentDonations();
  }, [user.token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDonation(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/donations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify(newDonation)
      });
      if (response.ok) {
        const data = await response.json();
        setRecentDonations([data, ...recentDonations]);
        setNewDonation({ items: '', quantity: '', pickupTime: '', description: '' });
      }
    } catch (error) {
      console.error('Failed to create donation:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-emerald-100 to-white pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h1 className="text-2xl font-bold text-emerald-900">Welcome, {user.name}!</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-emerald-50 p-4 rounded-lg">
              <p className="text-sm text-emerald-600">Total Donations</p>
              <p className="text-2xl font-bold text-emerald-900">{recentDonations.length}</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <p className="text-sm text-emerald-600">Active Requests</p>
              <p className="text-2xl font-bold text-emerald-900">{recentDonations.filter(d => d.status === 'Available').length}</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <p className="text-sm text-emerald-600">Rating</p>
              <p className="text-2xl font-bold text-emerald-900">4.8 ⭐</p>
            </div>
          </div>
        </motion.div>

        {/* New Donation Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h2 className="text-xl font-semibold text-emerald-900 mb-4">Create New Donation</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Food Items</label>
                <input
                  type="text"
                  name="items"
                  value={newDonation.items}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2"
                  placeholder="e.g., Rice, Curry, Bread"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  value={newDonation.quantity}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2"
                  placeholder="e.g., 50 meals"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Pickup Time</label>
              <input
                type="datetime-local"
                name="pickupTime"
                value={newDonation.pickupTime}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={newDonation.description}
                onChange={handleChange}
                rows="3"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2"
                placeholder="Additional details about the donation..."
              />
            </div>
            <Button
              label="Create Donation"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            />
          </form>
        </motion.div>

        {/* Recent Donations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-semibold text-emerald-900 mb-4">Recent Donations</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentDonations.map((donation) => (
                  <tr key={donation._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(donation.createdAt).toLocaleDateString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{donation.items}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        donation.status === 'Distributed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {donation.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DonorDashboard;