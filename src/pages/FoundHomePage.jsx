function FoundHomePage() {
  return (
    <main>
      {/* Hero Section с фоновым изображением */}
      <section className="relative min-h-[808px] flex items-center justify-center overflow-hidden">
        {/* Фоновое изображение */}
        <img 
          src="./images/fon-3.png" 
          alt="Фон"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Затемнение */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Малыши нашли дом
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed mb-6">
              Сердце радуется, когда мы можем сказать: «Они дома!» — и видеть, как в глазах бывших приютских малышей светится счастье.
            </p>

            <p className="text-lg text-white/90 leading-relaxed">
              Наши пушистые подопечные прошли непростой путь: от тревоги и неуверенности — к тёплому углу, сытному ужину и бесконечной любви. 
              Сегодня они больше не ждут у двери, не вздрагивают от громких звуков и не прячутся по углам. 
              Теперь у них есть самое главное — ДОМ 🏠️
            </p>
          </div>
        </div>
      </section>

      {/* Блок "Вы тоже можете дать питомцу дом!" с фоновым изображением */}
      <section className="relative min-h-[1040px] flex items-center justify-center overflow-hidden">
        {/* Фоновое изображение */}
        <img 
          src="./images/fon-4.png" 
          alt="Фон"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Контент */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-bold text-white mb-15">
              Вы тоже можете дать питомцу дом!
            </p>

            <div className="flex gap-8 justify-center flex-wrap">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300">
                Собачки
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300">
                Кошечки
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default FoundHomePage