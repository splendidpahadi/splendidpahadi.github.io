"use client";

export default function ResumePage({ isActive }) {
  return (
    <article className={`resume ${isActive ? "active" : ""}`} data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Education Section */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {[
            { title: "MBA (IT & Fintech) – Manipal University Jaipur", year: "2021 — 2023" },
            { title: "B.Voc (Software Development) – Savitribai Phule Pune University", year: "2019 — 2021" },
            { title: "D.Voc (Software Development) – UBTER", year: "20016 — 2019" },
          ].map((edu, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{edu.title}</h4>
              <span>{edu.year}</span>
              <p className="timeline-text">
                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Experience Section */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {[
            { title: "Technical Project Manager | Tech Arch Softwares ", year: "(2024 - Present)" },
            { title: "Project Management Associate | GenY Medium ", year: "(2023 - 2024)" },
            { title: "Project Lead & Software Engineer | Pincox ", year: "(2021 - 2023)" },
          ].map((exp, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{exp.title}</h4>
              <span>{exp.year}</span>
              <p className="timeline-text">
                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Skills Section */}
      <section className="skill">
        <h3 className="h3 skills-title">My Skills</h3>

        <ul className="skills-list content-card">
          {[
            { name: "Web Design", value: 80 },
            { name: "Graphic Design", value: 70 },
            { name: "Branding", value: 90 },
            { name: "WordPress", value: 50 },
          ].map((skill, index) => (
            <li key={index} className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.value}>{skill.value}%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: `${skill.value}%` }}></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
