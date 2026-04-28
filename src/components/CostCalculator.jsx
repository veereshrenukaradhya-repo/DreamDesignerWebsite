import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ComingSoonPopup from "../components/ComingSoonPopup";
  
export default function CostCalculator() {
  const router = useRouter();
  const [showComingSoon, setShowComingSoon] = useState(false);
  const cards = [
    {
      title: "Full Home Interior",
      images: [
        "images/livingroom1.jpg",
        "images/livingroom2.jpg",
        // "images/livingroom3.jpg",
      ],
      desc: "Know the estimate price for your full home interiors",
    },
    {
      title: "Kitchen",
      images: [
        "images/kitchen1.jpg",
        "images/kitchen2.jpg",
        "images/kitchen3.jpg",
      ],
      desc: "Get an approximate costing for your kitchen interior",
    },
    {
      title: "Wardrobe",
      images: [
        "images/wardrobe1.jpg",
        "images/wardrobe2.jpg",
        // "images/wardrobe3.jpg",
      ],
      desc: "Our estimate for your dream wardrobe",
    },
  ];

  // Track index for each card
  const [indexes, setIndexes] = useState(cards.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexes((prev) =>
        prev.map((val, i) => (val + 1) % cards[i].images.length)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-semibold mb-2">
          Get the estimate for your
          <span className="text-blue-500"> Full Home</span>
        </h2>

        <p className="text-gray-600 mb-12">
          Calculate the approximate cost of doing up your home interiors
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              {/* Image Carousel */}
              <div className="relative h-44">
                {item.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={item.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      indexes[index] === i ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm mt-2 mb-6">
                  {item.desc}
                </p>

                <button
                  // onClick={() => router.push("/homeCalculator")}
                   onClick={() => setShowComingSoon(true)}
                  className="bg-blue-500 text-white px-8 py-3 rounded-full w-full hover:bg-blue-600"
                >
                  CALCULATE →
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
      {/* ✅ MUST be inside return */}
        {showComingSoon && (
          <ComingSoonPopup onClose={() => setShowComingSoon(false)} />
        )}
    </section>
  );
}