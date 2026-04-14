import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryCards from "../components/CategoryCards";
import LeadPopup from "../components/LeadPopup";
import Footer from "../components/Footer";
import CostCalculator from "../components/CostCalculator";

export default function Home() {

  const [showPopup, setShowPopup] = useState(false);

  // show popup after 10 seconds
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
      <CostCalculator />
      <Footer />

    </div>
  );
}