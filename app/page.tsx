'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar - Compact with Hover Expansion */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300 hover:shadow-md group">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2 group-hover:py-3 transition-all duration-300">
          <div className="flex justify-between items-center">
            {/* Logo with Badge */}
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h1 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                    Diego Vello
                  </h1>
                  <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700 animate-pulse">
                    • Online
                  </span>
                </div>
                <span className="text-xs text-gray-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  Psicólogo • CRP 06/179471
                </span>
              </div>
            </div>

            {/* Compact Menu */}
            <div className="flex items-center gap-1 sm:gap-2">
              <a href="#about" className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm text-gray-600 hover:text-green-600 transition-all duration-300 font-medium relative group/link hidden md:inline-block">
                Sobre
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-500 to-teal-500 group-hover/link:w-full transition-all duration-300"></span>
              </a>
              <a href="#services" className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm text-gray-600 hover:text-green-600 transition-all duration-300 font-medium relative group/link hidden md:inline-block">
                Serviços
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-500 to-teal-500 group-hover/link:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="ml-2 w-9 h-9 sm:w-auto sm:h-auto sm:px-6 sm:py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center sm:gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="hidden sm:inline">Contato</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/*  <div className="mb-6 inline-block">
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            🏳️‍🌈 Psicologia Inclusiva
          </span>
        </div>*/}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Seu Espaço Seguro de Acolhimento
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Sou psicólogo e meu compromisso é oferecer um espaço seguro, acolhedor e livre de preconceitos para sua jornada de autoconhecimento e bem-estar.
        </p>
        <div className="flex flex-col gap-4 justify-center items-center mb-12">
          <a href="https://wa.me/5511997599369" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition inline-flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Agendar Consulta
          </a>
          <a href="#about" className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition inline-block">
            Saiba Mais
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-green-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Sobre Mim</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop" 
                  alt="Psicólogo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
Psicólogo com experiência na intervenção comportamental com crianças com Transtorno do Espectro Autista (TEA) e atuação clínica no atendimento a adultos. Trabalha com orientação parental, ensino de habilidades sociais, supervisão e manejo de comportamentos, além de atendimentos clínicos em demandas de ansiedade e regulação emocional, fundamentado na Análise do Comportamento.              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Acredito que toda pessoa merece ser ouvida e compreendida em sua totalidade, sem julgamentos. Trabalho para criar um ambiente onde você possa ser autenticamente você mesmo.
              </p>
          
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Atendimento Clínico</h2>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 md:p-12 rounded-2xl shadow-lg border border-green-100">
            <div className="text-center mb-6">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Terapia Individual</h3>
            </div>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              <p>
                Atendimento clínico individual para adultos e adolescentes, com foco na promoção da saúde mental e bem-estar emocional.
              </p>
              <p>
                Trabalho com demandas relacionadas a <strong>ansiedade, regulação emocional, autoestima, relacionamentos interpessoais</strong> e outras questões que impactam a qualidade de vida em um processo terapêutico individualizado.
              </p>
              <p>
                Um espaço seguro, acolhedor e livre de julgamentos para construir repertórios mais saudáveis e funcionais para sua vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section                     Ofereço atendimento clínico individual para adultos com foco na promoção da saúde mental e bem-estar emocional. As sessões são pautadas nos princípios da <strong>Análise do Comportamento</strong>, abordagem científica que busca compreender o comportamento humano e suas relações com o ambiente.
             Meu compromisso é proporcionar um espaço inclusivo, acolhedor e livre de julgamentos, onde você pode explorar seus pensamentos, sentimentos e comportamentos de forma genuína, construindo repertórios mais saudáveis e funcionais para sua vida.
                Trabalho com demandas relacionadas a <strong>ansiedade, regulação emocional, autoestima, relacionamentos interpessoais</strong> e outras questões que impactam a qualidade de vida. O processo terapêutico é individualizado, respeitando a singularidade de cada pessoa e suas necessidades específicas.

      <section id="testimonials" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Depoimentos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex gap-1 mb-4">
                {'⭐⭐⭐⭐⭐'.split('').map((star, i) => <span key={i}>{star}</span>)}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "Encontrei em Diego um profissional que realmente me ouve e compreende. Sem julgamentos, apenas acolhimento genuíno."
              </p>
              <p className="font-semibold text-gray-900">Maria</p>
              <p className="text-sm text-gray-600">Paciente há 2 anos</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex gap-1 mb-4">
                {'⭐⭐⭐⭐⭐'.split('').map((star, i) => <span key={i}>{star}</span>)}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "A terapia com Diego transformou minha relação comigo mesmo. Recomendo para todos que buscam crescimento pessoal."
              </p>
              <p className="font-semibold text-gray-900">Lucas</p>
              <p className="text-sm text-gray-600">Paciente há 1 ano</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex gap-1 mb-4">
                {'⭐⭐⭐⭐⭐'.split('').map((star, i) => <span key={i}>{star}</span>)}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "Um profissional que faz toda diferença. Espaço seguro, confidencial e totalmente acolhedor."
              </p>
              <p className="font-semibold text-gray-900">Ana</p>
              <p className="text-sm text-gray-600">Paciente há 6 meses</p>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Contact Section */}
      <section id="contact" className="bg-green-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Agende sua Consulta</h2>
          <div className="bg-gradient-to-r from-green-600 to-teal-600 p-8 rounded-lg text-white text-center">
            <p className="text-xl mb-6 leading-relaxed">
              Estou pronto para ajudá-lo em sua jornada. Clique no botão abaixo para agendar sua primeira consulta gratuitamente.
            </p>
            <div className="flex flex-col gap-4 justify-center items-center">
              <a href="https://wa.me/5511997599369" target="_blank" rel="noopener noreferrer" className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition inline-flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Psicologia Diego Vello</h3>
              <p className="text-gray-400">Psicólogo Clínico</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/diegotrainmind" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Diego Vello. Todos os direitos reservados. | Psicologia Inclusiva</p>
          </div>
        </div>
      </footer>
    </div>
  );

}
