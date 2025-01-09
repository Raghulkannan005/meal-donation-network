
import { useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';


const Login = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await login({ ...formData, type });
      
      if (result?.success) {
        navigate(type === 'donor' ? '/donor/dashboard' : '/organization/dashboard');
      } else {
        setError(result?.error || 'Login failed. Please try again.');
      }
    } catch (err) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-emerald-100 to-white pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-emerald-900 mb-6">
          Login as {type === 'donor' ? 'Donor' : 'Organization'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 border"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 border"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
  
          <button 
            type="submit"
            className="w-full bg-emerald-600 text-white p-2 rounded hover:bg-emerald-700 transition-colors disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          

        </form>
        <p className="mt-4 text-center text-sm">
          Don&apos;t have an account?{' '}
          <Link 
            to={`/auth/register?type=${type}`} 
            className="text-emerald-600 hover:text-emerald-700"
          >
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;