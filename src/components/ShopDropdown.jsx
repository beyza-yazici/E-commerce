// components/ShopDropdown.jsx
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { fetchCategories } from '../store/actions/categoriesActions';


const ShopDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { categories, loading } = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);


  const menuItems = {
    kadin: ['Bags', 'Belts', 'Cosmetics', 'Bags', 'Hats'],
    erkek: ['Bags', 'Belts', 'Cosmetics', 'Bags', 'Hats']
  };


  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center space-x-1 px-4 py-2 hover:text-gray-600"
        onClick={toggleDropdown}
      >
        <span>Shop</span>
        <ChevronDown size={16} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[400px] z-50">
          <div className="flex">
            {/* Kadın Kategorileri */}
            <div className="flex-1 px-4 py-2 border-r">
              <h3 className="font-semibold text-lg mb-2">Kadın</h3>
              {menuItems.kadin.map((item, index) => (
                <Link
                  key={`kadin-${index}`}
                  to={`/shop/kadin/${item.toLowerCase()}`}
                  className="block px-2 py-1.5 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Erkek Kategorileri */}
            <div className="flex-1 px-4 py-2">
              <h3 className="font-semibold text-lg mb-2">Erkek</h3>
              {menuItems.erkek.map((item, index) => (
                <Link
                  key={`erkek-${index}`}
                  to={`/shop/erkek/${item.toLowerCase()}`}
                  className="block px-2 py-1.5 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopDropdown;