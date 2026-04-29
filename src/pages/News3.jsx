import { Link } from 'react-router-dom'

function News3() {
  return (
    <main className="bg-white min-h-screen py-12">
      <div className="max-w-2xl mx-auto px-6">

        <Link
          to="/news"
          className="inline-block text-orange-500 hover:text-orange-600 text-sm mb-8 transition-colors"
        >
          ← Все новости
        </Link>

        <p className="text-xs text-gray-400 mb-3">28 марта 2025</p>

        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Смешные моменты с котиками
        </h1>

        <div className="rounded-3xl overflow-hidden mb-8">
          <img
            src="/images/news-2.png"
            alt="Смешные коты"
            className="w-full h-72 object-cover"
          />
        </div>

        <div className="flex flex-col gap-5 text-gray-700 text-base leading-relaxed">
          <p>
            Жизнь в приюте — это не только ответственность и уход. Это ещё и бесконечный источник радости. Наши котики каждый день устраивают что-нибудь такое, что хочется смеяться и плакать одновременно — от умиления.
          </p>
          <p>
            Малышка уже третью неделю пытается поймать луч от фонарика. Каждый раз с одинаковым серьёзным выражением морды — как будто на этот раз точно получится.
          </p>
          <p>
            Сфинксик категорически отказывается спать в своей корзинке и каждое утро обнаруживается завёрнутым в полотенце на батарее. Мы уже не пытаемся переубеждать.
          </p>
          <p>
            Симба научился открывать дверь подсобки. Просто однажды взял — и открыл. Теперь ходит туда по собственному расписанию.
          </p>
          <div className="bg-[#F9E6D0] rounded-2xl p-6">
            <p>
              Хотите видеть таких героев каждый день у себя дома? Познакомьтесь с нашими{' '}
              <Link to="/cats" className="text-orange-500 hover:text-orange-600 underline">кошками</Link>
              {' '}— каждая со своим характером и историей.
            </p>
          </div>
        </div>

      </div>
    </main>
  )
}

export default News3
