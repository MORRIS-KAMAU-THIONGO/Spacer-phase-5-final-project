
import { FiArrowRight, FiUser, FiShield } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Hero = ({ onGetStartedClick }) => {
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const navigate = useNavigate();

  const handleClientDashboard = () => {
    if (isAuthenticated && user?.role === 'client') {
      navigate('/client-dashboard');
    } else {
      onGetStartedClick();
    }
  };

  const handleAdminDashboard = () => {
    if (isAuthenticated && user?.role === 'admin') {
      navigate('/admin-dashboard');
    } else {
      onGetStartedClick();
    }
  };

  return (
    <section className="bg-gray-50 py-20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Find Your Perfect <span className="text-indigo-600">Workspace</span> in Kenya
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Book unique spaces for meetings, creative work, and celebrations. From coworking spaces to conference centers across Nairobi.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Client Card */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-8 text-center border border-gray-200">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center">
                <FiUser className="text-teal-600 text-4xl" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">I'm a Client</h2>
            <p className="text-gray-600 mb-8">
              Browse and book amazing spaces for your team, events, or creative projects
            </p>
            <button
              onClick={handleClientDashboard}
              className="w-full bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center"
            >
              Browse Spaces <FiArrowRight className="ml-2" />
            </button>
          </div>

          {/* Space Owner Card */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-8 text-center border border-gray-200">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center">
                <FiShield className="text-indigo-600 text-4xl" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">I'm a Space Owner</h2>
            <p className="text-gray-600 mb-8">
              List your spaces, manage bookings, and grow your business on our platform
            </p>
            <button
              onClick={handleAdminDashboard}
              className="w-full bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold border-2 border-gray-300 hover:border-gray-400 transition-colors flex items-center justify-center"
            >
              Admin Dashboard <FiArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;