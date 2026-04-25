import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header = () => {
  const navLinks = [
    { name: 'Подарить дом', href: '/givehome' },
    { name: 'Партнеры', href: '/partners' },
    { name: 'Контакты', href: '/contacts' },
    { name: 'О нас', href: '/about' },
    { name: 'Новости', href: '/news' },
    { name: 'Документы', href: '/documents' },
    { name: 'Нашёл семью', href: '/newhome' }
  ]

  return (
    <header className="bg-[#FFF3C8]">
      {/* Верхняя строка: соцсети слева, логотип + название центр, кнопка справа */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Соц сети слева - фиксированная ширина */}
            <div className="flex items-center space-x-4 w-32">
              <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>

            {/* Логотип и название по центру (логотип сверху) */}
            <Link to="/" className="flex flex-col items-center">
              <img 
                src="/images/logo-icon.png"
                alt="Лапки и я"
                className="h-25 w-auto mb-1"
              />
            </Link>

            {/* Кнопка Поддержать справа - фиксированная ширина */}
            <div className="w-32 flex justify-end">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap">
                Поддержать
              </button>
            </div>
          </div>
        </div>
        
        {/* Полосочка по середине - цвета A1A1A1 */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-[1px] bg-[#A1A1A1]"></div>
      </div>

      {/* Нижняя навигация: ссылки + Нашёл семью (тоже ссылка) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-8 py-4 flex-wrap">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-600 hover:text-orange-500 text-sm font-medium transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
    </header>
  )
}

export default Header