// src/pages/ProductDetail.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingCart, Eye, Star, ArrowLeft, ArrowRight } from 'lucide-react';
import LogoBand from '../components/Logo';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const mockProduct = {
          id,
          title: "Floating Phone",
          price: 1139.33,
          oldPrice: 1399.99,
          rating: 4,
          reviewCount: 10,
          availability: "In Stock",
          description: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
          department: "Electronics",
          sales: 123,
          images: [
            "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ],
          colors: ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-gray-900"]
        };
        setProduct(mockProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const tabContent = {
    description: {
      title: "Description",
      content: product?.description || "No description available"
    },
    additional: {
      title: "Additional Information",
      content: "Additional product information goes here..."
    },
    reviews: {
      title: "Reviews (0)",
      content: (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span>→</span>
            <p>the quick fox jumps over the lazy dog</p>
          </div>
          <div className="flex items-center gap-2">
            <span>→</span>
            <p>the quick fox jumps over the lazy dog</p>
          </div>
          <div className="flex items-center gap-2">
            <span>→</span>
            <p>the quick fox jumps over the lazy dog</p>
          </div>
        </div>
      )
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Link to="/shop" className="text-blue-500 hover:underline">
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-8 text-sm">
        <Link to="/" className="text-gray-600 hover:text-blue-500">Home</Link>
        <span className="text-gray-400">/</span>
        <Link to="/shop" className="text-gray-600 hover:text-blue-500">Shop</Link>
        <span className="text-gray-400">/</span>
        <span className="text-gray-400">{product.title}</span>
      </div>

      {/* Product Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Gallery */}
        <div className="md:w-1/2">
          <div className="relative aspect-square mb-4 bg-gray-100 rounded-lg">
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
              onClick={() => setSelectedImage(prev => prev > 0 ? prev - 1 : product.images.length - 1)}
            >
              <ArrowLeft size={20} />
            </button>
            <img 
              src={product.images[selectedImage]} 
              alt={product.title}
              className="w-full h-full object-cover rounded-lg"
            />
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
              onClick={() => setSelectedImage(prev => (prev + 1) % product.images.length)}
            >
              <ArrowRight size={20} />
            </button>
          </div>
          
          {/* Thumbnail Gallery */}
          <div className="flex gap-4 overflow-x-auto">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden ${
                  selectedImage === index ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img 
                  src={image} 
                  alt={`${product.title} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="md:w-1/2">
          <div className="text-[#23A6F0] mb-2">{product.department}</div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={20}
                  className={`${
                    star <= product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-500">{product.reviewCount} Reviews</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-bold text-[#23856D]">${product.price}</span>
            {product.oldPrice && (
              <span className="text-gray-500 line-through">${product.oldPrice}</span>
            )}
          </div>
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-gray-600">Availability:</span>
            <span className="text-green-500">{product.availability}</span>
          </div>

          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="border-t border-b py-4 mb-6">
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Colors:</span>
              <div className="flex gap-2">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className={`w-6 h-6 rounded-full ${color} border-2 border-white shadow-md`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="flex-1 bg-[#23A6F0] text-white py-3 px-6 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
              <ShoppingCart size={20} />
              Add to Cart
            </button>
            <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
              <Heart size={20} className="text-[#23A6F0]" />
            </button>
            <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
              <Eye size={20} className="text-[#23A6F0]" />
            </button>
          </div>
        </div>
      </div>

      {/* Tab System */}
<div className="mt-12">
  {/* Tab Headers */}
<div className="flex justify-center border-b">
  {Object.entries(tabContent).map(([key, { title }]) => (
    <button
      key={key}
      onClick={() => setActiveTab(key)}
      className={`px-6 py-3 text-sm font-medium ${
        activeTab === key
          ? 'border-b-2 border-blue-500 text-blue-500'
          : 'text-gray-500 hover:text-gray-700'
      }`}
    >
      {title}
    </button>
  ))}
</div>

{/* Desktop Content */}
<div className="hidden md:flex mt-8 gap-16">
  {/* Left Side - Image */}
  <div className="w-1/3">
    <div className="bg-gray-50 rounded-lg overflow-hidden">
      <img
        src={product?.images[0]}
        alt="Product"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Right Side - Content */}
  <div className="w-2/3">
    <div className="space-y-12">
      {/* First Section */}
      <div>
        <h3 className="text-2xl font-bold mb-6">the quick fox jumps over</h3>
        <div className="text-gray-600 space-y-6">
          <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
          <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
          <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
        </div>
      </div>

      <div className="flex gap-16">
        {/* Left Column */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-6">the quick fox jumps over</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span>→</span>
              <p>the quick fox jumps over the lazy dog</p>
            </div>
            <div className="flex items-center gap-3">
              <span>→</span>
              <p>the quick fox jumps over the lazy dog</p>
            </div>
            <div className="flex items-center gap-3">
              <span>→</span>
              <p>the quick fox jumps over the lazy dog</p>
            </div>
            <div className="flex items-center gap-3">
              <span>→</span>
              <p>the quick fox jumps over the lazy dog</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-6">the quick fox jumps over</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span>→</span>
              <p>the quick fox jumps over the lazy dog</p>
            </div>
            <div className="flex items-center gap-3">
              <span>→</span>
              <p>the quick fox jumps over the lazy dog</p>
            </div>
            <div className="flex items-center gap-3">
              <span>→</span>
              <p>the quick fox jumps over the lazy dog</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  {/* Mobile Content */}
<div className="md:hidden space-y-6">
  {/* Image Section */}
  <div>
    <img
      src={product?.images[0]}
      alt="Product"
      className="w-full h-auto rounded-lg mb-6"
    />
  </div>

  {/* Description Section */}
  <div className="mb-8">
    <h3 className="text-xl font-bold mb-4">the quick fox jumps over</h3>
    <div className="space-y-4 text-gray-600">
      <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
      <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
      <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
    </div>
  </div>

  {/* List Section */}
  <div className="mb-8">
    <h3 className="text-xl font-bold mb-4">the quick fox jumps over</h3>
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span>→</span>
        <p>the quick fox jumps over the lazy dog</p>
      </div>
      <div className="flex items-center gap-2">
        <span>→</span>
        <p>the quick fox jumps over the lazy dog</p>
      </div>
      <div className="flex items-center gap-2">
        <span>→</span>
        <p>the quick fox jumps over the lazy dog</p>
      </div>
    </div>
  </div>
</div>
{/* Bestseller Products Section */}
<div className="mt-16">
  <h2 className="text-2xl font-bold mb-8">BESTSELLER PRODUCTS</h2>
  
  {/* Desktop Grid - 4x2 */}
  <div className="hidden md:grid grid-cols-4 gap-6">
    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
      <div key={item} className="group cursor-pointer">
        <div className="aspect-square overflow-hidden rounded-lg mb-4">
          <img
            src={product.images[0]}
            alt={`Bestseller ${item}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="font-medium mb-1">Graphic Design</h3>
        <p className="text-gray-600 text-sm mb-2">English Department</p>
        <div className="flex items-center gap-2">
          <span className="text-gray-400 line-through">$16.48</span>
          <span className="text-green-600 font-medium">$6.48</span>
        </div>
      </div>
    ))}
  </div>

  {/* Mobile List - Single Column */}
  <div className="md:hidden space-y-6">
    {[1, 2, 3, 4].map((item) => (
      <div key={item} className="cursor-pointer">
        <div className="aspect-square overflow-hidden rounded-lg mb-4">
          <img
            src={product.images[0]}
            alt={`Bestseller ${item}`}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-medium mb-1">Graphic Design</h3>
        <p className="text-gray-600 text-sm mb-2">English Department</p>
        <div className="flex items-center gap-2">
          <span className="text-gray-400 line-through">$16.48</span>
          <span className="text-green-600 font-medium">$6.48</span>
        </div>
      </div>
    ))}
  </div>

  <LogoBand />

</div>
</div>
</div>
  );
};

export default ProductDetail;