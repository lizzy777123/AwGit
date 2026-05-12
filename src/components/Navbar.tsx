import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'FAQs', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#051424] border-b border-navy-border px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-brand-emerald hover:opacity-80 transition-opacity"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link to="/" className="text-xl md:text-2xl font-extrabold text-[#d4e4fa] tracking-tight">
            Awera <span className="text-brand-emerald">Web Agency</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-bold text-sm tracking-widest uppercase transition-colors duration-200 ${
                location.pathname === link.path ? 'text-brand-emerald' : 'text-[#c1cab0] hover:text-brand-emerald'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link 
          to="/contact"
          className="bg-brand-emerald text-[#00210e] px-6 py-2 rounded-lg font-bold text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-brand-emerald/20"
        >
          LET'S TALK
        </Link>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#051424] border-b border-navy-border overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-bold text-lg tracking-widest uppercase py-2 ${
                    location.pathname === link.path ? 'text-brand-emerald' : 'text-[#c1cab0]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
