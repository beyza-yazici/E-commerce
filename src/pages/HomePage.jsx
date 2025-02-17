import HeroSlider from "../components/HeroSlider";
import BannerSlider from "../components/BannerSlider";
import FeaturedSection from "../components/FeaturedSection";
import FeaturedPosts from "../components/FeaturedPosts";
import { Link } from 'react-router-dom';


function HomePage() {
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
    <h2 className="text-2xl font-bold">BESTSELLER PRODUCTS</h2>
    <p className="text-gray-500">Problems trying to resolve the conflict between</p>
  </div>

  <div className="flex flex-wrap gap-8 justify-center">
    {[
      {
        image: "https://images.pexels.com/photos/18049026/pexels-photo-18049026/free-photo-of-kadin-kot-ayakta-bluz.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-black"]
      },
      {
        image: "https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-black"]
      },
      {
        image: "https://images.pexels.com/photos/2922301/pexels-photo-2922301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-black"]
      },
      {
        image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-black"]
      },
      {
        image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-black"]
      },
      {
        image: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-black"]
      },
      {
        image: "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-black"]
      },
      {
        image: "https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-black"]
      }
    ].map((product, index) => (
      <Link to={`/product/${index + 1}`} key={index} className="flex flex-col w-[280px]">
        <div className="relative h-[400px] bg-gray-100">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-4 text-center">
          <h3 className="font-bold text-base">{product.title}</h3>
          <p className="text-gray-500 text-sm">{product.department}</p>
          <div className="mt-2">
            <span className="text-gray-500 line-through mr-2">{product.oldPrice}</span>
            <span className="text-[#23856D] font-bold">{product.newPrice}</span>
          </div>
          <div className="flex gap-2 justify-center mt-2">
            {product.colors.map((color, idx) => (
              <div 
                key={idx} 
                className={`w-4 h-4 rounded-full ${color}`}
              />
            ))}
          </div>
        </div>
      </Link>
    ))}
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