import { motion } from 'motion/react';
import { Rocket, Search, Zap, Shield, Target, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Done-For-You Websites',
    icon: Rocket,
    desc: 'Complete digital infrastructure designed to convert high-ticket leads while you focus on running your business. Zero technical headache, 100% performance.',
    linkText: 'Explore Package',
    cols: 'md:col-span-8'
  },
  {
    title: 'SEO Mastery',
    icon: Search,
    desc: "Dominate London's local search results with aggressive, white-hat technical SEO that drives intent-rich traffic.",
    bullets: ['Local Authority', 'Keyword Dominance', 'Revenue Focused'],
    cols: 'md:col-span-4'
  }
];

const smallFeats = [
  { title: 'Core Web Vitals', desc: 'Blazing fast load speeds guaranteed.', icon: Zap },
  { title: 'Military Security', desc: 'Encrypted, secure, and monitored 24/7.', icon: Shield },
  { title: 'Conversion Opt', desc: 'Psychology-led design for max ROAS.', icon: Target }
];

export default function Services() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex flex-col justify-center items-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" alt="World Map" className="w-full h-full object-cover" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl"
        >
          <span className="inline-block px-6 py-2 rounded-full bg-brand-emerald/10 text-brand-emerald font-extrabold text-[10px] uppercase tracking-[0.2em] mb-6 border border-brand-emerald/20">LONDON'S PREMIER WEB PARTNER</span>
          <h1 className="text-4xl md:text-7xl font-extrabold mb-8 text-white tracking-tight">
            Professional SEO & <span className="text-brand-emerald">Done-For-You</span> Websites in London
          </h1>
          <p className="text-[#c1cab0] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            We don't just build sites; we build revenue engines. Technical excellence meets aggressive growth strategies for high-ticket service businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="bg-brand-emerald text-[#00210e] font-extrabold text-sm px-10 py-5 rounded-xl transition-all hover:scale-105 emerald-glow-strong">
              Get My Free Strategy Call
            </Link>
            <Link to="/portfolio" className="border border-brand-emerald text-brand-emerald font-extrabold text-sm px-10 py-5 rounded-xl hover:bg-brand-emerald/5 transition-all">
              View Our Work
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {services.map((svc, i) => (
            <motion.div 
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${svc.cols} bg-navy-light border border-navy-border p-10 rounded-2xl flex flex-col justify-between group hover:border-brand-emerald transition-all duration-300`}
            >
              <div>
                <svc.icon className="text-brand-emerald mb-8 group-hover:scale-110 transition-transform" size={48} />
                <h2 className="text-3xl font-extrabold text-[#d4e4fa] mb-4">{svc.title}</h2>
                <p className="text-[#c1cab0] text-sm leading-relaxed max-w-lg mb-8">{svc.desc}</p>
                {svc.bullets && (
                   <ul className="space-y-3 font-bold text-xs text-[#d4e4fa] uppercase tracking-widest">
                     {svc.bullets.map(b => (
                       <li key={b} className="flex items-center gap-3">
                         <CheckCircle2 size={16} className="text-brand-emerald" /> {b}
                       </li>
                     ))}
                   </ul>
                )}
              </div>
              {svc.linkText && (
                <Link to="/contact" className="mt-12 flex items-center text-brand-emerald gap-2 font-extrabold text-xs uppercase tracking-widest hover:gap-4 transition-all">
                  {svc.linkText} <ArrowRight size={16} />
                </Link>
              )}
            </motion.div>
          ))}

          {smallFeats.map((feat, i) => (
             <motion.div 
               key={feat.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: (services.length + i) * 0.1 }}
               className="md:col-span-4 bg-navy-light border border-navy-border p-10 rounded-2xl flex flex-col items-center text-center group hover:border-brand-emerald transition-all"
             >
                <div className="w-16 h-16 rounded-full bg-brand-emerald/10 flex items-center justify-center mb-6 group-hover:bg-brand-emerald group-hover:text-[#00391c] transition-all">
                  <feat.icon size={28} />
                </div>
                <h3 className="font-extrabold text-[10px] text-brand-emerald uppercase tracking-[0.2em] mb-2">{feat.title}</h3>
                <p className="text-[#c1cab0] text-xs font-semibold">{feat.desc}</p>
             </motion.div>
          ))}
        </div>
      </section>

      {/* Areas We Serve Section (Image 4 styles) */}
      <section className="py-24 bg-[#0d1c2d] border-y border-navy-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-extrabold text-[#d4e4fa] mb-4">Local Expertise, Global Standards</h2>
            <p className="text-[#c1cab0]">Providing technical excellence across the South East.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
             {[
               { title: 'London Boroughs', areas: ['Westminster', 'Camden', 'Islington', 'Greenwich'] },
               { title: 'London Boroughs', areas: ['Hackney', 'Southwark', 'Lambeth', 'Tower Hamlets'] },
               { title: 'Greater London', areas: ['Croydon', 'Bromley', 'Ealing', 'Hounslow'] },
               { title: 'The Counties', areas: ['Surrey', 'Kent', 'Richmond', 'Kingston'] },
               { title: 'The Coast', areas: ['Southend', 'Clacton', 'Essex', 'Brighton'] },
             ].map((group, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                   <span className="font-extrabold text-brand-emerald uppercase tracking-[0.2em] text-[10px] border-b border-brand-emerald/20 pb-2 mb-2">{group.title}</span>
                   {group.areas.map(a => (
                     <span key={a} className="text-[#c1cab0] text-sm font-medium hover:text-white transition-colors cursor-default">{a}</span>
                   ))}
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto text-center">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-brand-emerald p-12 lg:p-20 rounded-3xl text-[#00210e] text-center shadow-2xl shadow-brand-emerald/10"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">Ready for Aggressive Growth?</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto font-bold opacity-80 leading-relaxed">
            Stop wasting money on agencies that "make things look pretty" and start investing in a system that makes you money.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact" className="bg-[#00210e] text-brand-emerald px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-sm hover:translate-y-[-2px] transition-all">
              Book Your Audit
            </Link>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-emerald bg-navy-light flex items-center justify-center text-[10px] font-bold text-brand-emerald">
                    JD
                  </div>
                ))}
              </div>
              <span className="font-bold text-xs uppercase tracking-widest opacity-80">Join 50+ London Agencies</span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
