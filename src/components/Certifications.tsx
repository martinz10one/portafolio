export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-[680px] mx-auto">
        <p className="font-mono text-sm text-accent mb-2">$ cat certs.md</p>
        <h2 className="text-2xl font-mono text-white mb-8">Certificaciones</h2>
        <div className="border border-white/10 p-5 hover:border-accent/40 transition-colors">
          <a
            href="https://www.freecodecamp.org/certification/martinzapata10/responsive-web-design"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 group"
          >
            <span className="text-accent font-mono text-sm mt-0.5">&gt;</span>
            <div>
              <p className="text-white text-sm font-mono group-hover:text-accent transition-colors">
                Responsive Web Design
              </p>
              <p className="text-muted text-xs mt-1">
                freeCodeCamp · 2025
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
