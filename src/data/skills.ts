export interface Skill {
  name: string
  category: string
}

export const skills: Skill[] = [
  { name: 'JavaScript', category: 'lenguajes' },
  { name: 'Python', category: 'lenguajes' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'FastAPI', category: 'backend' },
  { name: 'React', category: 'frontend' },
  { name: 'HTML/CSS', category: 'frontend' },
  { name: 'PostgreSQL', category: 'bases de datos' },
  { name: 'MongoDB', category: 'bases de datos' },
  { name: 'Redis', category: 'bases de datos' },
  { name: 'Docker', category: 'herramientas' },
  { name: 'Git', category: 'herramientas' },
  { name: 'Linux', category: 'herramientas' },
]

export const skillCategories = [
  { id: 'lenguajes', label: 'Lenguajes' },
  { id: 'backend', label: 'Backend' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'bases de datos', label: 'Bases de Datos' },
  { id: 'herramientas', label: 'Herramientas' },
] as const
