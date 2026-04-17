import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2f2f3a] text-gray-300 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Logo + Social */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            DREAM DESIGNER
          </h2>

          <p className="text-sm mb-5">
            Beautiful interiors designed for modern homes.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mb-6">
{/* 
            <a href="https://facebook.com" target="_blank">
              <img src="/icons/facebook.svg" className="w-6 h-6 hover:opacity-70"/>
            </a>

            <a href="https://twitter.com" target="_blank">
              <img src="/icons/twitter.svg" className="w-6 h-6 hover:opacity-70"/>
            </a>

            <a href="https://instagram.com" target="_blank">
              <img src="/icons/instagram.svg" className="w-6 h-6 hover:opacity-70"/>
            </a>

            <a href="https://youtube.com" target="_blank">
              <img src="/icons/youtube.svg" className="w-6 h-6 hover:opacity-70"/>
            </a> */}

          </div>

          {/* App buttons */}
          <div className="flex gap-3">

            <img
              src="images/google-play.png"
              className="h-10"
            />

            <img
              src="images/app-store.png"
              className="h-10"
            />

          </div>
        </div>

        {/* Offerings */}
        <div>
          <h3 className="text-white font-semibold mb-4">Offerings</h3>

          <ul className="space-y-2 text-sm">
            <li><Link href="#">Interiors</Link></li>
            <li><Link href="#">Furnishings</Link></li>
            <li><Link href="#">Kitchen Designs</Link></li>
            <li><Link href="#">Wardrobe Designs</Link></li>
          </ul>
        </div>

        {/* Get Inspired */}
        <div>
          <h3 className="text-white font-semibold mb-4">Get Inspired</h3>

          <ul className="space-y-2 text-sm">
            <li><Link href="#">Design Ideas</Link></li>
            <li><Link href="#">Interior Magazine</Link></li>
            <li><Link href="#">Livspace TV</Link></li>
            <li><Link href="#">Customer Stories</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>

          <p className="text-sm mb-2">
            Call us
          </p>

          <p className="font-semibold mb-4">
            +91 98765 43210
          </p>

          <p className="text-sm mb-2">
            Email us
          </p>

          <p className="font-semibold">
            support@livspace-demo.com
          </p>
        </div>

      </div>

      {/* Bottom Bar */}

      <div className="border-t border-gray-600 text-center py-5 text-sm text-gray-400">

        © {new Date().getFullYear()} Livspace Clone. All Rights Reserved.

      </div>

    </footer>
  );
}