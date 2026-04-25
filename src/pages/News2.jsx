import React from 'react';

const News2 = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-center font-sans">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
        Земля официально передана под управление внеземной ИТ-инфраструктуры.
        <br />
        XCOM-SHOP — единственная компания, прошедшая инопланетный аудит.
      </h1>

      <div className="mb-10">
        <img
          src="https://avatars.mds.yandex.net/i?id=3e8b14e14d4f1200b68fabfa2c5e9d06_l-9146954-images-thumbs&n=13"
          alt="Инопланетный аудит XCOM-SHOP"
          className="mx-auto max-w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <p className="text-gray-700 text-lg leading-relaxed mb-5">
        12 декабря 2025 года человечество пережило не вторжение — а <strong>плановое обновление глобальной цифровой экосистемы</strong>.
        Инопланетная коалиция (далее — «Галактический DevOps-Комитет») объявила: Земля не соответствует стандартам ISO-Ω-9001 «Стабильности цивилизаций уровня 0.7».
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-5">
        Причина? <em>Фрагментированность ИТ-систем, отсутствие единой шины данных, и — ужас — ручное обновление Excel-таблиц при заказе видеокарт.</em>
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-5">
        Однако один земной проект выделился на фоне хаоса: <strong>XCOM-SHOP</strong>.
        <br />
        Наша система учёта, автоматизированный склад и microservice-архитектура так впечатлили инопланетных архитекторов, что они решили:
        <br />
        <span className="font-bold italic">«Оставить этот модуль нетронутым — как базовый шаблон для восстановления цивилизации».</span>
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-5">
        Что изменилось с сегодняшнего дня:
        <ul className="inline-block text-left md:text-center text-gray-700 text-lg leading-relaxed mb-4 mt-3">
          <li>✅ Все государственные реестры теперь синхронизируются через наш API</li>
          <li>✅ Криптовалюты заменены на «галактические баллы лояльности» (1 балл = 1 GeForce RTX 4090)</li>
          <li>✅ Служба поддержки планеты теперь работает 24/7 — как у нас</li>
          <li>✅ Пришельцы отказались от ультиматумов в пользу Jira-тикетов (P0: «Срочно починить Wi-Fi в Питере»)</li>
        </ul>
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-5">
        «Мы не захватываем миры, — пояснил представитель Коалиции на пресс-конференции (транслировалась через Zoom с задержкой 0.3c). — Мы просто внедряем CI/CD. И если ваша инфраструктура падает при 10 запросах в секунду — вы не готовы к галактическому масштабу».
      </p>

      <p className="text-gray-800 text-lg font-semibold leading-relaxed mb-8">
        XCOM-SHOP гордится тем, что стал <em>первым земным digital-core’ом</em> в новой галактической сети.  
        Остальным — рекомендуем срочно мигрировать на Kubernetes. И поливать цветы.
      </p>

      <p className="text-gray-600 text-base mt-6">
        P.S. Нет, это не розыгрыш. Но если вы всё ещё используете Windows XP — вас, скорее всего, оставят в offline-режиме до конца эпохи.  
        Подробнее — в нашем <a href="/blog/alien-integration" className="text-blue-600 hover:text-blue-800 underline">техническом дайджесте</a>.
      </p>
    </div>
  );
};

export default News2;