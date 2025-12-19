import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const mathSymbols = ['∫', '∑', '∏', 'π', '∞', '√', '∂', '∇', 'θ', 'λ', 'Σ', '∈', '∀', '∃', '≠', '≈'];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {mathSymbols.map((symbol, index) => (
        <div
          key={index}
          className={`absolute text-cyan-400/20 font-serif text-6xl transition-all duration-1000 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        >
          {symbol}
        </div>
      ))}

      <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="mb-6 text-cyan-400 font-mono text-lg">
          f(x) = {"{"} Computer Science × Mathematics {"}"}
        </div>
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
          SURIYAA B K
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
          Computer Science Engineer
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
          Solving complex problems through the intersection of code and mathematics
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors font-medium"
          >
            Resume
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-colors font-medium"
          >
            Contact Me
          </button>
        </div>
      </div>

      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-cyan-400" />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-4xl w-full h-5/6 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
            <iframe
              src="/suriyaa.pdf"
              className="w-full h-full border-0"
              title="Resume"
            />
            <div className="mt-4 text-center">
              <a
                href="/suriyaa.pdf"
                download
                className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </section>
  );
}
