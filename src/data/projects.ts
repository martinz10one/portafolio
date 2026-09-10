export interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    title: 'EasyNotes',
    description:
      'Proyecto grande en desarrollo: aplicación completa de notas. Actualmente trabajando en este proyecto, listo para compartir cuando esté terminado.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Docker'],
  },
]