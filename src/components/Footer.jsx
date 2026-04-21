import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2f2f3a] text-gray-300 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Logo + Social */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            DREAM DESIGN STUDIO
          </h2>

          <p className="text-sm mb-5">
            Beautiful interiors designed for modern homes.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mb-6">

            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-6 h-6 hover:text-white transition" />
            </a>

            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-6 h-6 hover:text-white transition" />
            </a>

            <a href="https://www.instagram.com/interiorbyus_?igsh=bHp4a3l1ODVpOWli&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6 hover:text-white transition" />
            </a>

            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="w-6 h-6 hover:text-white transition" />
            </a>

          </div>

          {/* App buttons */}
          <div className="flex gap-3">

            <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-10"
              />
            </a>

            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-10"
              />
            </a>

          </div>
        </div>

        {/* Offerings */}
        <div>
          <h3 className="text-white font-semibold mb-4">Offerings</h3>

          <ul className="space-y-2 text-sm">
            <li><Link href="/interiors">Interiors</Link></li>
            <li><Link href="/furnishings">Furnishings</Link></li>
            <li><Link href="/kitchen-designs">Kitchen Designs</Link></li>
            <li><Link href="/wardrobe-designs">Wardrobe Designs</Link></li>
          </ul>
        </div>

        {/* Get Inspired */}
        <div>
          <h3 className="text-white font-semibold mb-4">Get Inspired</h3>

          <ul className="space-y-2 text-sm">
            <li><Link href="/design-ideas">Design Ideas</Link></li>
            <li><Link href="/magazine">Interior Magazine</Link></li>
            <li><Link href="/tv">Dream design TV</Link></li>
            <li><Link href="/stories">Customer Stories</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>

          <p className="text-sm mb-2">Call us</p>
          <a
            href="tel:+918310946454"
            className="font-semibold mb-4 block hover:text-white"
          >
            +91 83109 46454
          </a>

          <p className="text-sm mb-2">Email us</p>
          <a
            href="mailto:dreamlivedesign@gmail.com"
            className="font-semibold hover:text-white"
          >
            dreamlivedesign@gmail.com
          </a>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 text-center py-5 text-sm text-gray-400">
        © {new Date().getFullYear()} Dream Designer. All Rights Reserved.
      </div>

    </footer>
  );
}