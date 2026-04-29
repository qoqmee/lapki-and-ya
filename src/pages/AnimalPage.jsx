import { useParams, Link } from 'react-router-dom'
import { dogs, cats } from '../data/animals'

function AnimalPage({ type }) {
  const { id } = useParams()
  const list = type === 'dog' ? dogs : cats
  const animal = list.find((a) => a.id === Number(id))
  const backPath = type === 'dog' ? '/dogs' : '/cats'
  const backLabel = type === 'dog' ? 'Наши собаки' : 'Наши коты и кошки'

  if (!animal) {
    return (
      <main className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <p className="text-2xl mb-6">Животное не найдено</p>
          <Link to={backPath} className="text-amber-400 underline hover:text-amber-300">
            ← Вернуться назад
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-white min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-6">

        {/* Кнопка назад */}
        <Link
          to={backPath}
          className="inline-block text-orange-500 hover:text-orange-600 text-sm mb-8 transition-colors"
        >
          ← {backLabel}
        </Link>

        {/* Заголовок */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Познакомьтесь, это <em className="not-italic text-amber-500">{animal.name}</em>!
        </h1>

        {/* Основная карточка */}
        <div className="bg-[#F9E6D0] rounded-3xl p-10 flex gap-10 items-center mb-10">
          {/* Фото */}
          <div className="flex-shrink-0">
            <div className="w-52 h-52 rounded-full overflow-hidden bg-[#E8C99A] ring-4 ring-white shadow-lg">
              <img
                src={animal.photo}
                alt={animal.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = `https://placehold.co/208x208/e8c99a/a0785a?text=${encodeURIComponent(animal.name[0])}`
                }}
              />
            </div>
          </div>

          {/* Информация */}
          <div className="flex flex-col gap-4 text-gray-800 text-base leading-relaxed">
            <p>
              <span className="font-semibold">Имя и возраст:</span>{' '}
              {animal.name}, {animal.age}
            </p>
            <p>
              <span className="font-semibold">Порода:</span>{' '}
              {animal.breed}
            </p>
            <p>
              <span className="font-semibold">Характер:</span>{' '}
              {animal.character}
            </p>
            <p>
              <span className="font-semibold">Что любит:</span>{' '}
              {animal.likes}
            </p>
            <p>
              <span className="font-semibold">Что не любит:</span>{' '}
              {animal.dislikes}
            </p>
          </div>
        </div>

        {/* Призыв */}
        <p className="text-gray-700 text-center text-lg font-medium">
          Если хотите познакомиться ближе, звоните или приезжайте к нам!
        </p>

        <div className="flex justify-center mt-6">
          <Link
            to="/contacts"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
          >
            Связаться с нами
          </Link>
        </div>
      </div>
    </main>
  )
}

export default AnimalPage
