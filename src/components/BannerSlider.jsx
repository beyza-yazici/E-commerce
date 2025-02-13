import { useState, useEffect, useCallback } from 'react';

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bannerData, setBannerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // JSON verisini yükleme
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

  // Otomatik geçiş için
  useEffect(() => {
    if (!bannerData.length) return;

    const timer = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [goToNext, bannerData.length]);

  // Loading durumu için
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[500px] bg-[#23856D]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
      </div>
    );
  }

  // Veri yoksa veya hata durumu için
  if (!bannerData.length) {
    return (
      <div className="flex items-center justify-center h-[500px] bg-[#23856D] text-white">
        Veri bulunamadı
      </div>
    );
  }

  const currentSlide = bannerData[currentIndex];

  return (
    <section className="relative bg-[#23856D] h-[500px]">
      <div className="container mx-auto px-4 flex items-center justify-between h-full">
        {/* Sol taraf - İçerik */}
        <div className="py-12 max-w-sm z-10">
          <span className="text-white text-sm">{currentSlide.subtitle}</span>
          <h2 className="text-white text-4xl font-bold mt-2 mb-3">{currentSlide.title}</h2>
          <p className="text-white text-sm mb-4">
            {currentSlide.description}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white text-xl font-bold">{currentSlide.price}</span>
            <button className="bg-[#2DC071] hover:bg-[#2DC071]/90 text-white px-6 py-2 text-sm transition">
              {currentSlide.buttonText}
            </button>
          </div>
        </div>

        {/* Sağ taraf - Görsel */}
        <div className="h-full">
          <img 
            src={currentSlide.image}
            alt={currentSlide.title}
            className="h-full w-auto object-contain object-right"
          />
        </div>

        {/* Slider Noktaları */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {bannerData.map((_, idx) => (
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
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-2xl hover:text-white/80 transition"
        >
          ❮
        </button>
        <button 
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-2xl hover:text-white/80 transition"
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default BannerSlider;