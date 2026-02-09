"use client"

import scrollToId from "@/utils/scrollToId";
import Link from "next/link";

export default function Page() {
  return (
    <main className="relative overflow-hidden bg-[#f6f1e8] text-[#31382d]">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#dfe7d3]/70 blur-3xl" />
      <div className="pointer-events-none absolute top-96 -right-24 h-80 w-80 rounded-full bg-[#e9dcc9]/70 blur-3xl" />

      {/* Hero */}
      <section id="hero" className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:px-10 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Costure suas primeiras peças com
                <span className="block text-[#657455]">
                  segurança, clareza e orgulho
                </span>
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-[#596250]">
                Um guia completo para iniciantes que transforma medo em confiança.
                Aprenda do zero e avance até projetos reais, mesmo que nunca tenha
                usado uma máquina de costura.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => scrollToId('primeiro-ponto')}
                className="inline-flex items-center justify-center rounded-full bg-[#69775a] px-8 py-3.5 text-base font-semibold text-[#faf8f2] shadow-md shadow-[#69775a]/20 transition hover:-translate-y-0.5 hover:bg-[#5c6a4e]"
              >
                Quero meu guia agora
              </button>
              <button
                type="button"
                onClick={() => scrollToId('conteudo')}
                className="inline-flex items-center justify-center rounded-full border border-[#69775a]/60 bg-[#f8f4ec] px-8 py-3.5 text-base font-semibold text-[#5b684c] transition hover:bg-[#eef3e7]"
              >
                Ver o que vou aprender
              </button>            </div>
          </div>

          <div className="rounded-[2rem] border border-[#ddd2bf] bg-gradient-to-br from-[#fdfbf7] to-[#f3ecdf] p-8 shadow-xl shadow-[#c9bba3]/30 md:p-10">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6f7b5f]">
                Evolução passo a passo
              </p>

              <h2 className="text-2xl font-semibold leading-tight text-[#424b3a] md:text-3xl">
                Um método simples para sair do zero e começar a costurar com confiança
              </h2>

              <div className="space-y-3 text-[#56604d]">
                <div className="rounded-xl border border-[#e6dccd] bg-[#f8f3ea] px-4 py-3">
                  ✓ Exercícios práticos para dominar a máquina
                </div>
                <div className="rounded-xl border border-[#e6dccd] bg-[#f8f3ea] px-4 py-3">
                  ✓ Explicações claras sobre tecidos, agulhas e ajustes
                </div>
                <div className="rounded-xl border border-[#e6dccd] bg-[#f8f3ea] px-4 py-3">
                  ✓ Projetos progressivos para consolidar o aprendizado
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que aprender */}
      <section className="border-y border-[#e5dccc] bg-[#fcf8f1]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <div className="max-w-3xl space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Por que aprender corte e costura
            </h2>
            <p className="text-lg leading-relaxed text-[#5a6350]">
              Costurar é uma atividade criativa, econômica e relaxante.
              Você desenvolve autonomia, reduz desperdícios e cria peças
              úteis enquanto aprende no seu ritmo.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-[#e4d8c6] bg-[#f8f2e8] p-7 shadow-sm">
              <h3 className="text-xl font-semibold">Autonomia</h3>
              <p className="mt-3 text-[#5f6658]">
                Ajuste, conserte e crie sem depender de terceiros.
              </p>
            </article>

            <article className="rounded-2xl border border-[#e4d8c6] bg-[#f8f2e8] p-7 shadow-sm">
              <h3 className="text-xl font-semibold">Economia</h3>
              <p className="mt-3 text-[#5f6658]">
                Reaproveite tecidos e reduza gastos com costura externa.
              </p>
            </article>

            <article className="rounded-2xl border border-[#e4d8c6] bg-[#f8f2e8] p-7 shadow-sm">
              <h3 className="text-xl font-semibold">Satisfação pessoal</h3>
              <p className="mt-3 text-[#5f6658]">
                A sensação real de concluir algo feito por você.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Para quem é
            </h2>
            <p className="text-lg leading-relaxed text-[#58614e]">
              Pensado para iniciantes reais, com insegurança,
              pouca experiência ou medo de errar.
            </p>
          </div>

          <div className="rounded-3xl border border-[#ddd1be] bg-[#f4eddf] p-8 shadow-md">
            <ul className="space-y-3 text-[#4f5846]">
              <li>• Quem nunca usou máquina de costura</li>
              <li>• Quem quer aprender sem termos complicados</li>
              <li>• Quem deseja criar peças simples e funcionais</li>
              <li>• Quem busca hobby produtivo ou renda extra</li>
            </ul>
          </div>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section id="conteudo" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          O que você vai aprender
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-[#e3d8c8] bg-[#fbf7ef] p-7 shadow-sm">
            <h3 className="text-xl font-semibold">Introdução à costura</h3>
            <p className="mt-3 text-[#5a6350]">
              Criatividade, materiais essenciais e organização do espaço de costura.
            </p>
          </article>

          <article className="rounded-2xl border border-[#e3d8c8] bg-[#fbf7ef] p-7 shadow-sm">
            <h3 className="text-xl font-semibold">Máquina de costura</h3>
            <p className="mt-3 text-[#5a6350]">
              Partes da máquina, enfiar linha e exercícios para ganhar controle.
            </p>
          </article>

          <article className="rounded-2xl border border-[#e3d8c8] bg-[#fbf7ef] p-7 shadow-sm">
            <h3 className="text-xl font-semibold">Tecidos e materiais</h3>
            <p className="mt-3 text-[#5a6350]">
              Tecidos ideais, escolha correta de agulhas e preparo do tecido.
            </p>
          </article>

          <article className="rounded-2xl border border-[#e3d8c8] bg-[#fbf7ef] p-7 shadow-sm">
            <h3 className="text-xl font-semibold">Corte e moldes</h3>
            <p className="mt-3 text-[#5a6350]">
              Leitura de moldes simples e corte preciso sem erros comuns.
            </p>
          </article>

          <article className="rounded-2xl border border-[#e3d8c8] bg-[#fbf7ef] p-7 shadow-sm">
            <h3 className="text-xl font-semibold">Pontos essenciais</h3>
            <p className="mt-3 text-[#5a6350]">
              Ponto reto, ziguezague, retrocesso e ajuste de tensão.
            </p>
          </article>

          <article className="rounded-2xl border border-[#e3d8c8] bg-[#fbf7ef] p-7 shadow-sm">
            <h3 className="text-xl font-semibold">Projetos práticos</h3>
            <p className="mt-3 text-[#5a6350]">
              Fronha, almofada, sacola e saia simples do zero ao acabamento.
            </p>
          </article>
        </div>
      </section>

      {/* CTA final */}
      <section id="primeiro-ponto" className="mx-auto max-w-5xl px-6 py-24 text-center md:px-10">
        <div className="rounded-[2rem] border border-[#dacfbd] bg-[#f5efe3] px-8 py-14 shadow-lg shadow-[#d6c7ae]/30 md:px-12">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Dê o primeiro ponto hoje
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#59624f]">
            Você não precisa esperar a perfeição.
            Com método, prática guiada e projetos simples,
            a evolução acontece ponto a ponto.
          </p>

          <Link target="_blank"
            href="https://pay.cakto.com.br/pqhdt9i_760243"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-[#69775a] px-10 py-4 text-base font-semibold text-[#faf8f2] shadow-md shadow-[#69775a]/20 transition hover:-translate-y-0.5 hover:bg-[#5c6a4e]"
          >
            Garantir meu ebook agora
          </Link>        </div>
      </section>
      {/* Extra opcional */}
      <section className="border-y border-[#e3d9ca] bg-[#fcf9f4]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div className="space-y-5">
              <span className="inline-block rounded-full bg-[#e8efdf] px-4 py-1.5 text-sm font-semibold text-[#5c6a4e]">
                Extra opcional
              </span>

              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Coloque tudo em prática com 10 projetos prontos
              </h2>

              <p className="text-lg leading-relaxed text-[#5a6350]">
                Um ebook complementar com projetos simples, rápidos e lucrativos para
                você praticar, ganhar confiança e já começar a vender suas peças.
              </p>

              <ul className="space-y-2 text-[#4f5846]">
                <li>✓ Projetos que usam pouco tecido</li>
                <li>✓ Passo a passo ideal para iniciantes</li>
                <li>✓ Peças com alto valor percebido para venda</li>
                <li>✓ Ideias para uso pessoal ou renda extra</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-[#d8ccb8] bg-[#f6eee1] p-8 shadow-md">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#6a765a]">
                Condição especial
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                10 Projetos de Corte e Costura para Iniciantes
              </h3>

              <div className="mt-5 space-y-2">
                <p className="text-lg text-[#6b7460] line-through">
                  Valor avulso: R$ 27,90
                </p>
                <p className="text-4xl font-semibold text-[#495240]">
                  R$ 19,90
                </p>
                <p className="text-sm text-[#6b7460]">
                  Apenas ao comprar junto com o curso base
                </p>
              </div>

              <div className="mt-6 rounded-xl border border-[#e3d9ca] bg-[#fefcf9] px-5 py-4 text-sm text-[#5a6350]">
                💡 Este valor promocional só está disponível como complemento do curso.
                Não vendido separadamente neste preço.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
