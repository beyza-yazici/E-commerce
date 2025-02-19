// src/layout/Header.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart, Heart, User } from 'lucide-react';
import { useSelector } from 'react-redux';
import md5 from 'md5';

const Header = () => {
  // Redux state'ini güvenli bir şekilde al
  const user = useSelector(state => state?.client?.user || null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const [cartCount] = useState(0);
  const [wishlistCount] = useState(0);
  const [gravatarUrl, setGravatarUrl] = useState('');

  const shopCategories = {
    women: {
      title: "Kadın",
      items: [
        { name: "Bags", path: "/shop/women/bags" },
        { name: "Belts", path: "/shop/women/belts" },
        { name: "Cosmetics", path: "/shop/women/cosmetics" },
        { name: "Bags", path: "/shop/women/bags-2" },
        { name: "Hats", path: "/shop/women/hats" },
      ]
    },
    men: {
      title: "Erkek",
      items: [
        { name: "Bags", path: "/shop/men/bags" },
        { name: "Belts", path: "/shop/men/belts" },
        { name: "Cosmetics", path: "/shop/men/cosmetics" },
        { name: "Bags", path: "/shop/men/bags-2" },
        { name: "Hats", path: "/shop/men/hats" },
      ]
    }
  };

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
    return () => {
      setIsMenuOpen(false);
      setIsShopMenuOpen(false);
    };
  }, []);

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
            <div 
              className="relative"
              onMouseEnter={() => setIsShopMenuOpen(true)}
              onMouseLeave={() => setIsShopMenuOpen(false)}
            >
              <Link to="/shop" className="text-base hover:text-[#23A6F0] transition-colors">
                Shop
              </Link>
              {isShopMenuOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-4 min-w-[400px] z-50">
                  <div className="flex">
                    {Object.values(shopCategories).map((category, index) => (
                      <div 
                        key={category.title} 
                        className={`flex-1 px-6 ${index !== 0 ? 'border-l' : ''}`}
                      >
                        <h3 className="font-bold text-lg mb-4 text-gray-800">{category.title}</h3>
                        <div className="flex flex-col gap-3">
                          {category.items.map((item, itemIndex) => (
                            <Link
                              key={`${item.name}-${itemIndex}`}
                              to={item.path}
                              className="text-gray-600 hover:text-[#23A6F0] transition-colors"
                              onClick={() => setIsShopMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
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
        <Link to="/auth" className="text-base hover:underline">
          Giriş Yap / Üye Ol
        </Link>
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
              <div className="w-full px-4">
                {Object.values(shopCategories).map((category) => (
                  <div key={category.title} className="mb-4">
                    <h3 className="font-bold text-lg mb-2 text-gray-800">{category.title}</h3>
                    <div className="flex flex-col gap-2">
                      {category.items.map((item, index) => (
                        <Link
                          key={`${item.name}-${index}`}
                          to={item.path}
                          className="text-gray-600 hover:text-[#23A6F0] transition-colors pl-2"
                          onClick={handleMobileMenuClose}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
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

              {/* Kullanıcı bilgileri veya login/register */}
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
                <div className="flex items-center gap-4">
                  <Link 
                    to="/login" 
                    className="text-lg hover:text-[#23A6F0] transition-colors"
                    onClick={handleMobileMenuClose}
                  >
                    Login
                  </Link>
                  <span className="text-gray-400">/</span>
                  <Link 
                    to="/signup" 
                    className="text-lg hover:text-[#23A6F0] transition-colors"
                    onClick={handleMobileMenuClose}
                  >
                    Register
                  </Link>
                </div>
              )}

              {/* Sepet ve favori sayaçları */}
              <div className="flex items-center gap-6">
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
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;