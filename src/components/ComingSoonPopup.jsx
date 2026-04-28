"use client";

import { useEffect, useState } from "react";

export default function ComingSoonPopup({ onClose }) {

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Auto close after 3 sec (only after submit OR show)
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Notify Email:", email);
    setSubmitted(true);

    // optional API call here later
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 animate-fadeIn">

      <div className="bg-white w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden animate-scaleIn">

        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white text-center p-5">
          <div className="text-3xl">🚧</div>
          <h2 className="text-xl font-bold mt-1">Coming Soon</h2>
          <p className="text-sm opacity-90">
            We’re upgrading this feature
          </p>
        </div>

        {/* Body */}
        <div className="p-6 text-center">

          {!submitted ? (
            <>
              <p className="text-gray-600 text-sm mb-4">
                This module is under development. Want to get notified when it goes live?
              </p>

              {/* Notify Form */}
              <form onSubmit={handleSubmit} className="space-y-3">

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white py-2 rounded-md font-semibold hover:bg-pink-600 transition"
                >
                  🔔 Notify Me
                </button>

              </form>
            </>
          ) : (
            <div className="text-green-600 font-semibold">
              🎉 You’ll be notified soon!
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-3 text-center border-t">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-sm"
          >
            Close
          </button>
        </div>

      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-in-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.25s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from { transform: scale(0.9); }
          to { transform: scale(1); }
        }
      `}</style>

    </div>
  );
}