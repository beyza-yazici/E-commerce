// components/Header.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart, Heart, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  //TODO: Sepet ve favori sayılarını state olarak tutuyoruz
  const [cartCount] = useState(0);
  const [wishlistCount] = useState(0);

  return (
    <header className="border-b">
      {/* Desktop Header */}
      <div className="hidden md:flex justify-between items-center max-w-[98%] mx-auto py-5">
        <div className="flex items-center gap-12">
          <Link to="/" className="text-2xl font-bold pl-2">
            Bandage
          </Link>

          <nav className="flex items-center gap-4">
            <Link to="/" className="text-base hover:text-[#23A6F0] transition-colors">Home</Link>
            <div 
              className="relative"
              onMouseEnter={() => setIsShopMenuOpen(true)}
              onMouseLeave={() => setIsShopMenuOpen(false)}
            >
              <Link to="/shop" className="text-base hover:text-[#23A6F0] transition-colors">
                Shop
              </Link>
              {isShopMenuOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[150px] z-50">
                  <Link to="/shop/category1" className="block px-4 py-2 hover:bg-gray-50 text-base">Category 1</Link>
                  <Link to="/shop/category2" className="block px-4 py-2 hover:bg-gray-50 text-base">Category 2</Link>
                  <Link to="/shop/category3" className="block px-4 py-2 hover:bg-gray-50 text-base">Category 3</Link>
                </div>
              )}
            </div>
            <Link to="/about" className="text-base hover:text-[#23A6F0] transition-colors">About</Link>
            <Link to="/blog" className="text-base hover:text-[#23A6F0] transition-colors">Blog</Link>
            <Link to="/contact" className="text-base hover:text-[#23A6F0] transition-colors">Contact</Link>
            <Link to="/pages" className="text-base hover:text-[#23A6F0] transition-colors">Pages</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4 pr-2">
          <div className="flex items-center gap-1 text-[#23A6F0]">
            <User size={20} />
            <Link to="/login" className="text-base hover:underline">Login</Link>
            <span className="text-base">/</span>
            <Link to="/register" className="text-base hover:underline">Register</Link>
          </div>
          <div className="flex items-center gap-4">
            <Search size={20} className="cursor-pointer text-[#23A6F0]" />
            <div className="flex items-center gap-1 cursor-pointer text-[#23A6F0] relative">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#23A6F0] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1 cursor-pointer text-[#23A6F0] relative">
              <Heart size={20} />
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
          <Link to="/" className="text-2xl font-bold">
            Bandage
          </Link>

          <div className="flex items-center gap-4">
            <User size={20} className="text-[#23A6F0]" />
            <Search size={20} className="text-[#23A6F0]" />
            <div className="relative">
              <ShoppingCart size={20} className="text-[#23A6F0]" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#23A6F0] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#23A6F0]"
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
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/product" 
                className="text-lg hover:text-[#23A6F0] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Product
              </Link>
              <Link 
                to="/pricing" 
                className="text-lg hover:text-[#23A6F0] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/contact" 
                className="text-lg hover:text-[#23A6F0] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;