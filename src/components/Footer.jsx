import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#FFF3C8] border-t border-gray-200 py-8 ">
      <div className="container mx-auto px-4">
        {/* Иконка по центру (ссылка на главную) */}
        <div className="flex justify-center mb-4">
          <Link to="/" className="inline-block">
            <img 
              src="/images/logo-icon.png"  // замените на путь к вашей иконке
              alt="Лапки и я"
              className="h-25 w-auto"
            />
          </Link>
        </div>

          <p className="text-gray-500 text-sm text-center">
            © 2000—2026. Благотворительный фонд помощи животным «Лапки и я». <br/> Создатель: Шарганова Елизавета
          </p>
        </div>
    </footer>
  )
}

export default Footer