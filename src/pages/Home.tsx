import { motion } from 'motion/react';
import { ArrowRight, Cpu, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 space-y-8"
        >
          <div className="inline-flex items-center gap-2 bg-navy-light px-4 py-1.5 rounded-full border border-navy-border">
            <div className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse"></div>
            <span className="font-bold text-[10px] text-[#c1cab0] uppercase tracking-[0.2em]">HACKNEY ROOTS / GLOBAL VISION</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#d4e4fa] leading-[1.1] tracking-tight">
            Precision Engineering for <span className="text-brand-emerald">Digital Dominance.</span>
          </h1>
          <p className="text-[#c1cab0] text-lg md:text-xl max-w-2xl leading-relaxed">
            Born in the creative crucible of Hackney, East London, Awera is where high-performance engineering meets premium aesthetics. We don't just build websites; we architect growth engines for those who refuse to settle for average.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/contact" className="bg-brand-emerald text-[#00210e] px-8 py-4 rounded-lg font-extrabold text-sm hover:brightness-110 emerald-glow-strong transition-all text-center flex items-center justify-center gap-2">
              GET MY FREE STRATEGY CALL <ArrowRight size={18} />
            </Link>
            <Link to="/portfolio" className="border border-brand-emerald text-brand-emerald px-8 py-4 rounded-lg font-extrabold text-sm hover:bg-brand-emerald/10 transition-all text-center">
              VIEW OUR WORK
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden technical-border relative z-10 bg-navy-light">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
              alt="Handshake" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-80" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent opacity-80"></div>
          </div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-emerald/10 rounded-full blur-[80px] -z-0"></div>
        </motion.div>
      </section>

      {/* Stats / Bento Section */}
      <section className="bg-navy-light py-24 border-y border-navy-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-[#051424] p-10 technical-border rounded-2xl flex flex-col justify-between group hover:border-brand-emerald transition-all"
            >
              <div>
                <h3 className="text-3xl font-extrabold text-brand-emerald mb-4">Our Mission</h3>
                <p className="text-lg text-[#d4e4fa] max-w-xl leading-relaxed">
                  To bridge the gap between technical complexity and intuitive user experiences. We empower high-ticket clients with the digital infrastructure required to scale aggressively and dominate their market segment.
                </p>
              </div>
              <div className="flex flex-wrap gap-12 mt-12">
                <div>
                  <div className="text-4xl font-extrabold text-[#d4e4fa] tracking-tighter">99.9%</div>
                  <div className="text-[10px] text-[#c1cab0] font-bold uppercase tracking-widest mt-1">Uptime Reliability</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-[#d4e4fa] tracking-tighter">4.2x</div>
                  <div className="text-[10px] text-[#c1cab0] font-bold uppercase tracking-widest mt-1">Avg. Conversion Lift</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-[#d4e4fa] tracking-tighter">0.4s</div>
                  <div className="text-[10px] text-[#c1cab0] font-bold uppercase tracking-widest mt-1">LCP Speed</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-navy-border/20 p-10 technical-border rounded-2xl flex flex-col justify-between group hover:border-brand-emerald transition-all"
            >
              <div className="w-12 h-12 bg-brand-emerald/10 rounded-lg flex items-center justify-center mb-8">
                <Cpu className="text-brand-emerald" size={24} />
              </div>
              <h4 className="text-2xl font-extrabold text-[#d4e4fa] mb-4">Technical Precision</h4>
              <p className="text-[#c1cab0] text-sm leading-relaxed">
                Every line of code we write is scrutinized for performance, accessibility, and SEO. We use modern stacks—Tailwind, React, and Edge compute—to ensure your site is as fast as it is beautiful.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
           {[
             { title: 'Core Web Vitals', desc: 'Blazing fast load speeds guaranteed.', icon: Zap },
             { title: 'Military Security', desc: 'Encrypted, secure, and monitored 24/7.', icon: Target },
             { title: 'Conversion Opt', desc: 'Psychology-led design for max ROI.', icon: ArrowRight }
           ].map((feat, i) => (
             <motion.div 
               key={feat.title}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="p-10 bg-navy-light technical-border rounded-2xl flex flex-col items-center group cursor-default"
             >
                <div className="w-16 h-16 rounded-full bg-brand-emerald/10 flex items-center justify-center mb-6 group-hover:bg-brand-emerald group-hover:text-[#00391c] transition-all">
                  <feat.icon size={28} />
                </div>
                <h3 className="font-extrabold text-sm text-brand-emerald uppercase tracking-[0.2em] mb-2">{feat.title}</h3>
                <p className="text-[#c1cab0] text-sm">{feat.desc}</p>
             </motion.div>
           ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-emerald p-12 lg:p-20 rounded-[2rem] flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative"
        >
          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#00210e] leading-[1.1] tracking-tight mb-6">
              Ready to elevate your digital presence?
            </h2>
            <p className="text-[#00391c] text-lg font-medium opacity-80">
              We're currently accepting high-impact projects for Q4. Let's discuss your roadmap to growth.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative z-10 shrink-0">
            <Link to="/contact" className="bg-[#00210e] text-brand-emerald px-12 py-6 rounded-xl font-extrabold text-xl lg:text-2xl hover:shadow-2xl transition-all block">
              LET'S TALK
            </Link>
          </motion.div>
          {/* Technical Decor */}
          <div className="absolute top-0 right-0 p-12 opacity-5">
             <ArrowRight size={200} className="text-[#00210e] transform -rotate-45" />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
