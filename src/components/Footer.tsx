import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © {new Date().getFullYear()} SURIYAA B K. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and a lot of</span>
            <span className="text-cyan-400 font-mono">{"{"} mathematics {"}"}</span>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 font-mono">
            return success = f(passion, hardwork, creativity);
          </p>
        </div>
      </div>
    </footer>
  );
}
