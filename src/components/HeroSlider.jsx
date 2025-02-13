
import { useState, useEffect } from 'react';

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderData, setSliderData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const response = await import('../data/heroSliderData.json');
        if (response.sliderData) {
          setSliderData(response.sliderData);
        }
      } catch (error) {
        console.error("Slider verisi yüklenemedi:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  const goToPrevious = () => {
    if (!sliderData.length) return;
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliderData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    if (!sliderData.length) return;
    const isLastSlide = currentIndex === sliderData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const currentSlide = sliderData[currentIndex];

  return (
    <div className="relative w-full h-screen md:h-[600px]"> 
      <div 
        className="w-full h-full bg-[#23A6F0] flex items-center"
        style={{
          backgroundImage: `url(${currentSlide?.image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        {/* Content Container */}
        <div className="w-full md:w-1/2 px-6 md:px-20 py-8 md:py-0 
          flex flex-col items-center md:items-start text-center md:text-left"> 
          <span className="text-white text-sm md:text-base">
            SUMMER 2020
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            NEW COLLECTION
          </h2>
          <p className="text-white text-sm md:text-base mb-6 max-w-md">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="bg-[#2DC071] hover:bg-[#2DC071]/90 text-white px-6 md:px-10 py-2 md:py-3 text-sm md:text-base transition">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {sliderData.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-8 h-2 rounded cursor-pointer transition-all duration-300 ${
              currentIndex === idx ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-white/80 transition hidden md:block"
      >
        ❮
      </button>
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-white/80 transition hidden md:block"
      >
        ❯
      </button>
    </div>
  );
};


export default HeroSlider;