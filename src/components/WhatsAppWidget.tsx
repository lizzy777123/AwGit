import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppWidget() {
  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      <motion.a
        href="https://wa.me/1234567890?text=Hi Awera, I'd like to discuss a high-performance web project."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center bg-brand-emerald text-[#00391c] rounded-full w-16 h-16 shadow-[0_0_20px_rgba(46,204,113,0.3)] hover:shadow-[0_0_30px_rgba(46,204,113,0.5)] transition-all group relative"
      >
        <MessageCircle size={32} />
        <div className="absolute right-20 bg-navy-light technical-border px-4 py-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          <p className="font-bold text-sm text-[#d4e4fa] uppercase tracking-wider">Chat with us</p>
        </div>
      </motion.a>
    </div>
  );
}
