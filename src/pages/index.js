import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryCards from "../components/CategoryCards";
import LeadPopup from "../components/LeadPopup";
import Footer from "../components/Footer";
import CostCalculator from "../components/CostCalculator";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  // show popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>

      {showPopup && (
        <LeadPopup onClose={() => setShowPopup(false)} />
      )}

      <Navbar />
      <Hero />
      <CategoryCards />
      <WhatsAppButton />
      <CostCalculator />
      <Footer />

    </div>
  );
}