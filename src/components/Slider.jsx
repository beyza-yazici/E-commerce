
import { useState, useEffect } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderData, setSliderData] = useState([]);

  // JSON verisini yükleme
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await import('../../data/sliderData.json');
        setSliderData(response.sliderData);
      } catch (error) {
        console.error("Slider verisi yüklenemedi:", error);
      }
    };
    loadData();
  }, []);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliderData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === sliderData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Veri yüklenene kadar loading göster
  if (!sliderData.length) return <div>Loading...</div>;

  const currentSlide = sliderData[currentIndex];

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
      {/* Sol Ok */}
      <div 
        className="absolute left-2 md:left-4 cursor-pointer z-10 text-white text-2xl md:text-4xl hidden sm:block"
        onClick={goToPrevious}
      >
        ❮
      </div>

      {/* Slider İçeriği */}
      <div className="w-full h-full flex transition-transform duration-500 ease-in-out">
        <div className="w-full h-full flex relative">
          {/* Sol Menü */}
          

          {/* Slider Görseli ve İçeriği */}
          <div 
            className="w-full h-full bg-cyan-400 flex items-center justify-center lg:justify-between px-4 md:px-20"
            style={{
              backgroundImage: `url(${currentSlide.image})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div className="text-white max-w-md text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">
                {currentSlide.title}
              </h2>
              <p className="mb-4 md:mb-6 text-sm md:text-base px-4 lg:px-0">
                {currentSlide.description}
              </p>
              <button className="bg-green-500 text-white px-4 md:px-6 py-1 md:py-2 text-sm md:text-base rounded">
                {currentSlide.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sağ Ok */}
      <div 
        className="absolute right-2 md:right-4 cursor-pointer z-10 text-white text-2xl md:text-4xl hidden sm:block"
        onClick={goToNext}
      >
        ❯
      </div>

      {/* Mobil için nokta navigasyonu */}
      <div className="absolute bottom-4 flex gap-2 sm:hidden">
        {sliderData.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentIndex === idx ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;