export default function Certifications() {
  const certs = [
    {
      title: 'Responsive Web Design',
      org: 'freeCodeCamp',
      year: '2025',
      img: '/cert-responsive-web-design.png',
      url: 'https://www.freecodecamp.org/certification/martinzapata10/responsive-web-design',
    },
    {
      title: 'Claude 101',
      org: 'Anthropic Education',
      year: '2026',
      img: '/claude.png',
      url: 'https://verify.skilljar.com/c/a757wni5ycv3',
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-[680px] mx-auto">
        <p className="font-mono text-sm text-accent mb-2">$ cat certs.md</p>
        <h2 className="text-2xl font-mono text-white mb-8">Certificaciones</h2>

        <div className="space-y-6">
          {certs.map((cert) => (
            <div key={cert.title} className="border border-white/10 p-4 hover:border-accent/40 transition-colors">
              <div className="flex items-start gap-4">
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="shrink-0">
                  <img
                    src={cert.img}
                    alt={`${cert.title} certificate`}
                    className="w-[120px] border border-white/10"
                  />
                </a>
                <div className="flex flex-col min-w-0 gap-1.5">
                  <p className="text-white text-sm font-mono leading-tight">{cert.title}</p>
                  <p className="text-muted text-xs">{cert.org} · {cert.year}</p>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-sm font-mono border-b border-transparent hover:border-accent transition-colors self-start mt-1"
                  >
                    ver certificado →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
