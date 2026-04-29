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
        
        {/* Блок 1 - Адрес - текст по центру */}
        <div className="relative rounded-[2rem] overflow-hidden shadow-lg min-h-[280px] md:min-h-[320px]">
          {/* Фоновое изображение */}
          <img 
            src="./images/contact-bg-1.png" 
            alt="Фон"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Затемнение */}
          <div className="absolute inset-0 bg-black/50"></div>
          
          {/* Контент - текст по центру */}
          <div className="relative z-10 p-8 md:p-10 h-full flex flex-col items-center justify-center text-center">
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

        {/* Блок 2 - Номер и почта - текст по центру */}
        <div className="relative rounded-[2rem] overflow-hidden shadow-lg min-h-[280px] md:min-h-[320px]">
          {/* Фоновое изображение */}
          <img 
            src="./images/contact-bg-2.png" 
            alt="Фон"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Затемнение */}
          <div className="absolute inset-0 bg-black/50"></div>
          
          {/* Контент - текст по центру */}
          <div className="relative z-10 p-8 md:p-10 h-full flex flex-col items-center justify-center text-center">
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

      {/* Второй ряд - блок соцсетей */}
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-[3rem] overflow-hidden shadow-xl">
          {/* Фоновое изображение */}
          <img 
            src="./images/contact-bg-3.png" 
            alt="Фон"
            className="absolute inset-0 w-full h-full object-cover scale-[1.05] -translate-x-[2%]"
          />
          {/* Градиентное затемнение для лучшей читаемости */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
          
          {/* Контент */}
          <div className="relative z-10 p-10 md:p-16 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center tracking-tight">
              Мы есть в соц.сетях
            </h2>
            
            {/* Логотипы соцсетей */}
            <div className="flex justify-center gap-6 md:gap-12 flex-wrap">
              {/* Telegram */}
              <a href="#" className="group flex flex-col items-center gap-3 hover:scale-110 transition-all duration-300">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:bg-white/20 group-hover:border-white/40 transition-all shadow-lg">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.667l-2.95-.924c-.64-.203-.653-.64.136-.954l11.57-4.461c.537-.194 1.006.131.968.893z"/>
                  </svg>
                </div>
                <span className="text-white font-medium text-sm md:text-base opacity-90 group-hover:opacity-100 transition-opacity">Telegram</span>
              </a>

              {/* VK */}
              <a href="#" className="group flex flex-col items-center gap-3 hover:scale-110 transition-all duration-300">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:bg-white/20 group-hover:border-white/40 transition-all shadow-lg">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.598-.19 1.365 1.26 2.179 1.818.615.422 1.082.33 1.082.33l2.175-.03s1.137-.071.598-1.256c-.044-.094-.314-.661-1.616-1.869-1.362-1.262-1.179-1.058.46-3.241.999-1.33 1.398-2.141 1.273-2.491-.12-.335-.848-.246-.848-.246l-2.447.015s-.181-.025-.315.055c-.131.079-.215.262-.215.262s-.387 1.028-.903 1.903c-1.088 1.84-1.524 1.938-1.701 1.823-.413-.267-.31-1.073-.31-1.645 0-1.788.272-2.533-.529-2.726-.265-.065-.46-.107-1.139-.114-.871-.009-1.607.003-2.024.206-.277.135-.491.437-.361.454.161.022.526.098.72.362.25.341.241 1.107.241 1.107s.144 2.105-.335 2.366c-.328.18-.778-.187-1.744-1.865-.496-.858-.871-1.81-.871-1.81s-.072-.177-.201-.272c-.157-.115-.376-.151-.376-.151l-2.322.015s-.349.01-.477.162c-.114.135-.009.414-.009.414s1.818 4.252 3.878 6.396c1.888 1.969 4.03 1.84 4.03 1.84h.972z"/>
                  </svg>
                </div>
                <span className="text-white font-medium text-sm md:text-base opacity-90 group-hover:opacity-100 transition-opacity">VK</span>
              </a>

              {/* YouTube */}
              <a href="#" className="group flex flex-col items-center gap-3 hover:scale-110 transition-all duration-300">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:bg-white/20 group-hover:border-white/40 transition-all shadow-lg">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                  </svg>
                </div>
                <span className="text-white font-medium text-sm md:text-base opacity-90 group-hover:opacity-100 transition-opacity">YouTube</span>
              </a>

              {/* Instagram */}
              <a href="#" className="group flex flex-col items-center gap-3 hover:scale-110 transition-all duration-300">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:bg-white/20 group-hover:border-white/40 transition-all shadow-lg">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="text-white font-medium text-sm md:text-base opacity-90 group-hover:opacity-100 transition-opacity">Instagram</span>
              </a>
            </div>
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