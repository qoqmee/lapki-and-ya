function DocumentsPage() {
  const certificates = [
    {
      id: 1,
      image: "./images/certificate.png",
      alt: "Сертификат 1"
    },
    {
      id: 2,
      image: "./images/certificate (2).png",
      alt: "Сертификат 2"
    }
  ]

  return (
    <main>
<section className="relative py-15 overflow-hidden">
  <img 
    src="./images/fon-5.png" 
    alt="Фон"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/50"></div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 text-center">
        Наши документы
      </h1>
      
      <div className="space-y-6 text-center">
        <p className="text-white/90 leading-relaxed text-base md:text-lg">
          Благотворительный фонд «Лапки и я» осуществляет свою деятельность на принципах <span className="text-orange-300 font-semibold">открытости и ответственности</span>. 
          Организация исходит из того, что забота о животных требует не только эмоционального участия, но и выстроенной системы работы. 
          В связи с этим фондом публикуются ключевые документы, подтверждающие официальный статус благотворительной организации 
          и соблюдение всех установленных требований законодательства.
        </p>

        <p className="text-white/90 leading-relaxed">
          В соответствующем разделе представлены: свидетельство о государственной регистрации фонда, акты о проведении 
          благотворительных программ, а также документы, регламентирующие сотрудничество с ветеринарными клиниками и приютами для животных.
        </p>

        <div>
          <p className="text-white/90 leading-relaxed mb-4">
            <span className="text-orange-300 font-semibold">Основные направления деятельности фонда</span> включают:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <span className="text-orange-400 text-xl"></span>
              <span className="text-white/85">обеспечение ветеринарной помощи</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-orange-400 text-xl"></span>
              <span className="text-white/85">организацию передержки и реабилитации</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-orange-400 text-xl"></span>
              <span className="text-white/85">содействие в устройстве в постоянные дома</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-orange-400 text-xl"></span>
              <span className="text-white/85">просветительскую работу</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-orange-400 text-xl"></span>
              <span className="text-white/85">предоставление отчётности по всем направлениям</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-orange-400 text-xl"></span>
              <span className="text-white/85">помощь в экстренных ситуациях</span>
            </div>
          </div>
        </div>

        <div className="py-6">
          <p className="text-white/90 leading-relaxed text-base md:text-lg font-medium text-center">
            <span className="text-orange-300 font-semibold">Наша миссия</span>
          </p>
          <p className="text-white/90 leading-relaxed text-base md:text-lg font-medium text-center mt-2">
            Целью фонда является не просто оказание помощи, а её предоставление на профессиональной, открытой и эффективной основе. 
            Организация дорожит доверием благополучателей, партнёров и общества и принимает на себя обязательства по его оправданию.
          </p>
        </div>

        <p className="text-white/90 leading-relaxed py-4 border-t border-white/20">
          С документами, подтверждающими ответственный и системный подход фонда к своей деятельности, можно ознакомиться ниже.
        </p>
      </div>
    </div>
  </div>
</section>
      {/* Certificates Section с фоновым изображением */}
      <section className="relative py-20 overflow-hidden pb-50">
        <img 
          src="./images/fon-6.png" 
          alt="Фон"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              Наши сертификаты
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certificates.map((cert) => (
                <div key={cert.id} className="rounded-2xl overflow-hidden shadow-lg bg-white">
                  <img 
                    src={cert.image} 
                    alt={cert.alt}
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/600x400?text=Сертификат";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DocumentsPage