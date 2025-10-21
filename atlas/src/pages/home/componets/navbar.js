import React, { useState } from "react";
import "../home.css";
import logo from "../../../assets/images/logo.png";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuData = {
    Books: {
      columns: [
        {
          title: "Trending",
          items: [
            "Trending This Week",
            "Romantasy Books To Start Reading Now",
            "Page-Turning Series To Start Now",
            "Books to Cope With Anxiety",
            "Popular Large Print Books",
            "Anti-Racist Resources",
          ],
        },
        {
          title: "Staff Picks",
          items: ["Romance", "Mystery & Thriller", "Fiction", "Memoir & Fiction"],
        },
        {
          title: "Features & Interviews",
          items: [
            "Emma Brodie Interview",
            "James Ellroy Interview",
            "Qian Julie Wang Interview",
            "Deepak Chopra Essay",
            "How Can I Get Published?",
          ],
        },
        {
          title: "For Book Clubs",
          items: [
            "Reese’s Book Club",
            "Oprah’s Book Club",
            "Guide: Tell Me Everything",
            "Guide: James",
          ],
        },
      ],
    },
    Kids: {
      columns: [
        {
          title: "Discover",
          items: ["Kids’ Bestsellers", "Picture Books", "Middle Grade Reads"],
        },
        {
          title: "For Parents & Teachers",
          items: ["Educational Books", "Bedtime Stories", "Classroom Guides"],
        },
      ],
    },
    Popular: {
      columns: [
        {
          title: "Top Picks",
          items: ["Most Read", "Editor’s Choice", "Award Winners"],
        },
      ],
    },
  };

  const handleMouseEnter = (menu) => setActiveMenu(menu);
  const handleMouseLeave = () => setActiveMenu(null);

  return (
    <div className="navbar-wrapper" onMouseLeave={handleMouseLeave}>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="logo" className="navbar-logo" />
          <span className="navbar-title">Atlas Press</span>
        </div>

        <ul className="navbar-links">
          {Object.keys(menuData).map((menu) => (
            <li
              key={menu}
              className="navbar-item"
              onMouseEnter={() => handleMouseEnter(menu)}
            >
              {menu}
            </li>
          ))}
        </ul>

        <div className="navbar-icons">
          <i className="fa fa-user"></i>
          <i className="fa fa-shopping-cart"></i>
          <i className="fa fa-search"></i>
        </div>
      </nav>

      {activeMenu && (
        <div className="mega-dropdown">
          <div className="dropdown-content">
            {menuData[activeMenu].columns.map((col, index) => (
              <div key={index} className="dropdown-column">
                <h4>{col.title}</h4>
                <ul>
                  {col.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="dropdown-banner">
              <h3>Let Kids Read</h3>
              <p>Books Bans Are on the Rise in America</p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
