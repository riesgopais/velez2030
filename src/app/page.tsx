import Link from "next/link"
import { units } from "@/lib/data"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        {/* Diagonal blue shapes background */}
        <div
          className="absolute bottom-0 left-0 w-full h-72 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, #1a5fc8 0%, #2575d0 40%, transparent 40%)",
            opacity: 0.85,
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-3/4 h-52 pointer-events-none"
          style={{
            background:
              "linear-gradient(225deg, #0d3a7a 0%, #1a5fc8 55%, transparent 55%)",
            opacity: 0.6,
          }}
        />

        {/* Shield logo SVG */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="mb-8">
            <svg
              width="56"
              height="66"
              viewBox="0 0 56 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
            >
              <path
                d="M28 2L3 13V34C3 50 14 63 28 66C42 63 53 50 53 34V13L28 2Z"
                fill="#1a5fc8"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M28 2L3 13V34C3 50 14 63 28 66C42 63 53 50 53 34V13L28 2Z"
                fill="url(#shieldGrad)"
              />
              <defs>
                <linearGradient id="shieldGrad" x1="28" y1="2" x2="28" y2="66" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#2575d0" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#0d3a7a" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <text
                x="28"
                y="42"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="white"
                fontSize="22"
                fontWeight="900"
                fontFamily="system-ui"
              >
                V
              </text>
            </svg>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-2 leading-none">
            Plan de Comunicación
          </h1>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#2575d0] mb-5 leading-none">
            Vélez Sarsfield
          </h2>
          <p className="text-xl text-gray-300 mb-1">2026 – 2030</p>
          <p className="text-xs text-gray-500 mb-12 tracking-widest uppercase">
            Pablo Cabona Suárez · Consultor Estratégico
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-12 text-sm font-medium">
            {["Innovación", "IA", "Audiencias estratégicas", "Impacto"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full border border-[#1a5fc8]/60 text-[#3a8eff] text-xs tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href="#unidades"
            className="px-7 py-3 bg-[#1a5fc8] hover:bg-[#2575d0] text-white font-bold rounded-lg transition-colors text-sm tracking-wide"
          >
            Ver las 6 unidades estratégicas ↓
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid grid-cols-3 gap-6 text-center">
          {[
            { n: "6", label: "Unidades estratégicas" },
            { n: "50+", label: "Iniciativas definidas" },
            { n: "2030", label: "Horizonte del plan" },
          ].map(({ n, label }) => (
            <div
              key={label}
              className="border border-[#1a5fc8]/25 rounded-xl p-6 bg-[#030810]"
            >
              <div className="text-4xl md:text-5xl font-black text-[#2575d0] mb-2">{n}</div>
              <div className="text-gray-500 text-xs uppercase tracking-widest">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Units grid */}
      <section id="unidades" className="max-w-6xl mx-auto px-6 pb-28">
        <p className="text-xs uppercase tracking-widest text-gray-600 mb-8">
          Unidades estratégicas
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {units.map((unit) => (
            <Link
              key={unit.id}
              href={`/unidad/${unit.slug}`}
              className="group relative rounded-2xl overflow-hidden border border-[#1a5fc8]/15 hover:border-[#1a5fc8]/50 transition-all duration-300 bg-[#050a14] hover:bg-[#070f20]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a5fc8]/15 to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />

              <div className="relative p-7">
                <div className="text-[#1a5fc8] text-xs font-mono mb-4 tracking-widest">
                  {unit.number}
                </div>
                <h4 className="text-xl font-black mb-1">{unit.title}</h4>
                <p className="text-[#3a8eff] text-xs mb-4 font-medium uppercase tracking-wide">
                  {unit.subtitle}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                  {unit.description}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-gray-700">
                    {unit.initiatives.length} iniciativas
                  </span>
                  <span className="text-[#1a5fc8] text-xs group-hover:text-[#3a8eff] transition-colors font-medium">
                    Ver plan →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-10 text-center">
        <p className="text-white/70 text-sm mb-1">
          <span className="font-semibold">Pablo Cabona Suárez</span> · Consultor Estratégico
        </p>
        <p className="text-gray-600 text-xs">pablocabona@gmail.com · 11 2451-6417</p>
      </footer>
    </main>
  )
}
