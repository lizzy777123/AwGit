import { motion } from 'motion/react';
import { Search, ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: "How long does a Typical Project take?",
    a: "A high-performance 'Done-For-You' website typically takes between 4-6 weeks from initial research to deployment. Complex custom applications may require longer developmental cycles depending on functionality requirements.",
    category: "Process"
  },
  {
    q: "Do you offer post-launch maintenance?",
    a: "Absolutely. We provide monthly performance monitoring, security updates, and Core Web Vital checks to ensure your digital asset continues to operate at peak efficiency.",
    category: "Support"
  },
  {
    q: "What is 'Emerald Noir' design aesthetic?",
    a: "It is our signature visual language: a blend of high-contrast navy, vibrant emerald accents, and technical bento-grids. It signals established authority and technical precision.",
    category: "Design"
  },
  {
    q: "Will my site be mobile responsive?",
    a: "Every project we architect follows a 'Mobile-Next' philosophy. Your site will not only look stunning on mobile but will also maintain high performance and low latency on mobile networks.",
    category: "Technical"
  },
  {
    q: "Do you integrate with third-party APIs?",
    a: "Yes. From payment gateways like Stripe to complex CRM integrations with Salesforce or HubSpot, we handle all technical connections to streamline your business operations.",
    category: "Technical"
  }
];

function AccordionItem({ item }: { item: typeof faqs[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-navy-light rounded-2xl border border-navy-border overflow-hidden hover:border-brand-emerald transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex justify-between items-center text-left"
      >
        <div className="space-y-1">
          <span className="text-[10px] font-extrabold text-brand-emerald uppercase tracking-[0.2em]">{item.category}</span>
          <h3 className="text-lg font-extrabold text-[#d4e4fa]">{item.q}</h3>
        </div>
        <ChevronDown size={20} className={`text-brand-emerald transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="px-8 pb-8 text-[#c1cab0] text-sm leading-relaxed border-t border-navy-border/30 pt-4">
          {item.a}
        </div>
      </motion.div>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#010f1f] border-b border-navy-border py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
          <HelpCircle size={400} className="text-brand-emerald" />
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#d4e4fa] mb-8">Got Questions?<br /><span className="text-brand-emerald">we've got answers.</span></h1>
            <p className="text-[#c1cab0] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Explore our frequently asked questions to understand our process, technical standards, and how we deliver ROI for our clients.
            </p>
            <div className="max-w-xl mx-auto relative group">
               <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-navy-border group-focus-within:text-brand-emerald transition-colors" size={20} />
               <input 
                 type="text" 
                 placeholder="Search for answers..." 
                 className="w-full bg-navy-dark border border-navy-border rounded-full py-5 pl-16 pr-6 focus:outline-none focus:border-brand-emerald text-[#d4e4fa] font-medium text-sm transition-all shadow-xl"
               />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Grid */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="space-y-6">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <AccordionItem item={item} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Still need help CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div 
           whileHover={{ y: -5 }}
           className="bg-navy-light technical-border rounded-[2.5rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left shadow-2xl"
        >
          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold text-[#d4e4fa]">Still need clarity?</h2>
            <p className="text-[#c1cab0] text-lg max-w-xl">
              Don't leave your digital future up to chance. Speak directly with a strategist and get a custom roadmap for your business.
            </p>
          </div>
          <Link to="/contact" className="bg-brand-emerald text-[#00210e] px-12 py-6 rounded-2xl font-extrabold text-xl hover:shadow-[0_0_30px_rgba(46,204,113,0.3)] transition-all flex items-center gap-4 group">
            BOOK A CALL <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
