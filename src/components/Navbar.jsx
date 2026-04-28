import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import ComingSoonPopup from "../components/ComingSoonPopup";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
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
          {/* <Link href="/kitchen" className="hover:text-blue-500">
            Kitchen
          </Link>

          <Link href="/bedroom" className="hover:text-blue-500">
            Bedroom
          </Link>

          <Link href="/consultation" className="hover:text-blue-500">
            Consultation
          </Link> */}

           <button
              onClick={() => setShowComingSoon(true)}
              className="hover:text-blue-500 font-medium"
            >
              Kitchen
            </button>

            <button
              onClick={() => setShowComingSoon(true)}
              className="hover:text-blue-500 font-medium"
            >
              Bedroom
            </button>

            <button
              onClick={() => setShowComingSoon(true)}
              className="hover:text-blue-500 font-medium"
            >
              Consultation
            </button>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
            <button
              onClick={() => setShowComingSoon(true)}
              className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Get Free Quote
            </button>
          {/* <Link
            href="/consultation"
            className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Get Free Quote
          </Link> */}


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
          <nav className="flex flex-col p-4 space-y-4 text-gray-700 font-medium">

            <button
              onClick={() => setShowComingSoon(true)}
              className="text-left hover:text-blue-500"
            >
              Kitchen
            </button>

            <button
              onClick={() => setShowComingSoon(true)}
              className="text-left hover:text-blue-500"
            >
              Bedroom
            </button>

            <button
              onClick={() => setShowComingSoon(true)}
              className="text-left hover:text-blue-500"
            >
              Consultation
            </button>

          </nav>
        </div>
      )}

      {/* //uncomment above code and remove this comment when you want to enable mobile menu. Currently, it is disabled and shows coming soon popup for all 3 links in mobile view. */}
      {/* Mobile Menu
      {open && (
        <div className="md:hidden border-t">
          <nav className="flex flex-col p-4 space-y-4">
            <Link href="/kitchen">Kitchen</Link>
            <Link href="/bedroom">Bedroom</Link>
            <Link href="/consultation">Consultation</Link>
          </nav>
        </div>
      )} */}

          {/* ✅ MUST be inside return */}
      {showComingSoon && (
        <ComingSoonPopup onClose={() => setShowComingSoon(false)} />
      )}
    </header>
  );
}
