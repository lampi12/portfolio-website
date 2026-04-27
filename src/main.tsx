import React from "react";
import ReactDOM from "react-dom/client";
import { profile } from "./profile";
import "./styles.css";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function App() {
  const [firstName, ...lastNameParts] = profile.name.split(" ");
  const lastName = lastNameParts.join(" ");

  return (
    <main>
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Back to top">
          <span className="brand-mark">{profile.initials}</span>
          <span>
            <strong>{profile.name}</strong>
            <small>{profile.role}</small>
          </span>
        </a>
        <div className="nav-shell">
          <nav aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="nav-cta" href={`mailto:${profile.email}`}>
            Email
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{profile.location}</p>
          <h1>
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h1>
          <p className="title">{profile.role}</p>
          <p className="summary">{profile.summary}</p>
          <div className="actions" aria-label="Portfolio links">
            {profile.links.map((link) => (
              <a className={link.primary ? "button primary" : "button"} key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="hero-visual" aria-label="Rotating project preview">
          <div className="showcase">
            <div className="showcase-topbar">
              <span></span>
              <span></span>
              <span></span>
              <strong>Project workspace</strong>
            </div>
            <div className="showcase-track">
              {profile.projects.map((project, index) => (
                <article className={`showcase-slide slide-${index + 1}`} key={project.name}>
                  <p>{project.type}</p>
                  <h2>{project.name}</h2>
                  <div className="showcase-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="showcase-tags">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <div className="showcase-sidebar">
              <span>Build</span>
              <span>Test</span>
              <span>Ship</span>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics" aria-label="Career highlights">
        {profile.highlights.map((highlight) => (
          <div key={highlight.label}>
            <strong>{highlight.value}</strong>
            <span>{highlight.label}</span>
          </div>
        ))}
      </section>

      <section className="section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Practical engineering impact</h2>
        </div>
        <div className="timeline">
          {profile.experience.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.period}`}>
              <div>
                <span>{item.period}</span>
                <h3>{item.role}</h3>
                <p>{item.company}</p>
              </div>
              <ul>
                {item.impact.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="skills">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Tools I use to ship reliable software</h2>
        </div>
        <div className="skill-grid">
          {profile.skills.map((group) => (
            <article className="skill-card" key={group.category}>
              <h3>{group.category}</h3>
              <div>
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2>Featured work</h2>
        </div>
        <div className="project-grid">
          {profile.projects.map((project, index) => (
            <article className="project-card" key={project.name}>
              <div className="project-preview" aria-hidden="true">
                <span className="project-window-dot"></span>
                <span className="project-window-dot"></span>
                <span className="project-window-dot"></span>
                <strong>{String(index + 1).padStart(2, "0")}</strong>
              </div>
              <div>
                <p>{project.type}</p>
                <h3>{project.name}</h3>
                <span>{project.stack.join(" / ")}</span>
              </div>
              <p>{project.description}</p>
              <a href={project.href}>View project</a>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Open to software engineering roles, freelance builds, and technical collaborations.</h2>
          <p>
            Send a note if you want a developer who can turn product ideas into clean interfaces,
            dependable APIs, and maintainable code.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button primary" href={`mailto:${profile.email}`}>
            Email me
          </a>
          <a className="button dark" href={profile.links[1].href}>
            GitHub
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <a className="footer-brand" href="#top">
            {profile.name}
          </a>
          <p>{profile.role} building clean, maintainable applications.</p>
        </div>
        <div className="footer-links" aria-label="Footer links">
          {profile.links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
