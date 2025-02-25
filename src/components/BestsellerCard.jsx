// components/BestsellerCard.jsx
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

const BestsellerCard = ({ product }) => {
  const history = useHistory();

  const handleClick = () => {
    const productNameSlug = product.name
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');

    history.push(`/shop/${product.gender || 'unisex'}/${product.category_name || 'category'}/${product.category_id}/${productNameSlug}/${product.id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="cursor-pointer group"
    >
      <div className="mb-4">
        <img 
          src={product.images[0].url} 
          alt={product.name}
          className="w-full aspect-[3/4] object-cover"
        />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-bold text-[#252B42]">{product.name}</h3>
        <p className="text-sm text-[#737373]">{product.description}</p>
        <div className="mt-2 space-x-2">
          <span className="text-[#BDBDBD] line-through">${(product.price * 1.5).toFixed(2)}</span>
          <span className="text-[#23856D] font-bold">${product.price.toFixed(2)}</span>
        </div>
        <div className="flex justify-center gap-2 mt-2">
          <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
          <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
          <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
          <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
        </div>
      </div>
    </div>
  );
};

BestsellerCard.propTypes = {
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
    gender: PropTypes.string,
    category_name: PropTypes.string,
    category_id: PropTypes.number
  }).isRequired
};

export default BestsellerCard;