import { motion } from 'motion/react';
import { Award, Code, Database, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 space-y-8"
        >
          <div className="inline-flex items-center gap-2 bg-navy-light px-4 py-1.5 rounded-full border border-navy-border">
            <div className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse"></div>
            <span className="font-bold text-[10px] text-[#c1cab0] uppercase tracking-[0.2em]">The Vision Behind Awera</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#d4e4fa] leading-[1.1] tracking-tight">
            Bridging <span className="text-brand-emerald">Data Science</span> and Digital Craft.
          </h1>
          <p className="text-[#c1cab0] text-lg leading-relaxed max-w-2xl">
            At Awera Web Agency, our engineering philosophy is rooted in technical rigour and mathematical precision. We don't just design interfaces; we architect data-driven growth engines that provide a measurable competitive advantage for high-ticket service businesses.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full relative group"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden technical-border relative z-10 bg-navy-light">
             <img 
               src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000" 
               alt="Technical Founder" 
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-90"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent opacity-80"></div>
          </div>
          <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-brand-emerald/10 rounded-full blur-[80px] -z-0"></div>
          
          <div className="absolute bottom-10 left-10 z-20">
             <h3 className="text-3xl font-extrabold text-white mb-1">Elias Thorne</h3>
             <p className="text-brand-emerald font-bold text-sm uppercase tracking-widest">Founder & Technical Strategist</p>
          </div>
        </motion.div>
      </section>

      {/* Qualifications Section */}
      <section className="bg-navy-light py-24 border-y border-navy-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-extrabold text-[#d4e4fa] mb-6">Unrivalled Expertise</h2>
            <p className="text-[#c1cab0] max-w-2xl text-lg">
              Our leadership combines high-level academic technical training with professional excellence in finance and engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Database, 
                title: 'Data & Analytics', 
                list: ['MSc Data Science and Analytics'] 
              },
              { 
                icon: TrendingUp, 
                title: 'Finance & Strategy', 
                list: ['MSc Accounting and Finance', 'BA Accounting and Finance', 'FCCA'] 
              },
              { 
                icon: Code, 
                title: 'Engineering', 
                list: ['Web Development Certification Level 3'] 
              },
            ].map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-navy-dark p-8 technical-border rounded-2xl hover:border-brand-emerald transition-all group"
              >
                <div className="w-12 h-12 bg-brand-emerald/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-emerald group-hover:text-navy-dark transition-all">
                  <skill.icon size={24} />
                </div>
                <h3 className="text-xl font-extrabold text-[#d4e4fa] mb-4">{skill.title}</h3>
                <ul className="space-y-3">
                  {skill.list.map(item => (
                    <li key={item} className="flex gap-3 items-center text-[#c1cab0] text-sm">
                      <div className="w-1 h-1 rounded-full bg-brand-emerald"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Content (Image 2 styles) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#d4e4fa] leading-tight">
              Engineering with a <span className="text-brand-emerald">Global Perspective.</span>
            </h2>
            <p className="text-[#c1cab0] text-lg leading-relaxed">
              We operate at the intersection of London's creative energy and rigorous data analytics. Our mission is to empower high-ticket clients with the digital infrastructure required to scale aggressively and dominate their market segment.
            </p>
            <div className="p-8 bg-navy-light technical-border rounded-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-emerald/5 rounded-full blur-2xl group-hover:bg-brand-emerald/10 transition-all"></div>
               <Award className="text-brand-emerald mb-4" size={32} />
               <h4 className="text-xl font-extrabold text-[#d4e4fa] mb-2">Our Quality Standard</h4>
               <p className="text-[#c1cab0] text-sm">
                 Every line of code is scrutinized for performance, accessibility, and measurable ROI impact. WE don't just build, we optimize.
               </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden technical-border">
               <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" alt="Office" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden technical-border translate-y-12">
               <img src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=600" alt="Meeting" className="w-full h-full object-cover grayscale" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
