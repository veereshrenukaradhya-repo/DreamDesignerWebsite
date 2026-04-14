export default function ImageCard({ title, description, imageUrl }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white w-full max-w-md">
      {/* Fixed size container */}
      <div className="w-full h-64 relative">
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}