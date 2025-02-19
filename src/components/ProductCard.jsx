import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Eye, Clock, Star } from "lucide-react";
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  // Eğer product undefined ise, null döndür
  if (!product) {
    return null;
  }

  return (
    <Link to={`/product/${product.id}`} className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Ürün Görseli ve Aksiyonlar */}
      <div className="relative group">
        {product.image && (
          <img 
            src={product.image} 
            alt={product.title || 'Product Image'} 
            className="w-full aspect-square object-cover"
          />
        )}
        
        {/* Sale Badge */}
        {product.onSale && (
          <span className="absolute top-4 left-4 bg-[#E74040] text-white text-xs px-2 py-1 rounded">
            Sale
          </span>
        )}

        {/* Aksiyon Butonları */}
        <div className="absolute right-4 top-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
            <Heart size={16} className="text-gray-700" />
          </button>
          <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
            <ShoppingCart size={16} className="text-gray-700" />
          </button>
          <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
            <Eye size={16} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Ürün Bilgileri */}
      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-[#23A6F0]">{product.department}</span>
          <div className="flex items-center gap-1 bg-gray-200 rounded-xl px-2 py-1">
            <Star size={14} className="text-[#23856D]" />
            <span className="text-xs">4.9</span>
          </div>
        </div>

        <h3 className="font-bold text-gray-800">{product.title}</h3>
        
        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>

        {/* Satış Bilgileri */}
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Clock size={14} />
          <span>{product.sales} Sales</span>
        </div>

        {/* Fiyat */}
        <div className="flex items-center gap-2">
          {product.oldPrice && (
            <span className="text-gray-500 line-through">${product.oldPrice}</span>
          )}
          <span className="text-[#23856D] font-bold">${product.price}</span>
        </div>

        {/* Renk Seçenekleri */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex gap-2 mt-2">
            {product.colors.map((color, index) => (
              <div 
                key={index}
                className={`w-3 h-3 rounded-full ${color}`}
              />
            ))}
          </div>
        )}

        {/* Learn More Butonu */}
        <Link 
          to={`/product/${product.id}`}
          className="text-sm text-[#23A6F0] hover:underline mt-2"
        >
          Learn More →
        </Link>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onSale: PropTypes.bool,
    department: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    sales: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
    price: PropTypes.number.isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;