export default function KitchenCard() {

  return (
    <div className="group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">

      <div className="relative h-64">

        <img
          src="images/kitchen.jpg"
          alt="Kitchen"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />

        <div className="absolute inset-0 bg-black/30"></div>

      </div>

      <div className="p-5 bg-white">

        <h3 className="text-xl font-semibold mb-2">
          Kitchen
        </h3>

        <p className="text-gray-600 text-sm">
          Functional modular kitchen designs
        </p>

      </div>

    </div>
  );
}