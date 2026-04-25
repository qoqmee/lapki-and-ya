function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "Кошка Маруся нашла дом 🐾",
      image: "/images/news-marusya.jpg",
      description: "Наша Маруся наконец-то обрела свой дом и любящих хозяев. Спасибо всем, кто помогал и поддерживал!",
      link: "#"
    },
    {
      id: 2,
      title: "Как питомцы ладят друг с другом?",
      image: "/images/news-pets.jpg",
      description: "Советы экспертов о том, как подружить кошку и собаку в одном доме, чтобы они жили дружно и счастливо.",
      link: "#"
    },
    {
      id: 3,
      title: "Смешные моменты с котиками",
      image: "/images/news-cats.jpg",
      description: "Подборка самых забавных видео и историй про наших пушистых подопечных, которые поднимут настроение.",
      link: "#"
    },
    {
      id: 4,
      title: "Как дела у Муси и Симбы?",
      image: "/images/news-musa-simba.jpg",
      description: "Рассказываем, как устроились в новых семьях наши любимцы Муся и Симба, делимся их фото и историями.",
      link: "#"
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Новости
            </h1>
          </div>
        </div>
      </section>

      {/* News Grid Section - 2x2 Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newsItems.map((news) => (
                <div key={news.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Картинка */}
                  <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/600x450?text=Новость";
                      }}
                    />
                  </div>
                  
                  {/* Текст и кнопка */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {news.description}
                    </p>
                    <a
                      href={news.link}
                      className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors duration-300"
                    >
                      Подробнее
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default NewsPage