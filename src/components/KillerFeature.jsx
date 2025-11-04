import { Search, Upload, Mic, Brain, Sparkles, Filter, Percent } from 'lucide-react'

export default function KillerFeature() {
  return (
    <section id="insights" className="relative mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0F1A3B] mb-2">Busca Inteligente Jurídica — Case Insights AI</h2>
            <p className="text-slate-600 mb-6">Seu diferencial competitivo: encontre precedentes vencedores, estime chances e gere argumentos fortes em segundos.</p>

            <div className="space-y-3">
              <div className="flex gap-2">
                <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 bg-white text-slate-800 hover:bg-slate-50">
                  <Search className="h-4 w-4 text-[#1A4BD8]" /> Texto livre
                </button>
                <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 bg-white text-slate-800 hover:bg-slate-50">
                  <Upload className="h-4 w-4 text-[#1A4BD8]" /> Upload doc
                </button>
                <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 bg-white text-slate-800 hover:bg-slate-50">
                  <Mic className="h-4 w-4 text-[#1A4BD8]" /> Áudio do cliente
                </button>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 bg-white">
                <Search className="h-5 w-5 text-slate-400" />
                <input className="flex-1 outline-none text-sm placeholder:text-slate-400" placeholder="Ex.: Ação de indenização por danos morais — atraso de voo" />
                <button className="px-3 py-1.5 text-sm font-medium rounded-md bg-[#1A4BD8] text-white">Buscar</button>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Filter className="h-4 w-4" />
                Filtros: Tribunal, Data, Tema, Juiz, Procurador, Valor
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-[#0F1A3B]">Resultados</h3>
              <div className="text-xs text-slate-500">10 encontrados</div>
            </div>
            <div className="p-4 space-y-4">
              <div className="p-4 rounded-lg border border-slate-200 bg-slate-50/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <Brain className="h-4 w-4 text-[#1A4BD8]" /> Similaridade com o caso
                  </div>
                  <div className="text-sm font-semibold text-[#0F1A3B]">89%</div>
                </div>
                <p className="mt-2 text-sm text-slate-700">Procedente em 1ª instância. O juiz acolheu principalmente a tese de falha na prestação do serviço e citou o art. 14 do CDC.</p>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-2 py-1 rounded bg-[#1A4BD8]/10 text-[#1A4BD8]">Tese: responsabilidade objetiva</span>
                  <span className="px-2 py-1 rounded bg-[#1A4BD8]/10 text-[#1A4BD8]">Art. 14 — CDC</span>
                  <span className="px-2 py-1 rounded bg-[#15CC6A]/10 text-[#0F1A3B]">Tempo médio: 120 dias</span>
                  <span className="px-2 py-1 rounded bg-[#15CC6A]/10 text-[#0F1A3B]">Média concedida: R$ 8.500</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <Sparkles className="h-4 w-4 text-[#15CC6A]" /> Chance estimada de êxito: <span className="font-semibold text-[#0F1A3B]">78%</span>
                  </div>
                  <button className="px-3 py-1.5 text-sm font-medium rounded-md border border-slate-200 bg-white hover:bg-slate-50">Adicionar à petição</button>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-slate-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">Resultado</span>
                  <span className="font-semibold text-[#0F1A3B]">Procedente</span>
                </div>
                <div className="mt-2 text-xs text-slate-600">Juiz: 12ª Vara Cível — TJSP • Publicado em 05/2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
