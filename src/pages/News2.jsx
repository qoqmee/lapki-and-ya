import { Link } from 'react-router-dom'

function News2() {
  return (
    <main className="bg-white min-h-screen py-12">
      <div className="max-w-2xl mx-auto px-6">

        <Link
          to="/news"
          className="inline-block text-orange-500 hover:text-orange-600 text-sm mb-8 transition-colors"
        >
          ← Все новости
        </Link>

        <p className="text-xs text-gray-400 mb-3">3 апреля 2025</p>

        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Как питомцы ладят друг с другом?
        </h1>

        <div className="rounded-3xl overflow-hidden mb-8">
          <img
            src="/images/news-3.png"
            alt="Питомцы вместе"
            className="w-full h-72 object-cover"
          />
        </div>

        <div className="flex flex-col gap-5 text-gray-700 text-base leading-relaxed">
          <p>
            Один из самых частых вопросов, который нам задают: «А можно взять кошку, если дома уже есть собака?» Отвечаем: можно, и даже нужно — если подойти к знакомству правильно.
          </p>

          <p className="font-semibold text-gray-800">Первые дни — самые важные</p>
          <p>
            Не торопите знакомство. Сначала держите животных в разных комнатах — пусть привыкнут к запахам друг друга через закрытую дверь. Обычно 3–5 дней достаточно, чтобы первый страх прошёл.
          </p>

          <p className="font-semibold text-gray-800">Первая встреча — на нейтральной территории</p>
          <p>
            Проводите её в месте, где ни один из питомцев не считает своим. Собаку держите на поводке. Кошке дайте возможность уйти в любой момент — это снизит её тревогу.
          </p>

          <p className="font-semibold text-gray-800">Еда и пространство — отдельно</p>
          <p>
            У каждого должна быть своя миска, своё спальное место, свой уголок. Конкуренция за ресурсы — главная причина конфликтов.
          </p>

          <div className="bg-[#F9E6D0] rounded-2xl p-6">
            <p>
              Если вам нужен совет по конкретной паре — пишите нам на странице{' '}
              <Link to="/contacts" className="text-orange-500 hover:text-orange-600 underline">контактов</Link>.
              {' '}Мы всегда поможем подобрать совместимых питомцев.
            </p>
          </div>
        </div>

      </div>
    </main>
  )
}

export default News2
