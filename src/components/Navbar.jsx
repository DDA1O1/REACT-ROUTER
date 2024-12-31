import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-blue-300 transition duration-300">
          Movie Explorer
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-blue-300 transition duration-300 font-medium">
            Home
          </Link>
          <Link to="/search" className="hover:text-blue-300 transition duration-300 font-medium">
            Search
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
