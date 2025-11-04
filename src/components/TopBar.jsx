import { Shield, Brain, Search, FileText } from 'lucide-react'

export default function TopBar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-[#1A4BD8] text-white grid place-items-center shadow-sm">
            <Shield className="h-5 w-5" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-semibold text-[#0F1A3B]">lexVision</span>
            <span className="text-xs text-slate-500">Legal Operating System</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#dashboard" className="hover:text-[#1A4BD8]">Dashboard</a>
          <a href="#cases" className="hover:text-[#1A4BD8]">Casos</a>
          <a href="#automation" className="hover:text-[#1A4BD8]">Automação</a>
          <a href="#insights" className="hover:text-[#1A4BD8] flex items-center gap-1"><Brain className="h-4 w-4"/> Insights</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50">
            <Search className="h-4 w-4" />
            Buscar
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-md bg-[#1A4BD8] text-white shadow hover:brightness-110">
            <FileText className="h-4 w-4" />
            Entrar
          </button>
        </div>
      </div>
    </header>
  )
}
