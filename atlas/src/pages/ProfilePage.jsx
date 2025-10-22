import React from "react";

const ProfilePage = () => {
  const user = {
    firstName: "Angie",
    lastName: "M",
    email: "angie@example.com",
    role: "Author",
    nationality: "South African",
  };

  const contracts = [
    {
      id: 1,
      type: "Author",
      start_date: "2024-05-01",
      end_date: "2025-05-01",
      royalty_percentage: "12%",
      flat_rate: "R10 000",
    },
    {
      id: 2,
      type: "Translator",
      start_date: "2023-03-10",
      end_date: "2024-03-10",
      royalty_percentage: "8%",
      flat_rate: "R6 000",
    },
  ];

  return (
    <div className="min-h-screen bg-beige p-10 text-navy">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* User Info */}
        <div className="flex flex-col md:flex-row items-center md:justify-between border-b border-taupe pb-6 mb-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">{user.firstName} {user.lastName}</h2>
            <p className="text-taupe">{user.email}</p>
            <p className="text-taupe">{user.role}</p>
            <p className="text-taupe">Nationality: {user.nationality}</p>
          </div>
          <button className="bg-deepTeal text-white px-6 py-2 rounded-md hover:bg-navy transition">
            Edit Profile
          </button>
        </div>

        {/* Contracts Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-navy">My Contracts</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {contracts.map((c) => (
              <div
                key={c.id}
                className="border border-taupe rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <p className="font-semibold text-deepTeal mb-2">{c.type} Contract</p>
                <p>Start Date: {c.start_date}</p>
                <p>End Date: {c.end_date}</p>
                <p>Royalty: {c.royalty_percentage}</p>
                <p>Flat Rate: {c.flat_rate}</p>
                <button className="mt-3 text-sm bg-maroon text-white px-3 py-1 rounded-md hover:bg-chestnut transition">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
