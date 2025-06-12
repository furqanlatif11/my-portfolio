// components/Footer.tsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 mt-24">
      <div className="customWidth px-4 py-10 flex flex-col items-center text-center text-sm text-gray-500 dark:text-gray-400">
        <div className="flex gap-6 mb-4">
          <Link href="https://github.com/yourusername" target="_blank" aria-label="GitHub">
            <FaGithub className="text-xl hover:text-gray-900 dark:hover:text-white transition" />
          </Link>
          <Link href="https://linkedin.com/in/yourusername" target="_blank" aria-label="LinkedIn">
            <FaLinkedin className="text-xl hover:text-blue-600 transition" />
          </Link>
          <Link href="mailto:you@example.com" aria-label="Email">
            <FaEnvelope className="text-xl hover:text-red-500 transition" />
          </Link>
        </div>

        <p className="mb-2">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>

        <div className="flex gap-4 text-sm">
          <Link href="/#projects" className="hover:underline">Projects</Link>
          <Link href="/#about" className="hover:underline">About</Link>
          <Link href="/#contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
