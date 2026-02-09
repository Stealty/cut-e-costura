export default function Home() {
  return (
    <main className="bg-[#FAF7F2] text-[#2F2F2F]">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Aprenda Corte e Costura do Zero, no Seu Ritmo
          </h1>
          <p className="text-lg mb-8 text-gray-700">
            Um guia prático para quem sempre quis aprender a costurar em casa,
            mesmo sem experiência ou conhecimento prévio.
          </p>
          <a
            href="#oferta"
            className="inline-block bg-[#6B705C] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#5f6454] transition"
          >
            Quero aprender costura
          </a>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1582738412149-0ab9f7c5c6b1"
            alt="Pessoa costurando em casa com máquina de costura"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* POR QUE APRENDER */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Por que aprender corte e costura?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Desenvolva sua criatividade",
                text: "Transforme ideias em peças reais, feitas por você."
              },
              {
                title: "Economize no dia a dia",
                text: "Faça ajustes, consertos e pequenas reformas em casa."
              },
              {
                title: "Aprenda no seu tempo",
                text: "Sem pressão, no conforto da sua casa."
              },
              {
                title: "Hobby produtivo",
                text: "Uma atividade relaxante e gratificante."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#FAF7F2] p-6 rounded-xl shadow-sm"
              >
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Para quem é este guia
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
            <li>✔ Pessoas que nunca costuraram antes</li>
            <li>✔ Quem quer aprender costura em casa</li>
            <li>✔ Quem deseja usar a máquina de costura com segurança</li>
            <li>✔ Quem gosta de trabalhos manuais e aprendizado prático</li>
          </ul>
        </div>
      </section>

      {/* O QUE VAI APRENDER */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            O que você vai aprender
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <ul className="space-y-4 text-lg">
                <li>✔ Noções básicas de corte e costura</li>
                <li>✔ Tipos de tecidos e suas aplicações</li>
                <li>✔ Pontos básicos à mão e na máquina</li>
                <li>✔ Como usar a máquina de costura corretamente</li>
                <li>✔ Cuidados, ajustes e primeiros projetos simples</li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1593032465171-8bdbd54d9f42"
                alt="Tecidos e ferramentas de costura"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUTO */}
      <section id="oferta" className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Guia Digital de Corte e Costura para Iniciantes
          </h2>

          <p className="text-lg text-gray-700 mb-8">
            Um material educativo em formato digital (PDF), com explicações
            claras, linguagem simples e conteúdo direto ao ponto para quem está
            começando agora.
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-10">
            <p className="text-xl mb-4">
              Acesso imediato ao conteúdo completo
            </p>

            <p className="text-4xl font-bold text-[#6B705C] mb-6">
              R$ 29,90
            </p>

            <a
              href="https://SEU-LINK-DE-CHECKOUT-AQUI"
              className="inline-block bg-[#6B705C] text-white px-10 py-5 rounded-lg text-lg font-semibold hover:bg-[#5f6454] transition"
            >
              Acessar o guia agora
            </a>

            <p className="text-sm text-gray-500 mt-4">
              Conteúdo educativo • Acesso online • Para iniciantes
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2F2F2F] text-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
          <p>
            © {new Date().getFullYear()} • Conteúdo Educativo de Corte e Costura
          </p>
          <p className="text-sm">
            Este site oferece conteúdo educativo. Não prometemos resultados
            financeiros ou profissionais.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="/privacidade" className="hover:underline">
              Política de Privacidade
            </a>
            <a href="/termos" className="hover:underline">
              Termos de Uso
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
