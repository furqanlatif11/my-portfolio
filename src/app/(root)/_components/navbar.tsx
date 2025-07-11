"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

interface NavLink {
  name: string;
  href: string;
}

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTopNav, setShowTopNav] = useState(true);
  const [showBottomNav, setShowBottomNav] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      setShowTopNav(scrollY < 50);
      setShowBottomNav(
        scrollY > 200 && scrollY + windowHeight < fullHeight - 200
      );
      setAtBottom(scrollY + windowHeight >= fullHeight - 100);

      lastScroll = scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks: NavLink[] = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#about" },
    { name: "Experience", href: "#about" },
    { name: "Projects", href: "#about" },
    { name: "Services", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Navbar (Hidden on scroll down) */}
      {showTopNav && (
        <nav className="fixed top-0 left-0 w-full z-50 bg-transparent transition-opacity duration-300">
          <div className="customWidth py-4 px-6">
            <div className="flex justify-center items-center">
              {/* <div className="hidden md:flex space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-white hover:text-blue-400 font-medium transition"
                  >
                    {link.name}
                  </Link>
                ))}
              </div> */}
              <button
                onClick={toggleDrawer}
                className="md:hidden text-white focus:outline-none absolute right-6"
                aria-label="Toggle menu"
              >
                {drawerOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </nav>
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-50`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={toggleDrawer} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-blue-500 font-medium"
              onClick={() => setDrawerOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Pill Navbar */}
      <div
        className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-4 rounded-full flex space-x-6 z-50 transition-all duration-500 ease-in-out ${
          showBottomNav && !atBottom
            ? "opacity-100 translate-y-0 visible bg-white/10 border border-white/20 backdrop-blur-lg shadow-lg"
            : "opacity-0 translate-y-8 invisible"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-base font-medium text-white hover:text-blue-400"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
}
