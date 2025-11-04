import TopBar from './components/TopBar'
import ActionBar from './components/ActionBar'
import DashboardGrid from './components/DashboardGrid'
import KillerFeature from './components/KillerFeature'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-slate-50 text-slate-900">
      <TopBar />

      <main className="py-8">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <h1 className="text-3xl md:text-4xl font-semibold text-[#0F1A3B] leading-tight">lexVision — o sistema jurídico que prioriza automação, inteligência e resultados</h1>
                <p className="mt-3 text-slate-600">Controle prazos, gere petições com IA, acompanhe andamentos e vença mais casos — tudo em 3 a 5 cliques.</p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
                  <span className="px-2 py-1 rounded bg-[#1A4BD8]/10 text-[#1A4BD8]">Minimalista + Legal Tech</span>
                  <span className="px-2 py-1 rounded bg-[#15CC6A]/10 text-[#0F1A3B]">LGPD & Segurança</span>
                  <span className="px-2 py-1 rounded bg-[#E63E3E]/10 text-[#0F1A3B]">Zero burocracia</span>
                </div>
              </div>
              <div className="w-full md:w-auto">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm text-slate-600">Ações rápidas</div>
                  <div className="mt-2">
                    <ActionBar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <DashboardGrid />
        <KillerFeature />

        <section id="automation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[#0F1A3B]">Automação Jurídica — Smart Petitions</h3>
                <span className="text-xs text-slate-500">Editor estilo Docs</span>
              </div>
              <div className="p-4 space-y-3 text-sm">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded bg-[#1A4BD8]/10 text-[#1A4BD8]">Adicionar Jurisprudência vencedora</span>
                  <span className="px-2 py-1 rounded bg-[#1A4BD8]/10 text-[#1A4BD8]">Citar artigo relevante</span>
                  <span className="px-2 py-1 rounded bg-[#1A4BD8]/10 text-[#1A4BD8]">Analisar riscos da tese</span>
                </div>
                <div className="rounded-lg border border-slate-200 p-3 bg-white">
                  <div className="text-slate-500">Escreva aqui sua petição com sugestões inteligentes…</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-slate-600">
                    <span>Clareza: <span className="text-[#15CC6A] font-medium">Alta</span></span>
                    <span>Força Argumentativa: <span className="text-[#15CC6A] font-medium">Forte</span></span>
                    <span>Ajustes: <span className="text-[#1A4BD8] font-medium">3 sugeridos</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 text-sm font-medium rounded-md border border-slate-200 bg-white hover:bg-slate-50">Gerar PDF</button>
                    <button className="px-3 py-1.5 text-sm font-semibold rounded-md bg-[#1A4BD8] text-white hover:brightness-110">Protocolo (em breve)</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-[#1A4BD8]/10 via-white to-[#0F1A3B]/5 p-6">
              <h3 className="text-xl font-semibold text-[#0F1A3B]">Tudo a 1 clique de distância</h3>
              <p className="mt-2 text-slate-600">Documentos, tribunal, financeiro e tarefas do caso com acesso imediato. Fluxo enxuto para produtividade máxima.</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc list-inside">
                <li>Seleciona o tipo de petição</li>
                <li>Dados do caso entram automaticamente</li>
                <li>IA sugere argumentos, jurisprudência e cálculos</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} lexVision. Brasil • LGPD-compliant • Criptografia total • 2FA.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#1A4BD8]">Termos</a>
            <a href="#" className="hover:text-[#1A4BD8]">Privacidade</a>
            <a href="#" className="hover:text-[#1A4BD8]">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
