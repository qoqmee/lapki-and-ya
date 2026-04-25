import { useState } from 'react'
import { Send, CheckCircle, PawPrint } from 'lucide-react'

function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false) // Добавлено состояние загрузки

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Показываем загрузку
    setIsLoading(true)
    
    // Имитация отправки на сервер (замените на реальный API запрос)
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', formData)
    
    // Скрываем загрузку и показываем успех
    setIsLoading(false)
    setSubmitted(true)
    
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[808px] flex items-center overflow-hidden">
        <img 
          src="./images/fon-1.png" 
          alt="Фон"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Мы - как большая семья
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              "Лапки и я" - это не просто благотворительный фонд, а безопасный дом для наших друзей меньших.
            </p>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all duration-300">
              Узнайте о нас подробнее
            </button>
          </div>
        </div>
      </section>

      {/* How to Help Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Как же нам помочь?
            </h2>
            <p className="text-xl text-gray-600">
              Вы можете выбрать один из вариантов или сразу все.
              <br />
              Мы будем рады любой поддержке!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Финансовая поддержка */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Финансовая поддержка
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Вы можете поддержать нас любой суммой, это порадует наших подопечных, ведь для них - это подарок в виде пакетика корма.
                </p>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300">
                  Пожертвовать
                </button>
              </div>
            </div>

            {/* Расскажите о нас */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Расскажите о нас!
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Поделитесь своим друзьям, родным или в соц. сетях. Это поможет нам развиваться в лучшую сторону и обеспечить наших друзей меньших.
                </p>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300">
                  Ссылки
                </button>
              </div>
            </div>

            {/* Волонтёрство */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Волонтёрство
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Вы можете помочь своим опытом, поучаствовать лично в приюте и сделать незабываемый день для наших любимых животных.
                </p>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300">
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Обратная связь
            </h2>
            <p className="text-xl text-gray-600">
              Будем благодарны за ваш отзыв, вопрос или предложение о сотрудничестве.
              <br />
              Напишите нам — мы всегда на связи!
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-700 mb-2">Спасибо!</h3>
              <p className="text-green-600">Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Ваше полное имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Ваш e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                  Выберите свое обращение
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  <option value="">Выберите тему</option>
                  <option value="question">Вопрос</option>
                  <option value="feedback">Отзыв</option>
                  <option value="cooperation">Сотрудничество</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Текст сообщения
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 disabled:bg-orange-300 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isLoading ? (
                  <>
                    {/* Анимированная лапка */}
                    <PawPrint size={24} className="animate-bounce" />
                    <span>Отправляем...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Отправить</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}

export default HomePage