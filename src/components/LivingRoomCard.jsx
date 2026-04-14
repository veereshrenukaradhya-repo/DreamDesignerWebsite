export default function LivingRoomCard() {
  return (
    <div className="group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">

      {/* Image */}
      <div className="relative h-64">

        <img
          src="images/livingroom2.jpg"
          alt="Living Room"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

      </div>

      {/* Text */}
      <div className="p-5 bg-white">

        <h3 className="text-xl font-semibold mb-2">
          Living Room
        </h3>

        <p className="text-gray-600 text-sm">
          Modern living spaces
        </p>

      </div>

    </div>
  );
}