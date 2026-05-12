import { Link } from 'react-router-dom';
import { Share2, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 border-t border-navy-border bg-[#010f1f]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="space-y-4">
          <Link to="/" className="text-2xl font-extrabold text-[#d4e4fa] tracking-tight">
            Awera <span className="text-brand-emerald">Web Agency</span>
          </Link>
          <p className="text-[#c1cab0] max-w-xs text-sm leading-relaxed">
            Hackney's premier high-performance digital collective. Engineering excellence since 2018.
          </p>
          <div className="flex gap-4 text-[#c1cab0]">
            <Share2 size={20} className="hover:text-brand-emerald cursor-pointer transition-colors" />
            <Mail size={20} className="hover:text-brand-emerald cursor-pointer transition-colors" />
            <Globe size={20} className="hover:text-brand-emerald cursor-pointer transition-colors" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <span className="font-extrabold text-xs text-white uppercase tracking-[0.2em]">Agency</span>
            <Link to="/" className="text-[#c1cab0] hover:text-brand-emerald transition-colors text-sm font-medium">Home</Link>
            <Link to="/about" className="text-[#c1cab0] hover:text-brand-emerald transition-colors text-sm font-medium">About</Link>
            <Link to="/services" className="text-[#c1cab0] hover:text-brand-emerald transition-colors text-sm font-medium">Services</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-extrabold text-xs text-white uppercase tracking-[0.2em]">Work</span>
            <Link to="/portfolio" className="text-[#c1cab0] hover:text-brand-emerald transition-colors text-sm font-medium">Portfolio</Link>
            <Link to="/contact" className="text-[#c1cab0] hover:text-brand-emerald transition-colors text-sm font-medium">Contact</Link>
            <Link to="/faq" className="text-[#c1cab0] hover:text-brand-emerald transition-colors text-sm font-medium">FAQs</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-extrabold text-xs text-white uppercase tracking-[0.2em]">Legal</span>
            <Link to="/privacy" className="text-[#c1cab0] hover:text-brand-emerald transition-colors text-sm font-medium">Privacy Policy</Link>
            <Link to="/terms" className="text-[#c1cab0] hover:text-brand-emerald transition-colors text-sm font-medium">Terms of Service</Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-navy-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#c1cab0] text-xs font-medium uppercase tracking-wider">
          © 2024 Awera Web Agency. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald"></div>
          <p className="text-[#c1cab0] text-xs font-medium uppercase tracking-wider">
            Built with Precision in Hackney
          </p>
        </div>
      </div>
    </footer>
  );
}
