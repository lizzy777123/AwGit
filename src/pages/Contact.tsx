import { motion } from 'motion/react';
import { MapPin, Clock, Calendar, ArrowRight, Mail, User, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="inline-block px-4 py-1.5 bg-brand-emerald/10 text-brand-emerald font-extrabold text-[10px] rounded-full mb-6 ring-1 ring-brand-emerald/20 uppercase tracking-[0.2em]">READY TO SCALE?</span>
            <h2 className="text-5xl md:text-7xl font-extrabold text-[#d4e4fa] mb-8 leading-[1.1] tracking-tight">LET'S TALK about your next big move.</h2>
            <p className="text-[#c1cab0] text-lg max-w-xl leading-relaxed">
              Whether you're looking for a bespoke web application or a high-performance e-commerce platform, our Hackney studio is ready to build your digital future.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-brand-emerald/5 rounded-2xl blur-3xl group-hover:bg-brand-emerald/10 transition-all duration-500"></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-navy-border shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000" 
                 alt="Workspace" 
                 className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent opacity-60"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-navy-light rounded-2xl border border-navy-border p-8 lg:p-12 hover:border-brand-emerald transition-all duration-300"
          >
            <h3 className="text-3xl font-extrabold mb-10 text-[#d4e4fa]">Start a Project</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-3">
                <label className="font-extrabold text-[10px] text-brand-emerald uppercase tracking-[0.2em]">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-border" size={18} />
                  <input 
                    className="w-full bg-[#051424] border border-navy-border rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-brand-emerald transition-all text-sm font-medium" 
                    placeholder="John Doe" 
                    type="text" 
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-extrabold text-[10px] text-brand-emerald uppercase tracking-[0.2em]">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-border" size={18} />
                  <input 
                    className="w-full bg-[#051424] border border-navy-border rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-brand-emerald transition-all text-sm font-medium" 
                    placeholder="john@company.com" 
                    type="email" 
                  />
                </div>
              </div>
              <div className="md:col-span-2 flex flex-col gap-3">
                <label className="font-extrabold text-[10px] text-brand-emerald uppercase tracking-[0.2em]">Project Brief</label>
                <textarea 
                  className="w-full bg-[#051424] border border-navy-border rounded-xl p-4 focus:outline-none focus:border-brand-emerald transition-all text-sm font-medium resize-none" 
                  placeholder="Tell us about your goals..." 
                  rows={4}
                ></textarea>
              </div>
              <div className="md:col-span-2 flex justify-end">
                <button 
                  className="bg-brand-emerald text-[#00210e] font-extrabold text-sm px-10 py-5 rounded-full hover:shadow-[0_0_20px_rgba(46,204,113,0.3)] hover:brightness-110 active:scale-95 transition-all flex items-center gap-3" 
                  type="submit"
                >
                  SEND MESSAGE
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>

          {/* Studio Info Sidebar */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-navy-light rounded-2xl border border-navy-border p-8 hover:border-brand-emerald transition-all"
            >
              <div className="w-12 h-12 bg-brand-emerald/10 rounded-full flex items-center justify-center mb-6">
                <MapPin className="text-brand-emerald" size={24} />
              </div>
              <h4 className="text-xl font-extrabold mb-4 text-[#d4e4fa]">Hackney Studio</h4>
              <p className="text-[#c1cab0] text-sm leading-relaxed">
                123 Mare Street<br />
                Hackney, London<br />
                E8 4RR, United Kingdom
              </p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="bg-navy-light rounded-2xl border border-navy-border p-8 hover:border-brand-emerald transition-all"
            >
              <div className="w-12 h-12 bg-brand-emerald/10 rounded-full flex items-center justify-center mb-6">
                <Clock className="text-brand-emerald" size={24} />
              </div>
              <h4 className="text-xl font-extrabold mb-4 text-[#d4e4fa]">Studio Hours</h4>
              <p className="text-[#c1cab0] text-sm leading-relaxed">
                Mon — Fri: 09:00 - 18:00<br />
                Sat — Sun: By Appointment
              </p>
            </motion.div>
          </div>

          {/* Calendly Placeholder */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 bg-[#0d1c2d] rounded-2xl border border-navy-border overflow-hidden"
          >
            <div className="p-8 border-b border-navy-border flex justify-between items-center bg-navy-light">
              <div>
                <h3 className="text-2xl font-extrabold text-[#d4e4fa]">Book a Discovery Call</h3>
                <p className="text-[#c1cab0] text-sm">Pick a slot that works for you via Calendly.</p>
              </div>
              <Calendar className="text-brand-emerald" size={32} />
            </div>
            <div className="h-[400px] bg-[#051424] flex items-center justify-center relative group">
               <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-emerald via-transparent to-transparent"></div>
               <div className="text-center">
                 <div className="w-20 h-20 bg-brand-emerald/5 rounded-full flex items-center justify-center mx-auto mb-6">
                   <Calendar size={40} className="text-brand-emerald/30" />
                 </div>
                 <p className="font-extrabold text-xs text-[#c1cab0] uppercase tracking-[0.2em]">Calendly Widget Embedded Here</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
