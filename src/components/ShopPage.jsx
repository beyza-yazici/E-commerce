
import { Link } from 'react-router-dom';

const ShopPage = () => {
  const categories = [
    {
      id: 1,
      title: "CLOTHS",
      items: "5 Items",
      image: "https://images.pexels.com/photos/5625071/pexels-photo-5625071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bgColor: "bg-gray-400"
    },
    {
      id: 2,
      title: "CLOTHS",
      items: "5 Items",
      image: "https://images.pexels.com/photos/5625071/pexels-photo-5625071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bgColor: "bg-teal-500"
    },
    {
      id: 3,
      title: "CLOTHS",
      items: "5 Items",
      image: "https://images.pexels.com/photos/5625071/pexels-photo-5625071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bgColor: "bg-pink-300"
    },
    {
      id: 4,
      title: "CLOTHS",
      items: "5 Items",
      image: "https://images.pexels.com/photos/5625071/pexels-photo-5625071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bgColor: "bg-purple-300"
    },
    {
      id: 5,
      title: "CLOTHS",
      items: "5 Items",
      image: "https://images.pexels.com/photos/5625071/pexels-photo-5625071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bgColor: "bg-pink-500"
    }
  ];

  const products = [
    {
      id: 1,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      originalPrice: "$16.48",
      image: "https://images.pexels.com/photos/5625071/pexels-photo-5625071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      colors: ["bg-blue-500", "bg-red-500", "bg-yellow-500", "bg-green-500"]
    },
    {
      id: 2,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      originalPrice: "$16.48",
      image: "https://images.pexels.com/photos/5625071/pexels-photo-5625071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      colors: ["bg-blue-500", "bg-red-500", "bg-yellow-500", "bg-green-500"]
    },
    {
      id: 3,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      originalPrice: "$16.48",
      image: "https://images.pexels.com/photos/5625071/pexels-photo-5625071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      colors: ["bg-blue-500", "bg-red-500", "bg-yellow-500", "bg-green-500"]
    },
    {
      id: 4,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      originalPrice: "$16.48",
      image: "https://images.pexels.com/photos/5625071/pexels-photo-5625071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      colors: ["bg-blue-500", "bg-red-500", "bg-yellow-500", "bg-green-500"]
    },
    {
      id: 5,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      originalPrice: "$16.48",
      image: "https://images.pexels.com/photos/5625071/pexels-photo-5625071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      colors: ["bg-blue-500", "bg-red-500", "bg-yellow-500", "bg-green-500"]
    },
    {
      id: 6,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      originalPrice: "$16.48",
      image: "https://images.pexels.com/photos/5625071/pexels-photo-5625071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      colors: ["bg-blue-500", "bg-red-500", "bg-yellow-500", "bg-green-500"]
    },
    {
      id: 7,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      originalPrice: "$16.48",
      image: "https://images.pexels.com/photos/5625071/pexels-photo-5625071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      colors: ["bg-blue-500", "bg-red-500", "bg-yellow-500", "bg-green-500"]
    },
    {
      id: 8,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      originalPrice: "$16.48",
      image: "https://images.pexels.com/photos/5625071/pexels-photo-5625071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      colors: ["bg-blue-500", "bg-red-500", "bg-yellow-500", "bg-green-500"]
    },
    {
      id: 9,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      originalPrice: "$16.48",
      image: "https://images.pexels.com/photos/5625071/pexels-photo-5625071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      colors: ["bg-blue-500", "bg-red-500", "bg-yellow-500", "bg-green-500"]
    },
    {
      id: 10,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      originalPrice: "$16.48",
      image: "https://images.pexels.com/photos/5625071/pexels-photo-5625071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      colors: ["bg-blue-500", "bg-red-500", "bg-yellow-500", "bg-green-500"]
    },
    {
      id: 11,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      originalPrice: "$16.48",
      image: "https://images.pexels.com/photos/5625071/pexels-photo-5625071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      colors: ["bg-blue-500", "bg-red-500", "bg-yellow-500", "bg-green-500"]
    },
    {
      id: 12,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      originalPrice: "$16.48",
      image: "https://images.pexels.com/photos/5625071/pexels-photo-5625071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      colors: ["bg-blue-500", "bg-red-500", "bg-yellow-500", "bg-green-500"]
    }
    
  ];

  return (
    <div className="container mx-auto px-4 md:px-4">
    {/* Header */}
    <div className="flex flex-col md:flex-row items-center justify-between py-4 text-center md:text-left">
      <h1 className="text-2xl font-bold mb-2 md:mb-0">Shop</h1>
      <div className="flex items-center space-x-2">
        <Link to="/" className="text-gray-600">Home</Link>
        <span className="text-gray-400">/</span>
        <span className="text-gray-400">Shop</span>
      </div>
    </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
  {categories.map((category) => (
    <div 
      key={category.id}
      className="relative flex flex-col aspect-square rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
    >
      <img 
        src={category.image} 
        alt={category.title}
        className="absolute inset-0 w-full h-full object-cover z-10" // z-index ekledik
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-center items-center text-white z-20">
        <h3 className="text-xl font-bold">{category.title}</h3>
        <p className="text-sm mt-2">{category.items}</p>
      </div>
    </div>
  ))}
</div>
      {/* Products Section */}
      <div className="mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
        <p className="text-gray-600 w-full md:w-1/4 text-center md:text-left">
          Showing all 12 results
        </p>
        
        <div className="flex items-center justify-center gap-2 w-full md:w-1/4">
          <span className="text-gray-600">Views:</span>
          <div className="flex border rounded">
        <button className="p-2 hover:bg-gray-100">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.333 2H2.667C2.298 2 2 2.298 2 2.667V13.333C2 13.702 2.298 14 2.667 14H13.333C13.702 14 14 13.702 14 13.333V2.667C14 2.298 13.702 2 13.333 2ZM6 12H4V4H6V12ZM9 12H7V4H9V12ZM12 12H10V4H12V12Z" fill="currentColor"/>
          </svg>
        </button>
        <button className="p-2 hover:bg-gray-100 border-l">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4H14V6H2V4ZM2 7H14V9H2V7ZM2 10H14V12H2V10Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>

    <div className="flex items-center justify-center gap-4 w-full md:w-1/4">
          <div className="relative">
            <select className="w-full md:w-auto appearance-none bg-white border rounded-md px-4 py-2 pr-8 cursor-pointer focus:outline-none focus:border-blue-500">
              <option>Popularity</option>
          <option>Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">
        Filter
      </button>
    </div>
  </div>

  {/* Ürün Grid'i */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {products.map((product) => (
    <div key={product.id} className="flex flex-col items-center md:items-stretch">
      <div className="relative group w-full">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full aspect-[3/4] object-cover z-10" // z-index ekledik
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 z-20" /> 
      </div>
      <div className="mt-4 text-center w-full">
              <h3 className="font-medium">{product.title}</h3>
              <p className="text-sm text-gray-600">{product.department}</p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="line-through text-gray-400">{product.originalPrice}</span>
                <span className="text-gray-900">{product.price}</span>
              </div>
              <div className="flex gap-1 mt-2 justify-center">
                {product.colors.map((color, index) => (
                  <div 
                    key={index}
                    className={`w-4 h-4 rounded-full ${color}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <div className="flex gap-1">
          {/* ... pagination buttons ... */}
        </div>
      </div>
    </div>
  </div>
  );
};

export default ShopPage;