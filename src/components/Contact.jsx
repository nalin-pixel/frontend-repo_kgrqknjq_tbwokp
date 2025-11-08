import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Let's build something great
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label className="text-sm text-white/70">Name</label>
              <input
                type="text"
                required
                className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                placeholder="Ada Lovelace"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm text-white/70">Email</label>
              <input
                type="email"
                required
                className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                placeholder="ada@dev.email"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-white/70">Message</label>
            <textarea
              required
              rows={5}
              className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="mt-2 inline-flex justify-center rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition-transform hover:-translate-y-0.5 hover:bg-cyan-400"
          >
            Send Message
          </button>
          <p className="text-xs text-white/50">This is a demo form. Wire it to your backend or a form service.</p>
        </motion.form>
      </div>
    </section>
  );
}
