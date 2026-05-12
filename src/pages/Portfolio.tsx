import { motion } from 'motion/react';
import { ExternalLink, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'The Monolith Collective',
    location: 'London, UK',
    desc: 'A high-performance e-commerce engine for luxury architectural components. Achieving a 40% increase in checkout velocity through technical optimization.',
    tags: ['Next.js', 'Web3 Auth', 'GSAP'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    cols: 'md:col-span-8'
  },
  {
    title: 'Lumina Systems',
    location: 'San Francisco, CA',
    desc: 'SaaS dashboard for distributed cloud management. Focused on technical precision and data density.',
    tags: ['React', 'D3.js', 'Postgres'],
    image: 'https://images.unsplash.com/photo-1551288049-bbda64626744?auto=format&fit=crop&q=80&w=600',
    cols: 'md:col-span-4'
  },
  {
    title: 'Vertex Protocol',
    location: 'Singapore',
    desc: 'Real-time trading terminal with millisecond latency requirements and custom canvas rendering.',
    tags: ['TypeScript', 'WebGL', 'Rust'],
    image: 'https://images.unsplash.com/photo-1611974714151-ebd56f6333e8?auto=format&fit=crop&q=80&w=600',
    cols: 'md:col-span-5'
  },
  {
    title: 'Oasis Wealth',
    location: 'Dubai, UAE',
    desc: 'Exclusive wealth management portal featuring dark-mode minimalism and high-security client interfaces.',
    tags: ['FinTech', 'Node.js', 'Auth0'],
    image: 'https://images.unsplash.com/photo-1579621970795-87f9ac756557?auto=format&fit=crop&q=80&w=800',
    cols: 'md:col-span-7'
  }
];

export default function Portfolio() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 bg-navy-light technical-border rounded-full mb-6"
        >
          <span className="text-brand-emerald font-bold text-[10px] uppercase tracking-[0.2em]">Selected Works</span>
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#d4e4fa] mb-8">
           Engineering <span className="text-brand-emerald">Digital Growth</span> at Scale.
        </h1>
        <p className="text-[#c1cab0] text-lg max-w-2xl mx-auto leading-relaxed">
           We combine technical rigor with aggressive aesthetic direction to build web platforms that dominate their respective markets.
        </p>
      </section>

      {/* Portfolio Bento Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${project.cols} group technical-border bg-navy-light rounded-2xl overflow-hidden hover:border-brand-emerald transition-all duration-300 emerald-glow`}
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="inline-flex items-center gap-2 bg-[#051424] px-3 py-1 rounded-full border border-navy-border mb-2">
                    <span className="text-brand-emerald font-bold text-[9px] uppercase tracking-widest">{project.location}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
                    {project.title} <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-[#c1cab0] text-sm mb-6 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-navy-dark text-[#d4e4fa] px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider border border-navy-border group-hover:border-brand-emerald transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center border-t border-navy-border">
        <h2 className="text-4xl font-extrabold text-[#d4e4fa] mb-8">Ready to scale your digital presence?</h2>
        <p className="text-[#c1cab0] text-lg mb-10 max-w-xl mx-auto">
          Our portfolio is a testament to our engineering rigor. Let's discuss how we can apply these principles to your brand.
        </p>
        <Link to="/contact" className="inline-block bg-brand-emerald text-[#00210e] px-10 py-5 rounded-full font-extrabold text-sm hover:scale-105 transition-transform emerald-glow-strong">
          START A PROJECT
        </Link>
      </section>
    </div>
  );
}
