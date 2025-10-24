import React, { useState } from "react";
import "./book.css";
import Navbar from "../home/componets/navbar";
import BookContent from "./componets/bookContent";
import GraphSection from "./componets/graphSection";

export default function BookPage() {
  const [role, setRole] = useState("publisher"); // Default to publisher
  const [showRoleOptions, setShowRoleOptions] = useState(false);

  const roles = [
    { value: "publisher", label: "Publisher View" },
    { value: "author", label: "Author View" },
    { value: "editor", label: "Editor View" },
    { value: "translator", label: "Translator View" },

  ];

  return (
    <div className="book-page">
      <Navbar />

      <main className="container">
        {/* Book Content Section */}
        <BookContent />

        {/* Graph Section */}
        <GraphSection role={role} />
      </main>

      {/* Floating Role Button */}
      <button 
        className="floating-role-btn"
        onClick={() => setShowRoleOptions(!showRoleOptions)}
      >
        Change View
      </button>

      {showRoleOptions && (
        <div className="role-options">
          {roles.map((roleOption) => (
            <div
              key={roleOption.value}
              className={`role-option ${role === roleOption.value ? 'active' : ''}`}
              onClick={() => {
                setRole(roleOption.value);
                setShowRoleOptions(false);
              }}
            >
              {roleOption.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}