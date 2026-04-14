import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const images = [
    "images/livingroom1.jpg",
    "images/livingroom2.jpg",
    "images/homepage.avif",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      
      {/* Background Carousel */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Interior"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">

        <h1 className="text-white text-4xl md:text-5xl font-bold max-w-4xl mb-6">
          <TypeAnimation
            sequence={[
              "Experience premium home design without exceeding your planned budget",
              1000,
            ]}
            wrapper="span"
            speed={20}
            repeat={0}
          />
        </h1>

        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold">
          GET INSTANT ESTIMATE
        </button>

      </div>
    </section>
  );
}