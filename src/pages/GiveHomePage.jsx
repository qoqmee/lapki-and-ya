import { useState, useEffect } from 'react'

function GiveHomePage() {
  // Массив с картинками животных - замените пути на свои
  const animalImages = [
    { id: 1, src: './images/animal.png', alt: 'Животное 1' },
    { id: 2, src: './images/animal (2).png', alt: 'Животное 2' },
    { id: 3, src: './images/animal (3).png', alt: 'Животное 3' },
    { id: 4, src: '/images/animal.jpeg', alt: 'Животное 4' },
    { id: 5, src: '/images/animal (2).jpeg', alt: 'Животное 5' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState('next') // 'next' или 'prev'

  const nextSlide = () => {
    if (isAnimating) return
    setDirection('next')
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % animalImages.length)
      setTimeout(() => setIsAnimating(false), 100)
    }, 300)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setDirection('prev')
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? animalImages.length - 1 : prevIndex - 1
      )
      setTimeout(() => setIsAnimating(false), 100)
    }, 300)
  }

  // Автоматическое переключение каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex, isAnimating])

  const getVisibleIndexes = () => {
    const leftIndex = (currentIndex - 1 + animalImages.length) % animalImages.length
    const centerIndex = currentIndex
    const rightIndex = (currentIndex + 1) % animalImages.length
    return { leftIndex, centerIndex, rightIndex }
  }

  const { leftIndex, centerIndex, rightIndex } = getVisibleIndexes()

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[808px] flex items-center overflow-hidden">
        <img 
          src="./images/fon-2.png" 
          alt="Фон"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-5xl font-bold text-white mb-6">
              Подарить дом - Подарить жизнь
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Каждый зверь в нашем приюте мечтает о своём уголке, где можно спать в тепле, чувствовать заботу и знать: тебя больше никогда не бросят.
            </p>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Вы можете стать тем самым человеком, который превратит эту мечту в реальность. Принять в свой дом пушистого друга — это не просто акт доброты. Это начало новой истории, где есть место верности, нежности и безграничной благодарности.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">
            Что вы получаете:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Искреннюю любовь без условий
                </h3>
                <div className="flex justify-center mb-6">
                  <img 
                    src="./images/love-icon.png" 
                    alt="Любовь"
                    className="w-32 h-32 object-cover rounded-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Приняв животное в семью, вы обретаете преданного компаньона, который будет радовать вам каждый день, чувствовать ваше настроение и оставаться рядом в любой ситуации.  
                  Эта безоговорочная привязанность создаёт особую связь — ту, что согревает сердце годами.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Возможность стать героем для того, кто в этом нуждался
                </h3>
                <div className="flex justify-center mb-6">
                  <img 
                    src="./images/hero-icon.png" 
                    alt="Герой"
                    className="w-32 h-32 object-cover rounded-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Вы дарите своему будущему другу шанс на счастливую жизнь с вами. Осознание, что именно вы стали тем человеком, который изменил судьбу существа к лучшему, дарит чувство удовлетворения и гордости — ведь вы действительно совершили маленькое чудо.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Ежедневный повод для улыбки
                </h3>
                <div className="flex justify-center mb-6">
                  <img 
                    src="./images/smile-icon.png" 
                    alt="Улыбка"
                    className="w-32 h-32 object-cover rounded-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Даже маленькие моменты — игривые погони за мячиком, сонное мурлыканье или восторженный виляющий хвост, они превращаются в источник светлой радости. Такие ежедневные «мини-праздники» наполняют будни теплом и помогают замечать прекрасное в обыденном.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animals Gallery Section with Animated Carousel */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">
            Познакомьтесь с нашими друзьями ❤️
          </h2>

          {/* Карусель с плавной анимацией */}
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-4 md:gap-6">
              {/* Левое фото с анимацией */}
              <div className="hidden md:block w-1/3 transition-all duration-500 ease-in-out"
                style={{
                  opacity: isAnimating ? 0.3 : 0.6,
                  transform: isAnimating && direction === 'next' ? 'translateX(-20px)' : 
                             isAnimating && direction === 'prev' ? 'translateX(20px)' : 'translateX(0)'
                }}
              >
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={animalImages[leftIndex].src}
                    alt={animalImages[leftIndex].alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/400x400?text=Фото";
                    }}
                  />
                </div>
              </div>

              {/* Центральное фото (основное) с анимацией */}
              <div className="w-full md:w-1/3 transition-all duration-500 ease-in-out"
                style={{
                  transform: isAnimating && direction === 'next' ? 'scale(0.95)' : 
                             isAnimating && direction === 'prev' ? 'scale(0.95)' : 'scale(1)',
                  opacity: isAnimating ? 0.7 : 1
                }}
              >
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src={animalImages[centerIndex].src}
                    alt={animalImages[centerIndex].alt}
                    className="w-full h-full object-cover transition-all duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/400x400?text=Фото";
                    }}
                  />
                </div>
              </div>

              {/* Правое фото с анимацией */}
              <div className="hidden md:block w-1/3 transition-all duration-500 ease-in-out"
                style={{
                  opacity: isAnimating ? 0.3 : 0.6,
                  transform: isAnimating && direction === 'next' ? 'translateX(20px)' : 
                             isAnimating && direction === 'prev' ? 'translateX(-20px)' : 'translateX(0)'
                }}
              >
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={animalImages[rightIndex].src}
                    alt={animalImages[rightIndex].alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/400x400?text=Фото";
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Кнопки-лапки с анимацией */}
            <div className="flex justify-center items-center gap-8 mt-8">
              <button
                onClick={prevSlide}
                disabled={isAnimating}
                className="transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <img
                  src="/images/paw-left.png"
                  alt="Назад"
                  className="w-10 h-10 md:w-12 md:h-12 opacity-70 hover:opacity-100 cursor-pointer"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.outerHTML = '<span class="text-3xl md:text-4xl opacity-70 hover:opacity-100 cursor-pointer">🐾</span>';
                  }}
                />
              </button>
              
              
              <button
                onClick={nextSlide}
                disabled={isAnimating}
                className="transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <img
                  src="/images/paw-right.png"
                  alt="Вперед"
                  className="w-10 h-10 md:w-12 md:h-12 opacity-70 hover:opacity-100 cursor-pointer"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.outerHTML = '<span class="text-3xl md:text-4xl opacity-70 hover:opacity-100 cursor-pointer">🐾</span>';
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default GiveHomePage