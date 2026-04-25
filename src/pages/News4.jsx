import React from 'react';

const News4 = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-center font-sans">
      
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
        А вы знали, что работать у нас +вайб и никаких выгораний?
      </h1>

      <div className="mb-10">
        <img
          src="https://sun9-9.userapi.com/impf/r-rBwOT40aF7Vu37HcMqZnxew2osuYHl-RweBA/ddW0KET5yO4.jpg?size=1818x606&quality=95&crop=0,0,1590,530&sign=715b06345e8b83a2d793466094768f9a&type=cover_group"
          alt="Команда XCOM-SHOP"
          className="mx-auto max-w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <p className="text-gray-700 text-lg leading-relaxed mb-5">
        Команда <strong className="font-semibold">XCOM-SHOP</strong> с гордостью объявляет — мы открываем двери для новых коллег!
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-5">
        Мы — не просто интернет-магазин электроники и техники. Мы — сообщество энтузиастов, гиков, профессионалов и просто хороших людей, которые верят, что работа может быть не только источником дохода, но и местом, где рождаются идеи, дружба и вдохновение.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-5">
        У нас нет «серых» будней. Каждый день — это возможность что-то улучшить, удивить клиента, поддержать коллегу и, конечно, посмеяться над свежим мемом в общем чате. Мы ценим баланс: никакого переработок, никакого микроменеджмента, только честные цели и искренняя поддержка.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-5">
        В данный момент мы ищем активных, позитивных и целеустремлённых людей на позиции:
      </p>

      <ul className="inline-block text-gray-700 text-lg leading-relaxed text-left md:text-center mb-6">
        <li className="mb-2">• Специалист по работе с клиентами</li>
        <li className="mb-2">• Контент-менеджер (любим тех, кто умеет шутить про геймпады и SSD)</li>
        <li className="mb-2">• Оператор склада с любовью к порядку</li>
        <li className="mb-2">• IT-специалист, готовый улучшать наши внутренние процессы</li>
      </ul>

      <p className="text-gray-700 text-lg leading-relaxed mb-5">
        Если ты хочешь работать в атмосфере доверия, уважения и лёгкого tech-хаоса, то XCOM-SHOP — твой новый профессиональный дом.
      </p>

      <p className="text-gray-800 text-lg font-semibold leading-relaxed mb-8">
        Присоединяйся к нам — здесь не просто платят зарплату, здесь растят профессионалов и друзей.
      </p>

      <p className="text-gray-600 text-base mt-6">
        Подробнее о вакансиях — на нашем сайте или по почте{' '}
        <a
          href="mailto:rar@xcom.ru"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          rar@xcom.ru
        </a>
        .
      </p>
    </div>
  );
};

export default News4;