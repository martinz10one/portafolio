import { skills, skillCategories } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-[680px] mx-auto">
        <p className="font-mono text-sm text-accent mb-2">$ ls /skills/</p>
        <h2 className="text-2xl font-mono text-white mb-8">Habilidades</h2>
        <div className="space-y-6">
          {skillCategories.map((cat) => {
            const filtered = skills.filter((s) => s.category === cat.id)
            return (
              <div key={cat.id} className="flex items-baseline gap-4">
                <span className="font-mono text-sm text-white min-w-[120px] shrink-0">
                  {cat.label}:
                </span>
                <span className="text-[15px] text-muted leading-relaxed">
                  {filtered.map((s) => s.name).join(', ')}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
