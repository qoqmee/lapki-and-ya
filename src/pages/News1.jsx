import { Link } from 'react-router-dom'

function News1() {
  return (
    <main className="bg-white min-h-screen py-12">
      <div className="max-w-2xl mx-auto px-6">

        <Link
          to="/news"
          className="inline-block text-orange-500 hover:text-orange-600 text-sm mb-8 transition-colors"
        >
          ← Все новости
        </Link>

        <p className="text-xs text-gray-400 mb-3">12 апреля 2025</p>

        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Кошка Маруся нашла дом 🐾
        </h1>

        <div className="rounded-3xl overflow-hidden mb-8">
          <img
            src="/images/news-1.png"
            alt="Маруся нашла дом"
            className="w-full h-72 object-cover"
          />
        </div>

        <div className="flex flex-col gap-5 text-gray-700 text-base leading-relaxed">
          <p>
            Мы с радостью сообщаем: наша рыжая красавица Маруся наконец обрела любящую семью! Два года она жила в приюте — ласковая, общительная, всегда первой бежала знакомиться с гостями. И вот её заметили.
          </p>
          <p>
            Молодая семья с маленькой дочкой пришла к нам в первый раз — просто посмотреть. Маруся запрыгнула на руки папе, уткнулась носом в плечо, и решение было принято само собой.
          </p>
          <p>
            Теперь у неё есть мягкий диван, солнечный подоконник и маленькая хозяйка, которая уже придумала для неё новое прозвище — Мурлыкина.
          </p>
          <div className="bg-[#F9E6D0] rounded-2xl p-6">
            <p className="font-semibold text-gray-800 mb-1">Хотите так же?</p>
            <p>
              Если вас тронула история Маруси — загляните на страницу{' '}
              <Link to="/cats" className="text-orange-500 hover:text-orange-600 underline">наших кошек</Link>.
              {' '}Там ждут ещё девять не менее замечательных историй.
            </p>
          </div>
        </div>

      </div>
    </main>
  )
}

export default News1
