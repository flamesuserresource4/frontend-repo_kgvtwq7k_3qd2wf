import { Clock, AlertTriangle, CheckCircle2, TrendingUp, FileText, MessageSquare } from 'lucide-react'

function Card({ title, children, accent }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-[#0F1A3B]">{title}</h3>
        {accent}
      </div>
      <div className="p-4 text-sm text-slate-700">
        {children}
      </div>
    </div>
  )
}

export default function DashboardGrid() {
  return (
    <section id="dashboard" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Próximos Prazos" accent={<Clock className="h-4 w-4 text-[#E63E3E]" />}> 
          <ul className="space-y-2">
            <li className="flex items-center justify-between">
              <span>Manifestação sobre laudo</span>
              <span className="text-xs text-white bg-[#E63E3E] px-2 py-0.5 rounded">Hoje</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Apresentar contestação</span>
              <span className="text-xs text-white bg-[#E63E3E] px-2 py-0.5 rounded">Amanhã</span>
            </li>
          </ul>
        </Card>

        <Card title="Andamentos recentes" accent={<MessageSquare className="h-4 w-4 text-[#1A4BD8]" />}> 
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#15CC6A] mt-0.5" />
              <span>Juntada de petição — protocolo automático realizado.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#15CC6A] mt-0.5" />
              <span>Intimação recebida — prazo de 15 dias aberto.</span>
            </li>
          </ul>
        </Card>

        <Card title="Casos críticos" accent={<AlertTriangle className="h-4 w-4 text-[#E63E3E]" />}> 
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>AC 0001234-56.2024</span>
              <span className="text-xs text-[#E63E3E] font-medium">Alto risco</span>
            </div>
            <div className="flex items-center justify-between">
              <span>RT 223344-11.2023</span>
              <span className="text-xs text-[#E63E3E] font-medium">Urgente</span>
            </div>
          </div>
        </Card>

        <Card title="Tarefas e Audiências" accent={<FileText className="h-4 w-4 text-[#1A4BD8]" />}> 
          <ul className="space-y-2">
            <li className="flex items-center justify-between">
              <span>Preparar quesitos periciais</span>
              <span className="text-xs text-slate-500">Hoje 16:00</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Audiência de conciliação</span>
              <span className="text-xs text-slate-500">Qui 10:30</span>
            </li>
          </ul>
        </Card>

        <Card title="Financeiro rápido" accent={<TrendingUp className="h-4 w-4 text-[#15CC6A]" />}> 
          <div className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span>Honorários previstos (mês)</span>
              <span className="font-semibold text-[#0F1A3B]">R$ 42.800,00</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Contratos de êxito</span>
              <span>+12%</span>
            </div>
          </div>
        </Card>

        <Card title="Atividade do Escritório" accent={<Clock className="h-4 w-4 text-[#1A4BD8]" />}> 
          <ul className="space-y-2">
            <li className="flex items-center justify-between">
              <span>Maria anexou documento no caso RT 223344</span>
              <span className="text-xs text-slate-500">há 8 min</span>
            </li>
            <li className="flex items-center justify-between">
              <span>João gerou petição automática</span>
              <span className="text-xs text-slate-500">há 21 min</span>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  )
}
