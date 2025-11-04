import { Plus, User, FileText } from 'lucide-react'

export default function ActionBar() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#0F1A3B]">Legal Performance Hub</h1>
          <div className="flex flex-wrap items-center gap-2">
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 bg-white text-slate-800 hover:bg-slate-50">
              <Plus className="h-4 w-4 text-[#1A4BD8]" />
              Novo Caso
            </button>
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 bg-white text-slate-800 hover:bg-slate-50">
              <User className="h-4 w-4 text-[#1A4BD8]" />
              Novo Cliente
            </button>
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[#1A4BD8] text-white shadow hover:brightness-110">
              <FileText className="h-4 w-4" />
              Nova Petição
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
