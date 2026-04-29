import { Link } from 'react-router-dom'

function News4() {
  return (
    <main className="bg-white min-h-screen py-12">
      <div className="max-w-2xl mx-auto px-6">

        <Link
          to="/news"
          className="inline-block text-orange-500 hover:text-orange-600 text-sm mb-8 transition-colors"
        >
          ← Все новости
        </Link>

        <p className="text-xs text-gray-400 mb-3">15 марта 2025</p>

        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Как дела у Муси и Симбы?
        </h1>

        <div className="rounded-3xl overflow-hidden mb-8">
          <img
            src="/images/news-4.png"
            alt="Муся и Симба"
            className="w-full h-72 object-cover"
          />
        </div>

        <div className="flex flex-col gap-5 text-gray-700 text-base leading-relaxed">
          <p>
            Мы стараемся следить за судьбой каждого питомца, который уходит из нашего приюта. И сегодня — хорошие новости от двух наших выпускников: Муси и Симбы.
          </p>

          <p className="font-semibold text-gray-800">Муся</p>
          <p>
            Муся уехала в новый дом три месяца назад. По словам хозяйки, первую неделю пряталась под кроватью — боялась. Но потом распробовала тёплый плед и больше из него не вылезает. Сейчас она — полноправная хозяйка дивана и лучший друг пятилетнего сына семьи.
          </p>

          <p className="font-semibold text-gray-800">Симба</p>
          <p>
            Симба освоился ещё быстрее. Через два дня уже залезал на плечи хозяину прямо во время видеозвонков. Коллеги оценили. Теперь Симба — неофициальный талисман одной небольшой IT-компании.
          </p>

          <div className="bg-[#F9E6D0] rounded-2xl p-6">
            <p>
              Если вы взяли питомца из нашего приюта и хотите поделиться историей — напишите нам на странице{' '}
              <Link to="/contacts" className="text-orange-500 hover:text-orange-600 underline">контактов</Link>.
              {' '}Мы публикуем все добрые истории.
            </p>
          </div>
        </div>

      </div>
    </main>
  )
}

export default News4
