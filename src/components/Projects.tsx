import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Smart CO Detection and Monitoring System',
      description: 'A real-time monitoring system for detecting and tracking carbon monoxide levels in closed environments.',
      tech: ['C++', 'MQ-7 Sensor', 'ESP32', 'Buzzer'],
      formula: 'CO + O₂ → CO₂',
      github: '#',
      demo: '#'
    },
    {
      title: 'Crop Prediction using Weather API',
      description: 'A machine learning model that predicts the best crops to plant based on weather data and soil conditions.',
      tech: ['Python', 'Scikit-learn', 'Flask', 'OpenWeatherMap API'],
      formula: 'y = f(weather, soil_quality)',
      github: '#',
      demo: '#'
    },
    {
      title: 'Enhanced Snake Game',
      description: 'An advanced version of the classic Snake game featuring AI opponents and dynamic obstacles.',
      tech: ['HTML5', 'JavaScript', 'Flask','SQLite'],
      formula: 'length = length + 1',
      github: '#',
      demo: '#'
    },
    // {
    //   title: 'Linear Algebra Calculator',
    //   description: 'Web-based calculator for matrix operations, eigenvalue computation, and solving linear systems.',
    //   tech: ['JavaScript', 'WebGL', 'Math.js'],
    //   formula: 'Ax = b',
    //   github: '#',
    //   demo: '#'
    // }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-cyan-600 mb-4">
            <FolderGit2 className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            ∑ Projects & Work
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-cyan-400"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl group-hover:w-48 group-hover:h-48 transition-all"></div>

              <div className="relative p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-cyan-50 rounded-lg">
                    <span className="text-2xl font-serif text-cyan-600">{project.formula}</span>
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5 text-slate-600" />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5 text-slate-600" />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
