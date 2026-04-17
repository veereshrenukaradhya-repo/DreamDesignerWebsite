import { useState, useEffect } from "react";

export default function LeadPopup({ onClose }) {

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

    // Name validation
    if (!/^[A-Za-z ]{3,}$/.test(form.name)) {
      newErrors.name = "Enter a valid name (min 3 letters)";
    }

    // Phone validation
    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10 digit mobile number";
    }

    // Pincode validation
    if (!/^\d{6}$/.test(form.pincode)) {
      newErrors.pincode = "Enter valid 6 digit pincode";
    }

    // Email optional validation
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter valid email address";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!validate()) return;

    submitLead(form);

    setSubmitted(true);

  };

  // auto close after success
  useEffect(() => {

    if (submitted) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }

  }, [submitted, onClose]);

  const submitLead = (data) => {

    console.log("Lead Data:", data);

    // future backend call
    /*
    fetch("/api/lead",{
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body:JSON.stringify(data)
    })
    */

  };

  return (

    <div className="fixed top-1/2 right-6 -translate-y-1/2 z-50">

      <div className="bg-white w-[460px] shadow-2xl rounded-lg overflow-hidden relative">

        {/* Close Button */}
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
          className="w-full h-[160px] object-cover"
        />

        {!submitted ? (

          <form onSubmit={handleSubmit} className="p-6">

            <h2 className="font-semibold text-lg mb-4">
              Fill details to unlock the offer
            </h2>

            {/* Name */}
            <input
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 mb-1"
            />
            {errors.name && (
              <p className="text-blue-500 text-sm mb-2">{errors.name}</p>
            )}

            {/* Phone */}
            <input
              name="phone"
              placeholder="Enter mobile number"
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 mb-1"
            />
            {errors.phone && (
              <p className="text-blue-500 text-sm mb-2">{errors.phone}</p>
            )}

            {/* Pincode */}
            <input
              name="pincode"
              placeholder="Enter pincode"
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 mb-1"
            />
            {errors.pincode && (
              <p className="text-blue-500 text-sm mb-2">{errors.pincode}</p>
            )}

            {/* Email (Optional) */}
            <input
              name="email"
              placeholder="Email (optional)"
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 mb-1"
            />
            {errors.email && (
              <p className="text-blue-500 text-sm mb-2">{errors.email}</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 mt-3"
            >
              CONTINUE
            </button>

          </form>

        ) : (

          <div className="p-6 text-center">

            <h2 className="text-lg font-semibold text-green-600 mb-2">
              Thank you!
            </h2>

            <p className="text-gray-600">
              Our designer will get in touch with you soon.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}