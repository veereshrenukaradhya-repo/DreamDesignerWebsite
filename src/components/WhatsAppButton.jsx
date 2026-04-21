import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918310946454?text=Hello%20I%20am%20interested%20in%20your%20interior%20design%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition animate-bounce"
    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  );
}