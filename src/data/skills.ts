export interface Skill {
  name: string
  category: string
}

export const skills: Skill[] = [
  { name: 'JavaScript', category: 'lenguajes' },
  { name: 'TypeScript', category: 'lenguajes' },
  { name: 'Python', category: 'lenguajes' },
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'HTML/CSS', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'FastAPI', category: 'backend' },
  { name: 'MongoDB', category: 'bases de datos' },
  { name: 'PostgreSQL', category: 'bases de datos' },
  { name: 'Redis', category: 'bases de datos' },
  { name: 'Git', category: 'herramientas' },
  { name: 'Linux', category: 'herramientas' },
  { name: 'Docker', category: 'herramientas' },
  { name: 'Vercel', category: 'herramientas' },
  { name: 'OpenCode', category: 'herramientas' },
]

export const skillCategories = [
  { id: 'lenguajes', label: 'Lenguajes' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'bases de datos', label: 'Bases de Datos' },
  { id: 'herramientas', label: 'Herramientas' },
] as const
