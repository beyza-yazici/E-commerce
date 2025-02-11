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
    { icon: <ShoppingCart size={20} />, path: "#", badge: 0},//cartItems.length 
    { icon: <Heart size={20} />, path: "#", badge: 0 }, //wishlistItems.length
  ];
  


  return (
    <header className="flex justify-between items-center py-4 px-8 border-b">
      {/* Logo */}

        <div className="text-xl font-bold">
          <Link to="/">BrandName</Link>
        </div>

        <nav className="flex space-x-4">
           {menuItems.map((item, index) => (
            <Link to={item.path} key={index} className="text-blue-600 hover:underline">
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex space-x-4 items-center">
        <Link to="/login" className="flex items-center text-blue-600 hover:underline space-x-2">
          <User size={20} className="text-blue-600" />
          <span>Login / Register</span>
        </Link>
        {actionItems.map((item, index) => (
          <Link to={item.path} key={index} className="text-blue-600 hover:underline">
            {item.icon}
            {item.badge && <span className="bg-red-500 text-white rounded-full px-2">{item.badge}</span>}
          </Link>
        ))}
      </div>
    </header>
  )
}

export default Header