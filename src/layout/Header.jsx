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
    { icon: <ShoppingCart size={20} />, path: "#", badge: 0 }, // TODO: Update the badge value
    { icon: <Heart size={20} />, path: "#", badge: 0 }, // TODO: Update the badge value
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
    </header>
  );
}

export default Header;
