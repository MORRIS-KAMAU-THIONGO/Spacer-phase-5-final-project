
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { FiMenu, FiX, FiUser } from 'react-icons/fi';

const Navbar = ({ onLoginClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">Spacer</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#spaces" className="text-gray-700 hover:text-blue-600">Spaces</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Hi, {user?.name}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={onLoginClick}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Login
              </button>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-gray-700">Home</a>
            <a href="#spaces" className="block px-3 py-2 text-gray-700">Spaces</a>
            <a href="#about" className="block px-3 py-2 text-gray-700">About</a>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="block w-full text-left px-3 py-2 text-red-600"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={onLoginClick}
                className="block w-full text-left px-3 py-2 text-blue-600"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;