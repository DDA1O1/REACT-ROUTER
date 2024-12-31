import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-white text-xl font-bold mb-4">Movie App</h2>
            <p className="text-sm">
              Your ultimate destination for movies, reviews, and entertainment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/search" className="hover:text-white transition">Search</Link></li>
              <li><Link to="/movies" className="hover:text-white transition">Movies</Link></li>
              <li><Link to="/trending" className="hover:text-white transition">Trending</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/action" className="hover:text-white transition">Action</Link></li>
              <li><Link to="/comedy" className="hover:text-white transition">Comedy</Link></li>
              <li><Link to="/drama" className="hover:text-white transition">Drama</Link></li>
              <li><Link to="/horror" className="hover:text-white transition">Horror</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition"><FaGithub size={20} /></a>
              <a href="#" className="hover:text-white transition"><FaTwitter size={20} /></a>
              <a href="#" className="hover:text-white transition"><FaLinkedin size={20} /></a>
              <a href="#" className="hover:text-white transition"><FaInstagram size={20} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 px-6 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Movie App. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm hover:text-white transition">Privacy Policy</Link>
            <Link to="/terms" className="text-sm hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 