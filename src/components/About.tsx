import { User, Brain, Code, Award } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: Code, title: 'Problem Solver', desc: 'Algorithmic thinking & optimization' },
    { icon: Brain, title: 'Math Enthusiast', desc: 'Applied mathematics in CS' },
    { icon: Award, title: 'Quick Learner', desc: 'Adapting to new technologies' }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-cyan-600 mb-4">
            <User className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            lim<sub className="text-2xl">x→∞</sub> (Learning + Experience)
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              I'm a Computer Science Engineering student passionate about leveraging mathematical
              concepts to create efficient and elegant solutions. My journey in tech is driven by
              curiosity and a love for problem-solving.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              With a strong foundation in algorithms, data structures, and mathematical modeling,
              I strive to build applications that are not just functional, but optimized and
              scalable. I believe that great code is where mathematics meets creativity.
            </p>
            <div className="pt-4">
              <div className="inline-block px-6 py-3 bg-cyan-50 border-l-4 border-cyan-500 text-slate-800">
                <span className="font-mono text-sm">while (alive) {"{ code(); learn(); innovate(); }"}</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-cyan-50 rounded-lg group-hover:bg-cyan-100 transition-colors">
                    <item.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
