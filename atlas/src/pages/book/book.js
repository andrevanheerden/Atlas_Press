import React, { useState } from "react";
import "./book.css";
import Navbar from "../home/componets/navbar";

// Import Chart.js components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

/* ---------------------------- Enhanced Sample Data --------------------------- */
const bookInfo = {
  title: "Shadows of the Forgotten Kingdom",
  description: "In a world where magic has been forgotten and kingdoms lie in ruins, a young scholar discovers an ancient artifact that holds the key to restoring balance. As dark forces rise from the shadows, she must embark on a perilous journey across continents to uncover the truth about her heritage and save the realm from eternal darkness. This epic fantasy combines rich world-building with complex characters and political intrigue.",
  tags: ["Epic Fantasy", "Magic", "Adventure", "Kingdom Building", "Dark Forces", "Mystery", "Quest"],
};

const author = {
  name: "Elena Vance",
  bio: "Elena Vance is an award-winning fantasy author known for her intricate world-building and complex character development. With over 15 published novels, she has been featured in the New York Times Bestseller list multiple times. Her work often explores themes of identity, power, and the consequences of forgotten histories.",
  avatar: "EV"
};

const editors = [
  { 
    name: "Marcus Thorne", 
    bio: "Senior editor with 12 years experience in fantasy and speculative fiction. Previously worked with bestselling authors like J.K. Rowling and Brandon Sanderson.",
    role: "Lead Editor",
    avatar: "MT"
  },
  { 
    name: "Sarah Chen", 
    bio: "Specialized in developmental editing and character arcs. Graduate of the Columbia Publishing Course with expertise in epic fantasy and world-building.",
    role: "Developmental Editor",
    avatar: "SC"
  },
  { 
    name: "David Rodriguez", 
    bio: "Copy editor with meticulous attention to detail. Ensures consistency in magical systems and historical timelines across the series.",
    role: "Copy Editor", 
    avatar: "DR"
  },
  { 
    name: "Amira Patel", 
    bio: "Manuscript editor focusing on pacing and narrative flow. Previously edited for Tor Books and specializes in multi-POV epic fantasies.",
    role: "Manuscript Editor",
    avatar: "AP"
  }
];

const translators = [
  { 
    name: "Isabelle Moreau", 
    language: "French",
    bio: "Award-winning translator of fantasy literature with 20+ published translations. Known for preserving cultural nuances in magical systems.",
    avatar: "IM"
  },
  { 
    name: "Carlos Mendez", 
    language: "Spanish",
    bio: "Specialized in translating epic fantasy and maintaining the lyrical quality of prose. Has translated over 30 fantasy novels.",
    avatar: "CM"
  },
  { 
    name: "Klaus Richter", 
    language: "German", 
    bio: "Expert in translating complex world-building and magical terminology. PhD in Comparative Literature from Heidelberg University.",
    avatar: "KR"
  },
  { 
    name: "Yuki Tanaka", 
    language: "Japanese",
    bio: "Renowned for translating Western fantasy into Japanese while maintaining the original's spirit. Multiple Seiun Award nominee.",
    avatar: "YT"
  }
];

// Chart data with enhanced numbers
const soldByCountry = {
  labels: ["United States", "United Kingdom", "Germany", "France", "Canada", "Australia", "Japan"],
  datasets: [{
    label: 'Books Sold',
    data: [15600, 8900, 6700, 5200, 4800, 4200, 3800],
    backgroundColor: '#6B4F4F',
    borderRadius: 6,
  }]
};

const soldByMonth = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [{
    label: 'Books Sold',
    data: [3200, 4800, 5200, 6100, 7800, 9200, 10500, 9800, 8600, 7200, 5800, 4500],
    borderColor: '#6B4F4F',
    backgroundColor: 'rgba(107, 79, 79, 0.1)',
    tension: 0.4,
    fill: true,
  }]
};

const royaltiesThisMonth = {
  labels: ["Author Royalties", "Publisher Share", "Translator Fees", "Marketing Costs"],
  datasets: [{
    data: [28500, 15200, 8700, 6300],
    backgroundColor: ['#6B4F4F', '#3B5A5A', '#8A6C6C', '#A98B7B'],
    borderWidth: 0,
  }]
};

const printedByMonth = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  datasets: [{
    label: 'Books Printed',
    data: [12500, 11800, 14200, 15600, 18900, 21500, 19800, 17600],
    borderColor: '#8A6C6C',
    backgroundColor: 'rgba(200, 167, 154, 0.3)',
    fill: true,
    tension: 0.4,
  }]
};

const topAuthors = {
  labels: ["Elena Vance", "Robert Bright", "Sarah Chen", "Marcus Thorne", "Amira Patel"],
  datasets: [{
    label: 'Sales (in thousands)',
    data: [156, 128, 98, 87, 76],
    backgroundColor: '#6B4F4F',
  }]
};

/* ---------------------------- Small UI Components --------------------------- */
function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

function AuthorCard({ data }) {
  return (
    <div className="card author-card">
      <div className="avatar">{data.avatar}</div>
      <div className="card-body">
        <div className="pill">{data.name}</div>
        <p className="muted">{data.bio}</p>
      </div>
    </div>
  );
}

/* ------------------------ People Accordion Component ----------------------- */
function PeopleAccordion({ title, people, type }) {
  const [activePerson, setActivePerson] = useState(0);

  return (
    <section className="people-accordion">
      <h3>{title}</h3>
      <div className="accordion-container">
        {people.map((person, index) => (
          <div
            key={index}
            className={`accordion-item ${activePerson === index ? 'active' : ''}`}
            onClick={() => setActivePerson(index)}
          >
            <div className="person-avatar" style={{ 
              background: `linear-gradient(135deg, ${type === 'editor' ? '#3B5A5A' : '#8A6C6C'}, ${type === 'editor' ? '#5A7A7A' : '#A98B7B'})` 
            }}>
              {person.avatar}
            </div>
            <h4>{person.name}</h4>
            <div className="accordion-content">
              <div className="person-details">
                <p className="muted">{person.bio}</p>
                <div className="person-role">
                  {type === 'editor' ? person.role : `${person.language} Translator`}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ Graph Section ------------------------------ */
function GraphSection({ role }) {
  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } }
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } }
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'bottom' } }
  };

  const horizontalBarOptions = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } }
  };

  const isAdmin = role === "admin" || role === "publisher";
  const showRoyalties = isAdmin || role === "author";
  const showCountry = isAdmin || role === "publisher" || role === "editor";
  const showPrinted = isAdmin || role === "publisher";

  return (
    <section className="graphs">
      <div className="graphs-row">
        {showCountry && (
          <div className="graph-card">
            <h4>Books Sold per Country</h4>
            <div className="chart-container">
              <Bar data={soldByCountry} options={barOptions} />
            </div>
          </div>
        )}

        <div className="graph-card">
          <h4>Books Sold per Month</h4>
          <div className="chart-container">
            <Line data={soldByMonth} options={lineOptions} />
          </div>
        </div>
      </div>

      <div className="graphs-row">
        {showRoyalties && (
          <div className="graph-card small">
            <h4>Royalties Distribution</h4>
            <div className="chart-container">
              <Doughnut data={royaltiesThisMonth} options={pieOptions} />
            </div>
          </div>
        )}

        {showPrinted && (
          <div className="graph-card small">
            <h4>Books Printed per Month</h4>
            <div className="chart-container">
              <Line data={printedByMonth} options={lineOptions} />
            </div>
          </div>
        )}

        {isAdmin && (
          <div className="graph-card small">
            <h4>Top Authors by Sales</h4>
            <div className="chart-container">
              <Bar data={topAuthors} options={horizontalBarOptions} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* --------------------------------- Main Page -------------------------------- */
export default function BookPage() {
  const [role, setRole] = useState("publisher"); // Default to publisher
  const [showRoleOptions, setShowRoleOptions] = useState(false);

  const roles = [
    { value: "publisher", label: "Publisher View" },
    { value: "author", label: "Author View" },
    { value: "editor", label: "Editor View" },
    { value: "translator", label: "Translator View" },
    { value: "admin", label: "Admin View" }
  ];

  return (
    <div className="book-page">
      <Navbar />

      <main className="container">
        <div className="top-row">
          <div className="cover">
            <div className="cover-img">BOOK COVER</div>
          </div>

          <div className="book-info card">
            <h2>{bookInfo.title}</h2>
            <p className="muted">{bookInfo.description}</p>
            <div className="tags">
              <div className="tags-label">Genres & Themes</div>
              <div className="tags-list">
                {bookInfo.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </div>
        </div>

        <AuthorCard data={author} />

        <PeopleAccordion 
          title="Editors" 
          people={editors} 
          type="editor" 
        />

        <PeopleAccordion 
          title="Translators" 
          people={translators} 
          type="translator" 
        />

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