import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Pages", path: "/pages" },
  ];

  const actionItems = [
    { icon: <Search size={20} />, path: "#" },
    { icon: <ShoppingCart size={20} />, path: "#", badge: 0 },
    { icon: <Heart size={20} />, path: "#", badge: 0 },
  ];

  return (
    <header className="flex flex-col">
     
      <div className="flex justify-between items-center py-4 px-6 border-b bg-white">
        
        <div className="text-xl font-bold">
          <Link to="/">BrandName</Link>
        </div>

        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <Link to={item.path} key={index} className="text-gray-700 hover:text-blue-600">
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex space-x-4 items-center">
          <Link to="/login" className="hidden md:flex items-center text-blue-600 hover:underline space-x-2">
            <User size={20} className="text-blue-600" />
            <span>Login / Register</span>
          </Link>
          {actionItems.map((item, index) => (
            <Link to={item.path} key={index} className="text-gray-700 hover:text-blue-600 relative">
              {item.icon}
              {item.badge > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/picsum/700/500"
            alt="Left Banner"
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-10 left-10 text-white">
            <h2 className="text-lg font-bold">SUMMER 2020</h2>
            <h1 className="text-3xl font-extrabold">Multicoloured Tie-dye Sweater</h1>
            <p className="text-sm mt-2">We know how large objects will act.</p>
            <button className="mt-4 px-4 py-2 bg-white text-black font-bold">SHOP NOW</button>
          </div>
        </div>

        <div>
          <img
            src="https://picsum.photos/seed/picsum/700/500"
            alt="Right Banner"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
