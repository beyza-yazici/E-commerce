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

  // Loading durumu için
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[600px] bg-[#23A6F0]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
      </div>
    );
  }

  // Veri yoksa
  if (!sliderData.length) {
    return (
      <div className="flex items-center justify-center h-[600px] bg-[#23A6F0] text-white">
        Veri bulunamadı
      </div>
    );
  }

  const currentSlide = sliderData[currentIndex];

  return (
    <div className="relative w-full h-[600px]">
      <div 
        className="w-full h-full bg-[#23A6F0] flex items-center px-20"
        style={{
          backgroundImage: `url(${currentSlide.image})`,
          backgroundPosition: 'right',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="text-white max-w-md">
          <h2 className="text-5xl font-bold mb-4">
            {currentSlide.title}
          </h2>
          <p className="mb-6 text-base">
            {currentSlide.description}
          </p>
          <button className="bg-[#2DC071] hover:bg-[#2DC071]/90 text-white px-10 py-3 transition">
            {currentSlide.buttonText}
          </button>
        </div>
      </div>

      {/* Slider Noktaları */}
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

      {/* Slider Okları */}
      <button 
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-white/80 transition"
      >
        ❮
      </button>
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-white/80 transition"
      >
        ❯
      </button>
    </div>
  );
};

export default HeroSlider;