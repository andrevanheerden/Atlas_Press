import React, { useState } from "react";
import "../book.css";
import bookIMG from "../../../assets/images/book.png";

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

/* ---------------------------- Small UI Components --------------------------- */
function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

function AuthorCard({ data }) {
  return (
    <div className="author-section card">
      <h3>Author</h3>
      <div className="author-card">
        <div className="avatar">{data.avatar}</div>
        <div className="card-body">
          <div className="pill">{data.name}</div>
          <p className="muted">{data.bio}</p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------ People Accordion Component ----------------------- */
function PeopleAccordion({ title, people, type }) {
  const [activePerson, setActivePerson] = useState(0);

  return (
    <section className="people-accordion card">
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

            {/* Always show description for active person */}
            {activePerson === index && (
  <div className="accordion-content">
    <div className="person-details">
      <p className="muted">{person.bio}</p>
      <div className="person-role">
        {type === 'editor' ? person.role : `${person.language} Translator`}
      </div>
    </div>
  </div>
)}

          </div>
        ))}
      </div>
    </section>
  );
}


/* --------------------------------- Main Book Content -------------------------------- */
export default function BookContent() {
  return (
    <div className="book-content">
      {/* Top Book Info Section */}
      <div className="top-row">
       <div className="cover">
  <div className="cover-img">
    <img 
      src={bookIMG} 
      alt="Book Cover" 
      style={{ 
        width: '100%', 
        height: '100%', 
        objectFit: 'cover', 
        borderRadius: '16px', 
        backgroundColor: 'transparent'
      }} 
    />
  </div>
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

      {/* Author Section */}
      <AuthorCard data={author} />

      {/* Editors Section */}
      <PeopleAccordion 
        title="Editors" 
        people={editors} 
        type="editor" 
      />

      {/* Translators Section */}
      <PeopleAccordion 
        title="Translators" 
        people={translators} 
        type="translator" 
      />
    </div>
  );
}