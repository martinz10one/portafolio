export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-[680px] mx-auto">
        <p className="font-mono text-sm text-accent mb-2">$ cat contact.md</p>
        <h2 className="text-2xl font-mono text-white mb-6">Contacto</h2>
        <p className="text-[15px] text-muted leading-relaxed mb-4">
          Si tienes un proyecto, una oportunidad laboral o solo quieres
          conectar, estoy abierto a nuevas oportunidades.
        </p>
        <p className="text-sm text-muted font-mono mb-8">
          <span className="text-accent">$</span> descargar CV:{' '}
          <a href="/cv.pdf" target="_blank" className="border-b border-transparent hover:border-accent hover:text-accent transition-colors">cv.pdf</a>
        </p>
        <div className="flex flex-col gap-3 text-sm">
          <a
            href="mailto:martinnnzapata7@gmail.com"
            className="text-muted hover:text-white transition-colors"
          >
            <span className="text-accent font-mono">$</span> mail{' '}
            <span className="border-b border-transparent hover:border-white transition-colors">
              martinnnzapata7@gmail.com
            </span>
          </a>
          <a
            href="https://github.com/martinz10one"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-white transition-colors"
          >
            <span className="text-accent font-mono">$</span> github{' '}
            <span className="border-b border-transparent hover:border-white transition-colors">
              /martinz10one
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/martin-zapata-779086393/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-white transition-colors"
          >
            <span className="text-accent font-mono">$</span> linkedin{' '}
            <span className="border-b border-transparent hover:border-white transition-colors">
              martin-zapata
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
