import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

function AboutPage() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqItems = [
    {
      question: "Кто такие \"Лапки и я\"?",
      answer: "«Лапки и я» — это благотворительный фонд помощи бездомным животным. Мы спасаем, лечим и находим новые дома для кошек и собак, которые оказались на улице или в беде."
    },
    {
      question: "Почему именно благотворительный фонд?",
      answer: "Потому что мы хотим системно помогать животным: не только спасать и лечить, но и строить приюты, проводить стерилизацию, искать ответственных хозяев и менять отношение общества к бездомным животным."
    },
    {
      question: "Как помочь животным лично или дистанционно?",
      answer: "Лично: стать волонтёром, приехать в приют, помочь с выгулом или уборкой. Дистанционно: сделать пожертвование, рассказать о нас в соцсетях, стать партнёром или купить необходимые вещи для животных из нашего списка."
    },
    {
      question: "Куда уходят пожертвования?",
      answer: "Все пожертвования идут на лечение, корм, содержание животных, работу ветеринаров, аренду помещений, стерилизацию, вакцинацию, а также на программы поиска новых семей и просветительскую деятельность."
    },
    {
      question: "Мы выбрали питомца и хотим забрать, что нужно делать?",
      answer: "Свяжитесь с нами по телефону или почте, мы расскажем о процедуре оформления: подписание договора ответственного содержания, знакомство с животным, подготовка дома и передача питомца в новую семью."
    },
    {
      question: "Я хочу оставить пожелание или отзыв лично, куда можно написать?",
      answer: "Вы можете написать нам на почту lapkiandya@yandex.ru, в сообщения в социальных сетях или оставить отзыв в форме обратной связи на нашем сайте."
    }
  ]

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <main>
      {/* Hero Section - текст СЛЕВА */}
      <section className="py-20">
            <h1 className="text-5xl text-center font-bold text-gray-800 mb-6">
              О нас - В вопросительном формате
            </h1>
      </section>

      {/* Content Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              {/* Левая часть - текст и картинка */}
              <div className="flex-1">
                <div className="space-y-8">
                  <p className="text-gray-700 leading-relaxed">
                  Мы решили разнообразить и сделать "о нас" более информативным по вопросам от наших партнёров и людей, которые нас поддерживают.
                  </p>
                  {/* Картинка снизу слева */}
                  <div className="mt-8">
                    <img
                      src="/images/about-left-image.jpg"
                      alt="Наша команда"
                      className="w-full rounded-2xl shadow-lg"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/500x400?text=Наша+команда";
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Правая часть - выпадающий список */}
              <div className="flex-1">
                <div className="space-y-4">
                  {faqItems.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <button
                        onClick={() => toggleQuestion(index)}
                        className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-lg md:text-xl font-semibold text-gray-800">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-orange-500 flex-shrink-0 transition-transform duration-300 ${
                            openIndex === index ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openIndex === index ? 'max-h-96' : 'max-h-0'
                        }`}
                      >
                        <div className="p-6 pt-0 border-t border-gray-100">
                          <p className="text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage