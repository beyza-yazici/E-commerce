// src/pages/ProductDetail.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingCart, Eye, Star, ArrowLeft, ArrowRight } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API'den ürün detaylarını al
    const fetchProduct = async () => {
      try {
        setLoading(true);
        // API çağrısı burada yapılacak
        // Örnek veri:
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
            "https://example.com/image1.jpg",
            "https://example.com/image2.jpg"
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
    <div className="container mx-auto px-4 py-8">
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
    </div>
  );
};

export default ProductDetail;