export default function HeroSearch() {
  return (
    <form className="flex w-full bg-white rounded-full overflow-hidden shadow-lg">

      <input
        type="text"
        placeholder="Search design ideas..."
        className="flex-1 px-5 py-3 outline-none"
      />

      <button className="bg-blue-500 text-white px-6 py-3 hover:bg-blue-600">
        Search
      </button>

    </form>
  );
}