export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 pt-14"
    >
      <div className="max-w-[680px] mx-auto w-full">
        <p className="font-mono text-sm text-accent mb-6">
          $ whoami
        </p>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 mb-6">
          <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full border border-line overflow-hidden bg-dark-900 flex items-center justify-center">
            <img
              src="/foto.jpg"
              alt="Martin Eduardo Zapata Garcia"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none'
                const parent = (e.target as HTMLElement).parentElement
                if (parent) {
                  parent.innerHTML = '<span class="text-2xl text-muted font-mono">ME</span>'
                }
              }}
            />
          </div>
          <div className="min-w-0 text-center sm:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none mb-2">
              Martin Eduardo<br />Zapata Garcia
            </h1>
            <p className="text-lg md:text-xl text-muted">
              Backend Developer
            </p>
          </div>
        </div>

        <p className="text-muted max-w-[540px] leading-relaxed">
          Backend developer con conocimientos de frontend.
          Código limpio, trabajo en equipo.
        </p>
        <p className="text-muted mt-4 font-mono text-sm">
          $ Buscando mi primera oportunidad.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-3 mt-10">
          <a
            href="#projects"
            className="text-sm text-white border-b border-white hover:text-accent hover:border-accent transition-colors pb-0.5"
          >
            Proyectos →
          </a>
          <a
            href="#contact"
            className="text-sm text-muted border-b border-transparent hover:text-white hover:border-white transition-colors pb-0.5"
          >
            Contacto →
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            className="text-sm text-muted border-b border-transparent hover:text-accent hover:border-accent transition-colors pb-0.5"
          >
            Descargar CV ↓
          </a>
        </div>
      </div>
    </section>
  )
}
