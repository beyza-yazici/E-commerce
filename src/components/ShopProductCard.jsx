// components/ShopProductCard.jsx
import PropTypes from 'prop-types';
import { useHistory, useParams } from "react-router-dom";

const ShopProductCard = ({ product }) => {
    const history = useHistory();
    const { gender, categoryName, categoryId } = useParams();

    const handleClick = () => {
        const productNameSlug = product.name
          .toLowerCase()
          .replace(/ /g, '-')
          .replace(/[^\w-]+/g, '');
    
        history.push(`/shop/${gender}/${categoryName}/${categoryId}/${productNameSlug}/${product.id}`);
      };

    return (
       <div 
      onClick={handleClick}
      className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow"
    >
        <div className="mb-4">
          <img 
            src={product.images[0].url} 
            alt={product.name}
            className="w-full aspect-square object-cover"
          />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-gray-500 text-sm">{product.description}</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="text-gray-400 line-through">${(product.price * 1.5).toFixed(2)}</span>
            <span className="text-[#23856D] font-bold">${product.price.toFixed(2)}</span>
          </div>
          <div className="flex justify-center gap-2 mt-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <div className="w-3 h-3 rounded-full bg-black"></div>
          </div>
        </div>
      </div>
    );
    };
    
    ShopProductCard.propTypes = {
        product: PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
          images: PropTypes.arrayOf(
            PropTypes.shape({
              url: PropTypes.string.isRequired,
              index: PropTypes.number.isRequired
            })
          ).isRequired,
        }).isRequired
      };
  export default ShopProductCard;