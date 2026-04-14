import KitchenCard from "./KitchenCard";
import BedroomCard from "./BedroomCard";
import LivingRoomCard from "./LivingRoomCard";
import WardrobeCard from "./WardrobeCard";

export default function CategoryCards() {

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}

        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Explore Designs by Room
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto">
            Discover beautiful interiors crafted for every room in your home.
          </p>

        </div>


        {/* Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <KitchenCard />

          <BedroomCard />

          <LivingRoomCard />

          <WardrobeCard />

        </div>

      </div>

    </section>
  );
}