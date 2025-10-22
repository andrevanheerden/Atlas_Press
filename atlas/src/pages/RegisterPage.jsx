import React from "react";

const RegisterPage = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-deepTeal to-navy">
      {/* Left Art Section */}
      <div className="hidden md:flex w-1/2 bg-cover bg-center text-white items-center justify-center" style={{ backgroundImage: "url('/forest-art.jpg')" }}>
        <h1 className="text-4xl font-bold bg-maroon/70 p-6 rounded-xl">
          Join the Author’s World
        </h1>
      </div>

      {/* Right Form Section */}
      <div className="flex flex-col justify-center w-full md:w-1/2 bg-white px-10 md:px-20">
        <h2 className="text-3xl font-semibold text-navy mb-6">Register</h2>
        <form className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 border border-taupe rounded-md p-3 focus:ring-2 focus:ring-beige"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 border border-taupe rounded-md p-3 focus:ring-2 focus:ring-beige"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-taupe rounded-md p-3 focus:ring-2 focus:ring-beige"
          />
          <select
            className="w-full border border-taupe rounded-md p-3 focus:ring-2 focus:ring-beige text-gray-600"
          >
            <option value="">Select Role</option>
            <option value="author">Author</option>
            <option value="editor">Editor</option>
            <option value="translator">Translator</option>
            <option value="admin">Admin</option>
          </select>
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-taupe rounded-md p-3 focus:ring-2 focus:ring-beige"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border border-taupe rounded-md p-3 focus:ring-2 focus:ring-beige"
          />
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="accent-maroon" />
            <p className="text-sm text-gray-700">
              I agree to the <span className="text-maroon underline cursor-pointer">Terms of Service</span> and <span className="text-maroon underline cursor-pointer">Privacy Policy</span>.
            </p>
          </div>
          <button className="w-full bg-maroon text-white py-3 rounded-md hover:bg-chestnut transition">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
