"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Plus, X } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
}

export default function Navbar() {
  const [showBottomNav, setShowBottomNav] = useState(false);
  const [atBottom, setAtBottom] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      setShowBottomNav(scrollY > 200 && scrollY + windowHeight < fullHeight - 200);
      setAtBottom(scrollY + windowHeight >= fullHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop;
      const navbarHeight = 80; // Adjust if you have a fixed navbar at top
      
      window.scrollTo({
        top: offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Bottom Pill Navbar for md+ screens */}
      <div
        className={`hidden md:flex fixed bottom-6 left-1/2 transform -translate-x-1/2 px-8 py-4 rounded-full z-50 transition-all duration-500 ease-in-out ${
          showBottomNav && !atBottom
            ? "opacity-100 translate-y-0 visible bg-white/10 border border-white/20 backdrop-blur-lg shadow-lg"
            : "opacity-0 translate-y-8 invisible"
        }`}
      >
        <div className="flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-base font-medium text-white hover:text-[#00FF9D] transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Floating Action Button for sm screens */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-14 h-14 rounded-full bg-[#00FF9D] text-black flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: menuOpen ? 45 : 0 }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Plus size={28} />}
        </motion.button>

        {/* Stacked Nav Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="absolute bottom-20 right-0 flex flex-col items-end space-y-3"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ delay: i * 0.05 }}
                  className="w-auto"
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="px-4 py-2 rounded-lg bg-white/10 text-white text-sm font-medium shadow-md hover:bg-[#00FF9D]/20 backdrop-blur-md border border-white/20"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}