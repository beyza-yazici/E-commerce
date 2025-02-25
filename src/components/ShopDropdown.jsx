import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { fetchCategories } from '../store/actions/categoriesActions';

const ShopDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
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

  const handleCategoryClick = (category, item) => {
    history.push(`/shop/${category.gender}/${item.name.toLowerCase()}/${item.id}`);
    setIsOpen(false);
  };

  const staticCategories = {
    women: {
      title: "Kadın",
      gender: "women",
      items: [
        { id: 1, name: "Bags" },
        { id: 2, name: "Belts" },
        { id: 3, name: "Cosmetics" },
        { id: 4, name: "Accessories" },
        { id: 5, name: "Hats" },
      ]
    },
    men: {
      title: "Erkek",
      gender: "men",
      items: [
        { id: 6, name: "Bags" },
        { id: 7, name: "Belts" },
        { id: 8, name: "Cosmetics" },
        { id: 9, name: "Accessories" },
        { id: 10, name: "Hats" },
      ]
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center space-x-1 px-4 py-2 hover:text-[#23A6F0] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
      >
        <span>Shop</span>
        <ChevronDown size={16} />
      </button>

      {isOpen && (
        <div 
          className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[400px] z-50"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="flex">
            {Object.values(staticCategories).map((category) => (
              <div key={category.title} className="flex-1 px-4 py-2 border-r last:border-r-0">
                <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
                {category.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleCategoryClick(category, item)}
                    className="block w-full text-left px-2 py-1.5 hover:bg-gray-100 hover:text-[#23A6F0] transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopDropdown;