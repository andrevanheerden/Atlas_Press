import React from "react";

const LoginPage = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-beige to-deepTeal">
      {/* Left Image Section */}
      <div className="hidden md:flex w-1/2 bg-navy text-white items-center justify-center">
        <div className="text-center px-10">
          <h1 className="text-5xl font-bold mb-4">Welcome Back</h1>
          <p className="text-lg text-beige">
            Log in to continue your writing journey.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex flex-col justify-center w-full md:w-1/2 bg-white px-10 md:px-20">
        <h2 className="text-3xl font-semibold text-navy mb-6">Login</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-taupe rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-deepTeal"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-taupe rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-deepTeal"
          />
          <select
            className="w-full border border-taupe rounded-md p-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-deepTeal"
          >
            <option value="">Select Role</option>
            <option value="author">Author</option>
            <option value="editor">Editor</option>
            <option value="translator">Translator</option>
            <option value="admin">Admin</option>
          </select>
          <button className="w-full bg-deepTeal text-white py-3 rounded-md hover:bg-navy transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
