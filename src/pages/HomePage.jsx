import HeroSlider from "../components/HeroSlider";
import BannerSlider from "../components/BannerSlider";
import FeaturedSection from "../components/FeaturedSection";
import FeaturedPosts from "../components/FeaturedPosts";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../store/actions/productActions";
import BestsellerCard from "../components/BestsellerCard";


function HomePage() {

  const dispatch = useDispatch();
  
  const { productList, fetchState } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts({
      limit: 8, // Bestseller için 8 ürün
      offset: 0
    }));
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-12">
      {/* Hero Slider Section */}
      <section className="w-full">
        <HeroSlider height="600px" variant="default" />
      </section>

{/* Editor's Pick */}
<section className="container mx-auto px-4">
  <div className="text-center mb-8">
    <h2 className="text-2xl font-bold">EDITOR&#39;S PICK</h2>
    <p className="text-gray-500">Problems trying to resolve the conflict between</p>
  </div>
  
  {/* Mobile Layout */}
  <div className="flex flex-col gap-4 md:hidden">
    <Link to="/category/men" className="relative">
      <img 
        src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="Men" 
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute bottom-[30px] left-[30px] bg-white px-[40px] py-[15px]">
        <h3 className="font-bold">MEN</h3>
      </div>
    </Link>

    <Link to="/category/men" className="relative">
      <img 
        src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="Women" 
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute bottom-[30px] left-[30px] bg-white px-[40px] py-[15px]">
        <h3 className="font-bold">WOMEN</h3>
      </div>
    </Link>

    <Link to="/category/men" className="relative">
      <img 
        src="https://images.pexels.com/photos/9421332/pexels-photo-9421332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="Accessories" 
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute bottom-[30px] left-[30px] bg-white px-[40px] py-[15px]">
        <h3 className="font-bold">ACCESSORIES</h3>
      </div>
    </Link>

    <Link to="/category/men" className="relative">
      <img 
        src="https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="Kids" 
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute bottom-[30px] left-[30px] bg-white px-[40px] py-[15px]">
        <h3 className="font-bold">KIDS</h3>
      </div>
    </Link>
  </div>

  {/* Desktop Layout */}
  <div className="hidden md:flex gap-5">
    {/* Sol taraf - MEN */}
    <div className="w-[32%] h-[500px] relative">
      <img 
        src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="Men" 
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-[30px] left-[30px] bg-white px-[40px] py-[15px]">
        <h3 className="font-bold">MEN</h3>
      </div>
    </div>

    {/* Orta - WOMEN */}
    <div className="w-[32%] h-[500px] relative">
      <img 
        src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="Women" 
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-[30px] left-[30px] bg-white px-[40px] py-[15px]">
        <h3 className="font-bold">WOMEN</h3>
      </div>
    </div>

    {/* Sağ taraf - ACCESSORIES ve KIDS */}
    <div className="w-[32%] flex flex-col gap-5">
      <div className="h-[242px] relative">
        <img 
          src="https://images.pexels.com/photos/9421332/pexels-photo-9421332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Accessories" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-[30px] left-[30px] bg-white px-[40px] py-[15px]">
          <h3 className="font-bold">ACCESSORIES</h3>
        </div>
      </div>

      <div className="h-[242px] relative">
        <img 
          src="https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Kids" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-[30px] left-[30px] bg-white px-[40px] py-[15px]">
          <h3 className="font-bold">KIDS</h3>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Bestseller Products */}
<section className="container mx-auto px-4">
  <div className="text-center mb-8">
    <p className="text-gray-500 text-sm">Featured Products</p>
    <h2 className="text-2xl font-bold mb-2">BESTSELLER PRODUCTS</h2>
    <p className="text-gray-500 text-sm">Problems trying to resolve the conflict between</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
    {fetchState === 'FETCHING' ? (
      Array(8).fill(null).map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="aspect-[3/4] bg-gray-200 rounded mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      ))
    ) : fetchState === 'ERROR' ? (
      <div className="col-span-full text-red-500 text-center">
        Error loading products. Please try again later.
      </div>
    ) : (
      productList.map((product) => (
        <BestsellerCard key={product.id} product={product} />
      ))
    )}
  </div>
</section>

      {/* Green Banner Section */}
      <section className="w-full">
        <BannerSlider />
      </section>

       {/* Featured Section */}
      <FeaturedSection />

      {/* Featured Posts */}
      <FeaturedPosts />
     
    </div>
  );
}

export default HomePage;