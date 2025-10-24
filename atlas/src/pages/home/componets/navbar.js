import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../home.css";
import logo from "../../../assets/images/logo.png";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();

  const menuData = {
    Books: {
      columns: [
        {
          title: "My Books",
          items: [
            "Book 1",
          ],
        },
      ],
    },
    Kids: {
      columns: [
        {
          title: "Discover",
          items: ["Kids' Bestsellers", "Picture Books", "Middle Grade Reads"],
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
          items: ["Most Read", "Editor's Choice", "Award Winners"],
        },
      ],
    },
  };

  const handleMouseEnter = (menu) => setActiveMenu(menu);
  const handleMouseLeave = () => setActiveMenu(null);

  const handleBookClick = (bookName) => {
    if (bookName === "Book 1") {
      navigate("/books");
    }
  };

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
                    <li 
                      key={i} 
                      onClick={() => handleBookClick(item)}
                      style={{ cursor: "pointer" }}
                    >
                      {item}
                    </li>
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