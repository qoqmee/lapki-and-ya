function ContactsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Контакты
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-5xl mx-auto">
      
      {/* Первый ряд - два блока в одной строке */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        
        {/* Блок 1 - Адрес */}
        <div className="relative rounded-[2rem] overflow-hidden shadow-lg">
          {/* Фоновое изображение */}
          <img 
            src="./images/contact-bg-1.jpg" 
            alt="Фон"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Затемнение */}
          <div className="absolute inset-0 bg-black/50"></div>
          
          {/* Контент */}
          <div className="relative z-10 p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Адрес
            </h2>
            <p className="text-white/90 leading-relaxed text-lg">
              Осташковская улица, 14с2, Москва, 129345
            </p>
            <p className="text-white/80 leading-relaxed mt-1">
              (Можно встретиться с животными лично)
            </p>
          </div>
        </div>

        {/* Блок 2 - Номер и почта */}
        <div className="relative rounded-[2rem] overflow-hidden shadow-lg">
          {/* Фоновое изображение */}
          <img 
            src="./images/contact-bg-2.jpg" 
            alt="Фон"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Затемнение */}
          <div className="absolute inset-0 bg-black/50"></div>
          
          {/* Контент */}
          <div className="relative z-10 p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Номер и почта
            </h2>
            <p className="text-white/90 leading-relaxed text-lg">
              lapkiandya@yandex.ru - по важным вопросам
            </p>
            <p className="text-white/90 leading-relaxed mt-2 text-lg">
              +7(999)999-99-99 - связь со специалистами
            </p>
          </div>
        </div>
      </div>

      {/* Второй ряд - один длинный блок на всю ширину */}
      <div className="relative rounded-[2rem] overflow-hidden shadow-lg">
        {/* Фоновое изображение */}
        <img 
          src="./images/contact-bg-3.jpg" 
          alt="Фон"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Затемнение */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Контент */}
        <div className="relative z-10 p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
            Мы есть в соц.сетях
          </h2>
          
          {/* Логотипы соцсетей */}
          <div className="flex justify-center gap-8 flex-wrap">
            {/* Telegram */}
            <a href="#" className="group flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                <img 
                  src="./images/telegram-icon.png" 
                  alt="Telegram"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-white/80 text-sm">Telegram</span>
            </a>

            {/* VK */}
            <a href="#" className="group flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                <img 
                  src="./images/vk-icon.png" 
                  alt="VK"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-white/80 text-sm">VK</span>
            </a>

            {/* YouTube */}
            <a href="#" className="group flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                <img 
                  src="./images/youtube-icon.png" 
                  alt="YouTube"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-white/80 text-sm">YouTube</span>
            </a>

            {/* Instagram */}
            <a href="#" className="group flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                <img 
                  src="./images/instagram-icon.png" 
                  alt="Instagram"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-white/80 text-sm">Instagram</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
    </main>
  )
}

export default ContactsPage