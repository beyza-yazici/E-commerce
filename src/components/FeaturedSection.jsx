
import { Link } from 'react-router-dom';

const FeaturedSection = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
        {/* Görsel Kısmı */}
        <div className="flex-1 max-w-[450px]"> {/* Görsel boyutu artırıldı */}
          <img 
            src="https://images.pexels.com/photos/1995718/pexels-photo-1995718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Featured Couple" 
            className="w-full aspect-square object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* İçerik Kısmı */}
        <div className="flex-1 flex flex-col items-start gap-5"> {/* gap artırıldı */}
          <span className="text-gray-500 text-base">SUMMER 2020</span> {/* text-sm -> text-base */}
          
          <h2 className="text-4xl font-bold text-[#252B42]"> {/* text-3xl -> text-4xl */}
            Part of the Neural Universe
          </h2>
          
          <p className="text-gray-500 text-base"> {/* text-sm -> text-base */}
            We know how large objects will act, but things on a small scale.
          </p>
          
          <div className="flex gap-4">
            <Link 
              to="/shop" 
              className="bg-[#2DC071] hover:bg-[#2DC071]/90 text-white px-7 py-2.5 text-base rounded transition" /* padding ve font-size artırıldı */
            >
              BUY NOW
            </Link>
            
            <Link 
              to="/learn-more" 
              className="text-[#2DC071] hover:text-[#2DC071]/90 px-7 py-2.5 text-base rounded border border-[#2DC071] transition" /* padding ve font-size artırıldı */
            >
              READ MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;