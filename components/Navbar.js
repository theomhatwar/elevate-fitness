import { useState } from 'react';
import { FaBars, FaTimes, FaUser, FaPhone } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 p-4 text-white shadow-md" style={{ backgroundColor: 'rgb(46, 148, 255)' }}>

        <div className="container mx-auto flex justify-between items-center">
          {/* Logo on left */}
          <div className="flex gap-2 text-center">
            <div className="text-3xl font-extrabold text-white tracking-tight">ELEVATE</div>
            <div className="text-sm font-medium text-green-300 uppercase tracking-widest mt-1">FITNESS</div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Contact button - hidden on mobile */}
            <a
              href="tel:8624014627"
              className="hidden sm:flex items-center bg-white text-sky-600 px-4 py-1 rounded hover:bg-sky-100 transition font-medium"
            >
              <FaPhone className="mr-2" />
              Call Us
            </a>

            {/* Login button - hidden on mobile */}
            <a
              href="/login"
              className="hidden sm:block bg-white text-sky-600 px-6 py-1 rounded hover:bg-sky-100 transition font-medium"
            >
              Login
            </a>

            {/* Login icon - visible on mobile */}
            <a href="/login" className="sm:hidden p-2">
              <FaUser className="text-xl" />
            </a>

            {/* Hamburger menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-blue-600 rounded transition"
              aria-label="Menu"
            >
              {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Side Panel */}
      <div className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className="p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700"
          >
            <FaTimes className="text-xl" />
          </button>

          <div className="mt-12">
            <a href="#" className="block py-3 px-4 text-gray-800 hover:bg-gray-100 rounded">Home</a>
            <a href="#" className="block py-3 px-4 text-gray-800 hover:bg-gray-100 rounded">Classes</a>
            <a href="#" className="block py-3 px-4 text-gray-800 hover:bg-gray-100 rounded">Membership</a>
            <a href="#" className="block py-3 px-4 text-gray-800 hover:bg-gray-100 rounded">About Us</a>
            <a href="tel:8624014627" className="flex items-center py-3 px-4 text-gray-800 hover:bg-gray-100 rounded">
              <FaPhone className="mr-2" />
              Call Us
            </a>
            <a href="/login" className="block py-3 px-4 text-gray-800 hover:bg-gray-100 rounded">Login</a>
          </div>
        </div>
      </div>

      {/* Overlay when side panel is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;