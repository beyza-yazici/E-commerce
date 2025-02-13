
import { useState, useEffect, useCallback } from 'react';

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bannerData, setBannerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const response = await import('../data/bannerSliderData.json');
        if (response.bannerData) {
          setBannerData(response.bannerData);
        }
      } catch (error) {
        console.error("Banner verisi yüklenemedi:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  const goToPrevious = useCallback(() => {
    if (!bannerData.length) return;
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? bannerData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, bannerData.length]);

  const goToNext = useCallback(() => {
    if (!bannerData.length) return;
    const isLastSlide = currentIndex === bannerData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, bannerData.length]);

  if (isLoading || !bannerData.length) {
    return <div>Loading...</div>;
  }

  const currentSlide = bannerData[currentIndex];

  return (
    <section className="relative bg-[#23856D] w-full">
      {/* Mobile Layout */}
      <div className="md:hidden h-screen">
        <div className="flex flex-col h-full px-4 py-8">
          <div className="flex-1 flex flex-col justify-center items-center text-center text-white"> 
            <span className="text-base mb-3">SUMMER 2020</span> 
            <h2 className="text-4xl font-bold mb-4">Vita Classic Product</h2> 
            <p className="text-base mb-5 max-w-xs"> 
              We know how large objects will act, but things on a small scale.
            </p>
            <div className="mb-5"> 
              <span className="text-2xl font-bold">{currentSlide.price}</span>
            </div>
            <button className="bg-[#2DC071] text-white px-8 py-3 text-base"> 
              ADD TO CART
            </button>
          </div>
          <div className="flex-1 relative">
            <img 
              src={currentSlide.image}
              alt={currentSlide.title}
              className="absolute bottom-0 right-0 h-full object-contain"
            />
          </div>
        </div>
      </div>
  
      {/* Desktop Layout */}
      <div className="hidden md:block h-[500px]">
        <div className="container mx-auto px-4 flex items-center justify-between h-full">
          <div className="max-w-xl"> 
            <span className="text-white text-lg mb-3">SUMMER 2020</span> 
            <h2 className="text-5xl font-bold text-white mt-3 mb-4"> 
              Vita Classic Product
            </h2>
            <p className="text-white text-lg mb-6"> 
              We know how large objects will act, but things on a small scale.
            </p>
            <div className="flex items-center gap-6"> 
              <span className="text-white text-2xl font-bold">{currentSlide.price}</span> 
              <button className="bg-[#2DC071] text-white px-10 py-4 text-lg hover:bg-[#2DC071]/90 transition-colors"> 
                
                ADD TO CART
              </button>
            </div>
          </div>
  
          <div className="h-full">
            <img 
              src={currentSlide.image}
              alt={currentSlide.title}
              className="h-full w-auto object-contain"
            />
          </div>
        </div>
      </div>
  
      {/* Slider Controls - Both Layouts */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3"> 
        {bannerData.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-10 h-2 rounded cursor-pointer transition-all duration-300 ${
              currentIndex === idx ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
  
      <button 
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-white/80 transition-colors"
      >
        ❮
      </button>
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-white/80 transition-colors"
      >
        ❯
      </button>
    </section>
  );
};

export default BannerSlider;