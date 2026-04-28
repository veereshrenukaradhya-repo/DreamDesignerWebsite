"use client";

import { useState, useEffect } from "react";

export default function LeadPopup({ onClose }) {
const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pincode: "",
    email: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!/^[A-Za-z ]{3,}$/.test(form.name)) {
      newErrors.name = "Enter valid name";
    }

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter valid mobile number";
    }

    if (!/^\d{6}$/.test(form.pincode)) {
      newErrors.pincode = "Enter valid pincode";
    }

    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
  setLoading(true); // ✅ start loader
    await submitLead(form);
  };

    const submitLead = async (data) => {
  try {
    const res = await fetch("/api/send-lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      setSubmitted(true);
    } else {
      alert("Failed to send lead");
    }
  } catch (error) {
    console.error(error);
    alert("Error sending lead");
  }finally {
    setLoading(false); // ✅ stop loader
  }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [submitted, onClose]);

  return (
    <div className="fixed inset-0 sm:inset-auto sm:top-1/2 sm:right-6 sm:-translate-y-1/2 z-50 flex items-center justify-center sm:block bg-black/50 sm:bg-transparent px-4 sm:px-0">

      <div className="bg-white w-full max-w-[95%] sm:w-[420px] md:w-[460px] rounded-lg shadow-2xl relative overflow-hidden">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* Banner */}
        <img
          src="images/popupbanner.png"
          alt="Offer"
          className="w-full h-[140px] sm:h-[160px] object-cover"
        />

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-4 sm:p-6">

            <h2 className="font-semibold text-base sm:text-lg mb-4">
              Fill details to unlock the offer
            </h2>

            <input
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 mb-2 text-sm"
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

            <input
              name="phone"
              placeholder="Enter mobile number"
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 mb-2 text-sm"
            />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}

            <input
              name="pincode"
              placeholder="Enter pincode"
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 mb-2 text-sm"
            />
            {errors.pincode && <p className="text-red-500 text-xs">{errors.pincode}</p>}

            <input
              name="email"
              placeholder="Email (optional)"
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 mb-2 text-sm"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

           <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-md font-semibold transition ${
                loading
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              {loading ? (
                <>
                  <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                  Sending...
                </>
              ) : (
                "CONTINUE"
              )}
            </button>

          </form>
        ) : (
          <div className="p-6 text-center">
            <h2 className="text-lg font-semibold text-green-600 mb-2">
              Thank you!
            </h2>
            <p className="text-gray-600 text-sm">
              Our designer will contact you soon.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}