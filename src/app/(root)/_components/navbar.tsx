'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

interface NavLink {
  name: string;
  href: string;
}

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks: NavLink[] = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="customWidth ">
      <div className=" px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Muhammad Fuqan</h1>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-blue-500 font-medium transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={toggleDrawer}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {drawerOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
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
    </nav>
  );
}
