export interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    title: 'EasyNotes v2 — Sistema de gestión educativa',
    description:
      'Migración de un sistema legado ASP.NET WebForms (VB.NET, MySQL con stored procedures, DevExpress) a un sistema moderno con Node.js, Express, MongoDB y React. 7 perfiles de usuario y más de 40 pantallas. Lideré un equipo de 5 desarrolladores: historias de usuario, reglas de negocio extraídas de los stored procedures, y el módulo de Dirección de Núcleo (superadmin) con autenticación y control de acceso por roles. 82 tests automatizados con Jest e integración por Pull Request. Desplegado en Vercel.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Jest', 'Vercel'],
    demo: 'https://client-sepia-kappa-22.vercel.app',
  },
  {
    title: 'Portafolio web personal',
    description:
      'Diseño y desarrollo de la interfaz con React y Tailwind CSS, con diseño responsive para móvil y escritorio, componentes reutilizables y despliegue continuo en Vercel.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/martinz10one/portafolio',
  },
]
