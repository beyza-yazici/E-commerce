// src/layout/Header.jsx
import { useState, useEffect } from 'react'; // useEffect ekledik
import { Link } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart, Heart, User } from 'lucide-react';
import { useSelector } from 'react-redux';
import md5 from 'md5';

const Header = () => {
  // Redux state'ini güvenli bir şekilde al
  const user = useSelector(state => state?.client?.user || null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);
  const [wishlistCount] = useState(0);
  const [gravatarUrl, setGravatarUrl] = useState(''); // Gravatar URL'i için state

  // Gravatar URL'ini hesapla
  const getGravatarUrl = (email) => {
    try {
      if (!email) return 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp';
      const hash = md5(email.toLowerCase().trim());
      return `https://www.gravatar.com/avatar/${hash}?d=mp`;
    } catch (error) {
      console.error('Gravatar URL oluşturma hatası:', error);
      return 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp';
    }
  };

  // User değiştiğinde Gravatar URL'ini güncelle
  useEffect(() => {
    if (user?.email) {
      const url = getGravatarUrl(user.email);
      setGravatarUrl(url);
    }
  }, [user]);

  // Menüyü kapat (cleanup)
  useEffect(() => {
    return () => setIsMenuOpen(false);
  }, [])

  // Mobil menüyü kapat
  const handleMobileMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="border-b">
      {/* Desktop Header */}
      <div className="hidden md:flex justify-between items-center max-w-[98%] mx-auto py-5">
        <div className="flex items-center gap-12">
          <Link to="/" className="text-2xl font-bold pl-2">Bandage</Link>
          <nav className="flex items-center gap-4">
            <Link to="/" className="text-base hover:text-[#23A6F0] transition-colors">Home</Link>
            <Link to="/shop" className="text-base hover:text-[#23A6F0] transition-colors">Shop</Link>
            <Link to="/about" className="text-base hover:text-[#23A6F0] transition-colors">About</Link>
            <Link to="/blog" className="text-base hover:text-[#23A6F0] transition-colors">Blog</Link>
            <Link to="/contact" className="text-base hover:text-[#23A6F0] transition-colors">Contact</Link>
            <Link to="/pages" className="text-base hover:text-[#23A6F0] transition-colors">Pages</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4 pr-2">
          {user ? (
            <div className="flex items-center gap-2">
              <img
                src={gravatarUrl}
                alt={user.name || 'User'}
                className="w-8 h-8 rounded-full"
                onError={(e) => {
                  e.target.src = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp';
                }}
              />
              <span className="text-gray-700">{user.name || 'User'}</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 text-[#23A6F0]">
              <User size={20} />
              <Link to="/login" className="text-base hover:underline">Login</Link>
              <span className="text-base">/</span>
              <Link to="/signup" className="text-base hover:underline">Register</Link>
            </div>
          )}
          
          <div className="flex items-center gap-4">
            <Search size={20} className="cursor-pointer text-[#23A6F0]" />
            <div className="relative">
              <ShoppingCart size={20} className="text-[#23A6F0]" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#23A6F0] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <div className="relative">
              <Heart size={20} className="text-[#23A6F0]" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#23A6F0] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="flex justify-between items-center px-4 py-5">
          <Link to="/" className="text-2xl font-bold">Bandage</Link>
          <div className="flex items-center gap-4">
            {user ? (
              <img
                src={gravatarUrl}
                alt={user.name || 'User'}
                className="w-8 h-8 rounded-full"
                onError={(e) => {
                  e.target.src = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp';
                }}
              />
            ) : (
              <User size={20} className="text-[#23A6F0]" />
            )}
            <Search size={20} className="text-[#23A6F0]" />
            <ShoppingCart size={20} className="text-[#23A6F0]" />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-[#23A6F0]"
              type="button"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="border-t">
            <div className="flex flex-col items-center py-6 gap-6 bg-white">
              <Link 
                to="/" 
                className="text-lg hover:text-[#23A6F0] transition-colors"
                onClick={handleMobileMenuClose}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className="text-lg hover:text-[#23A6F0] transition-colors"
                onClick={handleMobileMenuClose}
              >
                Shop
              </Link>
              <Link 
                to="/about" 
                className="text-lg hover:text-[#23A6F0] transition-colors"
                onClick={handleMobileMenuClose}
              >
                About
              </Link>
              <Link 
                to="/blog" 
                className="text-lg hover:text-[#23A6F0] transition-colors"
                onClick={handleMobileMenuClose}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="text-lg hover:text-[#23A6F0] transition-colors"
                onClick={handleMobileMenuClose}
              >
                Contact
              </Link>
              <Link 
                to="/pages" 
                className="text-lg hover:text-[#23A6F0] transition-colors"
                onClick={handleMobileMenuClose}
              >
                Pages
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;