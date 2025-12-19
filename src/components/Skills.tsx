import { Code2, Database, Blocks, TrendingUp } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming',
      skills: ['C', 'C++', 'Java', 'Python']
    },
    {
      icon: Database,
      title: 'Data & Backend',
      skills: ['SQL', 'MongoDB', 'PostgreSQL', 'Node.js',  'REST APIs']
    },
    {
      icon: Blocks,
      title: 'Frameworks & Tools',
      skills: ['React', 'TailwindCSS']
    },
    {
      icon: TrendingUp,
      title: 'Mathematics & CS',
      skills: ['Algorithms', 'Linear Algebra', 'Statistics',  'Optimization']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-cyan-600 mb-4">
            <Blocks className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            ∪ Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative p-6 bg-gradient-to-br from-slate-50 to-cyan-50 rounded-xl border-2 border-slate-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 rounded-full blur-2xl group-hover:bg-cyan-400/10 transition-colors"></div>

              <div className="relative">
                <div className="mb-4 inline-block p-3 bg-white rounded-lg shadow-md">
                  <category.icon className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white text-slate-700 rounded-full text-sm border border-slate-300 hover:border-cyan-400 hover:text-cyan-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block px-6 py-3 bg-slate-100 rounded-lg">
            <span className="text-slate-700 font-mono">
              skills.length = <span className="text-cyan-600 font-bold">growing++</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
