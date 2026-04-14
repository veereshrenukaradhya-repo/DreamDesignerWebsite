import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-500">
          Dream Designer
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          {/* <Link href="/designs" className="hover:text-blue-500">
            Design Ideas
          </Link> */}

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

          {/* Mobile Menu */}
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
            {/* <Link href="/designs">Design Ideas</Link> */}
            <Link href="/kitchen">Kitchen</Link>
            <Link href="/bedroom">Bedroom</Link>
            <Link href="/consultation">Consultation</Link>
          </nav>
        </div>
      )}
    </header>
  );
}