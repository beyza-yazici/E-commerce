import { useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';
import { fetchProductDetail, fetchProducts } from '../store/actions/productActions';
import LogoBand from '../components/Logo';
import ProductTabs from '../components/ProductTabs';
import BestsellerCard from '../components/BestsellerCard';
import { addToCart } from '../store/actions/cartActions';

const ProductDetail = () => {
  // eslint-disable-next-line no-unused-vars
  const { gender, categoryName, categoryId, productNameSlug, productId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  
  const { currentProduct, fetchState, productList } = useSelector(state => state.products);
  // eslint-disable-next-line no-unused-vars
  const cart = useSelector(state => state.cart.cart);

  useEffect(() => {
    dispatch(fetchProductDetail(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    dispatch(fetchProducts({
      limit: 8,
      offset: 0,
      sort: 'rating:desc' 
    }));
  }, [dispatch]);

  // Add to cart handler
  const handleAddToCart = () => {
    if (currentProduct) {
      const productToAdd = {
        id: currentProduct.id,
        name: currentProduct.name,
        price: currentProduct.price,
        image: currentProduct.images[0].url
    }
    dispatch(addToCart(productToAdd));
  }
};

  // Loading state
  if (fetchState === 'FETCHING') {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Error state
  if (fetchState === 'ERROR') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h2 className="text-2xl font-bold text-red-500">Error loading product</h2>
        <button onClick={() => history.goBack()} className="text-blue-500 hover:underline">
          Go Back
        </button>
      </div>
    );
  }

  if (!currentProduct) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-8 text-sm">
        <Link to="/" className="text-gray-600">Home</Link>
        <span className="text-gray-400">/</span>
        <span className="text-gray-400">Shop</span>
      </div>

      {/* Product Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Section */}
        <div className="md:w-1/2">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img 
              src={currentProduct.images[0].url} 
              alt={currentProduct.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-4 mt-4">
            {currentProduct.images.map((image, index) => (
              <div key={index} className="w-20 h-20 border rounded cursor-pointer">
                <img 
                  src={image.url} 
                  alt={`${currentProduct.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{currentProduct.name}</h1>
          
          {/* Rating */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={20}
                  className={`${
                    star <= Math.floor(currentProduct.rating) 
                      ? "fill-yellow-400 text-yellow-400" 
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-500">{currentProduct.rating} Rating ({currentProduct.sell_count} Reviews)</span>
          </div>

          {/* Price */}
          <div className="text-2xl font-bold mb-4">
            ${currentProduct.price.toFixed(2)}
          </div>

          {/* Availability */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-gray-600">Availability:</span>
            <span className="text-[#23A6F0]">In Stock</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-8 border-b pb-8">{currentProduct.description}</p>

          {/* Color Options */}
          <div className="flex gap-2 mb-8">
            <button className="w-8 h-8 rounded-full bg-[#23A6F0]"></button>
            <button className="w-8 h-8 rounded-full bg-[#23856D]"></button>
            <button className="w-8 h-8 rounded-full bg-[#E77C40]"></button>
            <button className="w-8 h-8 rounded-full bg-[#252B42]"></button>
          </div>

          {/* Action Buttons */}
<div className="flex items-center gap-4">
  <button className="bg-[#23A6F0] text-white px-8 py-3 rounded hover:bg-blue-600 transition-colors cursor-pointer">
    Select Options
  </button>
  <button className="p-3 border rounded hover:bg-gray-100 transition-colors cursor-pointer">
    <Heart size={20} className="text-[#23A6F0]" />
  </button>
  <button className="p-3 border rounded hover:bg-gray-100 transition-colors cursor-pointer">
    <Eye size={20} className="text-[#23A6F0]" />
  </button>
  <button 
    onClick={handleAddToCart}
    className="p-3 border rounded hover:bg-gray-100 transition-colors cursor-pointer"
    title="Add to Cart"
  >
    <ShoppingCart size={20} className="text-[#23A6F0]" />
  </button>
</div>
        </div>
      </div>

      <ProductTabs currentProduct={currentProduct} />

      {/* Bestseller Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">BESTSELLER PRODUCTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {productList.map((product) => (
            <BestsellerCard 
              key={product.id} 
              product={product}
            /> 
          ))}
        </div>
      </div>

      <LogoBand />
    </div>
  );
};

export default ProductDetail;