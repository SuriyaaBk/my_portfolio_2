import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Engineering',
      field: 'Computer Science Engineering',
      institution: 'Kongu Engineering College',
      period: '2023 - 2027',
      //gpa: '8.5/10',
      icon: GraduationCap
    }
  ];

  const achievements = [
    'Competitive Programming: Top 70k rank on LeetCode',
  ];

  const courses = [
    'Algorithms',
    'Database Management Systems',
    'Operating Systems',
    'Computer Networks',
    'Discrete Mathematics',
    'Linear Algebra & Calculus',
    'Probability & Statistics',
    
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-cyan-600 mb-4">
            <GraduationCap className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">Education</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            ∫ Knowledge × Time dt
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border-2 border-cyan-200 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-white rounded-xl shadow-md">
                    <edu.icon className="w-8 h-8 text-cyan-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between mb-2">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">{edu.degree}</h3>
                        <p className="text-lg text-cyan-700 font-semibold">{edu.field}</p>
                      </div>
                      {/* <span className="px-4 py-2 bg-white rounded-lg text-cyan-700 font-semibold shadow-md">
                        GPA: {edu.gpa}
                      </span> */}
                    </div>
                    <p className="text-slate-700 font-medium">{edu.institution}</p>
                    <p className="text-slate-600">{edu.period}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="p-8 bg-slate-50 rounded-xl border-2 border-slate-200">
              <div className="flex items-center space-x-3 mb-6">
                <BookOpen className="w-6 h-6 text-cyan-600" />
                <h3 className="text-2xl font-bold text-slate-900">Relevant Coursework</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {courses.map((course, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <span className="text-cyan-600 mt-1">→</span>
                    <span className="text-slate-700">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-8 bg-gradient-to-br from-slate-900 to-cyan-900 rounded-xl shadow-xl text-white">
              <div className="flex items-center space-x-3 mb-6">
                <Award className="w-6 h-6 text-cyan-400" />
                <h3 className="text-2xl font-bold">Achievements</h3>
              </div>
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start space-x-3 group">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                    <span className="text-gray-200 leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-cyan-50 rounded-xl border-2 border-cyan-200">
              <div className="text-center">
                <div className="text-5xl font-bold text-cyan-600 mb-2">2027</div>
                <div className="text-slate-700 font-medium">Graduation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
