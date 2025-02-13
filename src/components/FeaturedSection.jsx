
import { Link } from 'react-router-dom';

const FeaturedSection = () => {
  return (
    <section className="container mx-auto px-4">
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center text-center">
        <span className="text-gray-500 text-sm mb-3">SUMMER 2020</span>
        <h2 className="text-2xl font-bold mb-3">
          Part of the Neural Universe
        </h2>
        <p className="text-gray-500 text-sm mb-6 max-w-xs">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="flex flex-col gap-3 w-full max-w-[200px]">
          <Link 
            to="/shop" 
            className="bg-[#23A6F0] text-white py-2 px-4 text-center rounded-md"
          >
            BUY NOW
          </Link>
          <Link 
            to="/learn-more" 
            className="border border-[#23A6F0] text-[#23A6F0] py-2 px-4 text-center rounded-md"
          >
            LEARN MORE
          </Link>
        </div>
        <div className="mt-8 w-full">
  <img 
    src="https://images.pexels.com/photos/1995718/pexels-photo-1995718.jpeg?auto=compress&cs=tinysrgb&w=600" 
    alt="Featured Couple" 
    className="w-full aspect-square object-cover" 
  />
</div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center gap-12 max-w-6xl mx-auto">
  <div className="flex-1">
    <img 
      src="https://images.pexels.com/photos/1995718/pexels-photo-1995718.jpeg?auto=compress&cs=tinysrgb&w=600" 
      alt="Featured Couple" 
      className="w-full aspect-square object-cover rounded-lg"
    />
  </div>
        <div className="flex-1">
          <span className="text-gray-500 text-base">SUMMER 2020</span>
          <h2 className="text-4xl font-bold mt-3 mb-4">
            Part of the Neural Universe
          </h2>
          <p className="text-gray-500 text-lg mb-6">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex gap-4">
            <Link 
              to="/shop" 
              className="bg-[#23A6F0] text-white py-3 px-8 rounded-md hover:bg-[#23A6F0]/90 transition-colors"
            >
              BUY NOW
            </Link>
            <Link 
              to="/learn-more" 
              className="border border-[#23A6F0] text-[#23A6F0] py-3 px-8 rounded-md hover:bg-[#23A6F0]/10 transition-colors"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;