import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-white">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-0"
        style={{
          background:
            'radial-gradient(80rem 40rem at 10% -10%, rgba(34,211,238,0.15), transparent 40%), radial-gradient(70rem 30rem at 100% 10%, rgba(139,92,246,0.12), transparent 40%)',
        }}
      />

      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p className="text-white/40">Built with React, Tailwind, Framer Motion & Spline</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
