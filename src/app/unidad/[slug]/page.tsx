import Link from "next/link"
import { notFound } from "next/navigation"
import { units } from "@/lib/data"

const statusLabel = {
  "planificado": "Planificado",
  "en-desarrollo": "En desarrollo",
  "activo": "Activo",
}

const statusColor = {
  "planificado": "border-gray-700 text-gray-500",
  "en-desarrollo": "border-[#1a5fc8]/60 text-[#3a8eff]",
  "activo": "border-green-700 text-green-400",
}

export function generateStaticParams() {
  return units.map((u) => ({ slug: u.slug }))
}

export default async function UnitPage(props: PageProps<"/unidad/[slug]">) {
  const { slug } = await props.params
  const unit = units.find((u) => u.slug === slug)
  if (!unit) notFound()

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/5">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, #1a5fc8 0%, #2575d0 30%, transparent 30%)",
            opacity: 0.15,
          }}
        />
        <div className="max-w-5xl mx-auto px-6 py-14 relative z-10">
          <Link
            href="/"
            className="text-xs text-gray-600 hover:text-gray-400 transition-colors mb-8 inline-block tracking-widest uppercase"
          >
            ← Volver
          </Link>
          <div className="text-[#1a5fc8] text-xs font-mono mb-3 tracking-widest">
            Unidad {unit.number}
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-2">{unit.title}</h1>
          <p className="text-[#3a8eff] text-sm font-medium uppercase tracking-widest mb-5">
            {unit.subtitle}
          </p>
          <p className="text-gray-400 text-base max-w-2xl leading-relaxed">
            {unit.description}
          </p>
          <div className="mt-6 text-xs text-gray-700 uppercase tracking-widest">
            {unit.initiatives.length} iniciativas
          </div>
        </div>
      </div>

      {/* Initiatives */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-5">
        {unit.initiatives.map((initiative) => (
          <div
            key={initiative.id}
            className="border border-[#1a5fc8]/15 rounded-2xl bg-[#050a14] overflow-hidden"
          >
            {/* Initiative header */}
            <div className="p-6 border-b border-white/5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-[#1a5fc8] text-xs font-mono">{initiative.id}</span>
                  <h3 className="text-lg font-bold">{initiative.title}</h3>
                </div>
                <span
                  className={`shrink-0 text-xs border rounded-full px-3 py-1 ${statusColor[initiative.status]}`}
                >
                  {statusLabel[initiative.status]}
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{initiative.description}</p>
            </div>

            {/* Initiative details */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
              {/* Team */}
              <div className="p-5">
                <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">Equipo</p>
                <p className="text-gray-300 text-sm">{initiative.team}</p>
              </div>

              {/* KPIs */}
              {initiative.kpis && initiative.kpis.length > 0 && (
                <div className="p-5">
                  <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">KPIs</p>
                  <ul className="space-y-1">
                    {initiative.kpis.map((kpi) => (
                      <li key={kpi} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-[#1a5fc8] mt-1 shrink-0">·</span>
                        {kpi}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tools */}
              {initiative.tools && initiative.tools.length > 0 && (
                <div className="p-5">
                  <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">Herramientas</p>
                  <div className="flex flex-wrap gap-2">
                    {initiative.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs bg-[#0d3a7a]/40 border border-[#1a5fc8]/20 text-[#3a8eff] px-2.5 py-1 rounded-md"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation between units */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <p className="text-xs text-gray-700 uppercase tracking-widest mb-4">Otras unidades</p>
        <div className="flex flex-wrap gap-3">
          {units
            .filter((u) => u.id !== unit.id)
            .map((u) => (
              <Link
                key={u.id}
                href={`/unidad/${u.slug}`}
                className="text-sm text-gray-500 hover:text-white border border-white/10 hover:border-[#1a5fc8]/40 rounded-lg px-4 py-2 transition-all"
              >
                {u.title}
              </Link>
            ))}
        </div>
      </div>

      <footer className="border-t border-white/5 px-6 py-8 text-center">
        <p className="text-gray-600 text-xs">
          Pablo Cabona Suárez · pablocabona@gmail.com · 11 2451-6417
        </p>
      </footer>
    </main>
  )
}
