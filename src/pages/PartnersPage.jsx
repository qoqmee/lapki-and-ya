function PartnersPage() {
  // Массив с иконками партнеров (4x4 = 16 иконок)
  const partnerIcons = [
    { id: 1, src: '/images/twitch.png', alt: 'Партнер 1' },
    { id: 2, src: '/images/pinterest.png', alt: 'Партнер 2' },
    { id: 3, src: '/images/github.png', alt: 'Партнер 3' },
    { id: 4, src: '/images/burger-king.png', alt: 'Партнер 4' },
    { id: 5, src: '/images/postgre.png', alt: 'Партнер 5' },
    { id: 6, src: '/images/firefox.png', alt: 'Партнер 6' },
    { id: 7, src: '/images/mysql.png', alt: 'Партнер 7' },
    { id: 8, src: '/images/wikipedia.png', alt: 'Партнер 8' },
    { id: 9, src: '/images/riot.png', alt: 'Партнер 9' },
    { id: 10, src: '/images/steam.png', alt: 'Партнер 10' },
    { id: 11, src: '/images/blender.png', alt: 'Партнер 11' },
    { id: 12, src: '/images/ip.png', alt: 'Партнер 12' },
    { id: 13, src: '/images/duolingo.png', alt: 'Партнер 13' },
    { id: 14, src: '/images/sber.png', alt: 'Партнер 14' },
    { id: 15, src: '/images/fox.png', alt: 'Партнер 15' },
    { id: 16, src: '/images/piton.png', alt: 'Партнер 16' },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Наши партнёры
            </h1>
          </div>
        </div>
      </section>

      {/* Partner Icons Grid (4x4) */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    {/* Большой полукруглый блок на всю ширину */}
    <div className="w-full bg-gradient-to-br from-orange-50 to-amber-50 rounded-[3rem] p-8 md:p-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-4 gap-6 md:gap-8">
          {partnerIcons.map((icon) => (
            <div key={icon.id} className="flex justify-center items-center">
              <img
                src={icon.src}
                alt={icon.alt}
                className="w-full max-w-[100px] h-auto object-contain rounded-xl hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/100x100?text=Лого";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Content Section */}
<section className="py-1 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center"> {/* Добавлен text-center */}
      
      {/* Основной текст по середине */}
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        Благодаря нашим партнёрам,<br />
        мы смогли то, о чем только могли мечтать 🎉
      </p>

      {/* Список по середине */}
      <div className="space-y-6 text-left"> {/* Текст списка выровнен влево для читаемости */}
        <p className="text-gray-700 leading-relaxed">
          1. Медицинская помощь - оплата операций и лечения тяжелобольных животных, закупка лекарств и ветеринарных препаратов
        </p>
        <p className="text-gray-700 leading-relaxed">
          2. Содержание и уход - предоставление лежаков, игрушек, средств гигиены, ремонт и обустройство вольеров и помещений приютов
        </p>
        <p className="text-gray-700 leading-relaxed">
          3. Поиск новых домов - финансирование и организация выставок-пристройств, поддержка программ адаптации животных перед передачей в семьи
        </p>
        <p className="text-gray-700 leading-relaxed">
          4. Образовательная и просветительская деятельность - проведение «Уроков доброты» в школах и детских центрах, выпуск информационных буклетов и памяток для владельцев питомцев
        </p>
        <p className="text-gray-700 leading-relaxed">
          5. Логистическая и административная поддержка - перевозка животных в клиники и приюты, волонтёрские выезды для ухода за питомцами и благоустройства территорий
        </p>
      </div>

      <div className="mt-12">
        <p className="text-gray-700 leading-relaxed">
          Каждая помощь — будь то финансовая поддержка, товары или волонтёрские часы — приближает нас к главной цели: чтобы ни одно животное не оставалось без заботы.
        </p>
      </div>

      {/* Три полукруглые фотографии */}
      <div className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Фото 1 */}
          <div className="flex flex-col items-center">
            <div className="w-full rounded-[2rem] overflow-hidden shadow-lg">
              <img 
                src="./images/help-1.jpg" 
                alt="Помощь животным"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Фото 2 */}
          <div className="flex flex-col items-center">
            <div className="w-full rounded-[2rem] overflow-hidden shadow-lg">
              <img 
                src="./images/help-2.jpg" 
                alt="Уход за животными"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Фото 3 */}
          <div className="flex flex-col items-center">
            <div className="w-full rounded-[2rem] overflow-hidden shadow-lg">
              <img 
                src="./images/help-3.jpg" 
                alt="Поиск домов"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
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

export default PartnersPage