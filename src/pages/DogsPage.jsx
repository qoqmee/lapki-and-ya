import { Link } from 'react-router-dom'
import { dogs } from '../data/animals'

function DogsPage() {
  return (
    <main className="bg-white min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Наши собаки
        </h1>

        <div className="grid grid-cols-3 gap-5">
          {dogs.map((dog) => (
            <Link key={dog.id} to={`/dogs/${dog.id}`} className="group">
              <div className="bg-[#F9E6D0] rounded-3xl flex flex-col items-center pt-8 pb-10 px-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="w-28 h-28 rounded-full overflow-hidden bg-[#F0CCAA] mb-4 ring-4 ring-white shadow">
                  <img
                    src={dog.photo}
                    alt={dog.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = `https://placehold.co/112x112/e8c99a/a0785a?text=${encodeURIComponent(dog.name[0])}`
                    }}
                  />
                </div>
                <p className="font-semibold text-gray-700 text-center text-sm">{dog.name}</p>
                <p className="text-xs text-gray-500 text-center mt-1">{dog.breed}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

export default DogsPage
