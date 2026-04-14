import { useState } from "react";

export default function Calculator() {

  const [bhk, setBhk] = useState("");

  return (

    <div className="bg-gray-100 min-h-screen flex items-center justify-center">

      <div className="bg-white shadow-lg rounded-xl p-10 w-[600px]">

        <h2 className="text-xl font-semibold text-center mb-6">
          Select your BHK type
        </h2>

        <div className="space-y-4">

          {["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK+"].map((type) => (

            <label
              key={type}
              className={`border rounded-lg p-4 flex items-center cursor-pointer
              ${bhk === type ? "border-red-500" : "border-gray-300"}`}
            >

              <input
                type="radio"
                name="bhk"
                value={type}
                className="mr-3"
                onChange={() => setBhk(type)}
              />

              {type}

            </label>

          ))}

        </div>

        <div className="flex justify-between mt-8">

          <button className="text-gray-500">
            BACK
          </button>

          <button className="bg-red-500 text-white px-6 py-2 rounded-full">
            NEXT
          </button>

        </div>

      </div>

    </div>

  );
}