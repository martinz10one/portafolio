export interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    title: 'Ecommerce Monitor',
    description:
      'Demo de un sistema que monitorea cambios de precios en e-commerce. API REST con Express, frontend para visualizar cambios. El scraper real (Python + Playwright) funciona solo de forma local.',
    tech: ['Python', 'Node.js', 'Express', 'Playwright', 'Docker'],
    github: 'https://github.com/martinz10one/ecommerce-monitor',
    demo: 'https://ecommerce-monitor.onrender.com',
  },
  {
    title: 'Pokédex',
    description:
      'Buscador de Pokémon con consumo de API pública. Frontend vanilla con HTML, CSS y JavaScript. Desplegado en GitHub Pages.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/martinz10one/pokedex',
    demo: 'https://martinz10one.github.io/pokedex/',
  },
]
