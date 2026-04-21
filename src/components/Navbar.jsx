import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      
      {/* Main Navbar */}
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center h-full">
         <Image
            src="images/DreamDesginStudioLogo.png"
            alt="Dream Design Studio Logo"
            width={200}
            height={100}
            className="w-[140px] h-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <Link href="/kitchen" className="hover:text-blue-500">
            Kitchen
          </Link>

          <Link href="/bedroom" className="hover:text-blue-500">
            Bedroom
          </Link>

          <Link href="/consultation" className="hover:text-blue-500">
            Consultation
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Link
            href="/consultation"
            className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Get Free Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t">
          <nav className="flex flex-col p-4 space-y-4">
            <Link href="/kitchen">Kitchen</Link>
            <Link href="/bedroom">Bedroom</Link>
            <Link href="/consultation">Consultation</Link>
          </nav>
        </div>
      )}
    </header>
  );
}