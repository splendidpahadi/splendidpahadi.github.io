"use client";

import { useState } from "react";
import Image from "next/image";

export default function PortfolioPage({ isActive }) {
  const [activeCategory, setActiveCategory] = useState("all")
  const [isSelectOpen, setIsSelectOpen] = useState(false)

  const projects = [
    { id: 1, title: "Finance", category: "web development", image: "/assets/images/project-1.jpg" },
    { id: 2, title: "Orizon", category: "web development", image: "/assets/images/project-2.png" },
    { id: 3, title: "Fundo", category: "web design", image: "/assets/images/project-3.jpg" },
    { id: 4, title: "Brawlhalla", category: "applications", image: "/assets/images/project-4.png" },
    { id: 5, title: "DSM.", category: "web design", image: "/assets/images/project-5.png" },
    { id: 6, title: "MetaSpark", category: "web design", image: "/assets/images/project-6.png" },
    { id: 7, title: "Summary", category: "web development", image: "/assets/images/project-7.png" },
    { id: 8, title: "Task Manager", category: "applications", image: "/assets/images/project-8.jpg" },
    { id: 9, title: "Arrival", category: "web development", image: "/assets/images/project-9.png" },
  ]

  const categories = ["all", "web design", "applications", "web development"]

  const handleFilterClick = (category) => {
    setActiveCategory(category)
    setIsSelectOpen(false)
  }

  const toggleSelect = () => setIsSelectOpen(!isSelectOpen)

  return (
    <article className={`portfolio ${isActive ? "active" : ""}`} data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        {/* Filter buttons for desktop */}
        <ul className="filter-list">
          {categories.map((category) => (
            <li key={category} className="filter-item">
              <button
                className={activeCategory === category ? "active" : ""}
                onClick={() => handleFilterClick(category)}
                data-filter-btn
              >
                {category === "all" ? "All" : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* Filter dropdown for mobile */}
        <div className="filter-select-box">
          <button className={`filter-select ${isSelectOpen ? "active" : ""}`} onClick={toggleSelect} data-select>
            <div className="select-value" data-select-value>
              {activeCategory === "all" ? "Select category" : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
            </div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className={`select-list ${isSelectOpen ? "active" : ""}`}>
            {categories.map((category) => (
              <li key={category} className="select-item">
                <button onClick={() => handleFilterClick(category)} data-select-item>
                  {category === "all" ? "All" : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects grid */}
        <ul className="project-list">
          {projects
            .filter((project) => activeCategory === "all" || activeCategory === project.category)
            .map((project) => (
              <li key={project.id} className="project-item active" data-filter-item data-category={project.category}>
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <Image src={project.image} alt={project.title} width={300} height={200} loading="lazy" />
                  </figure>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                </a>
              </li>
            ))}
        </ul>
      </section>
    </article>
  )
}
