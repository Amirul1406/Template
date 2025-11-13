import { Link, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="border-b border-dark-border bg-dark-surface/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
            UI Library
          </Link>
          
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Components
            </Link>
            <button className="text-gray-400 hover:text-white transition-colors">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

