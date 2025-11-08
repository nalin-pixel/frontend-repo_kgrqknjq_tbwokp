import { motion } from 'framer-motion';
import { Code2, Globe, Zap } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Landing',
    description: 'WebGL + Spline powered landing page with buttery interactions.',
    tags: ['React', 'Spline', 'Three.js'],
    icon: Globe,
    link: '#',
  },
  {
    title: 'Realtime Dashboard',
    description: 'Beautiful metrics and streaming updates with websockets.',
    tags: ['React', 'FastAPI', 'Tailwind'],
    icon: Zap,
    link: '#',
  },
  {
    title: 'Component Toolkit',
    description: 'Reusable, accessible UI kit with headless primitives.',
    tags: ['TypeScript', 'Radix', 'Design'],
    icon: Code2,
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Featured Projects
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl hover:bg-white/[0.06]"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-300">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--x, 0) var(--y, 0), rgba(34,211,238,0.15), transparent 40%)' }} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
