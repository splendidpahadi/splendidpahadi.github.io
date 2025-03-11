"use client";

import Image from "next/image";

export default function AboutPage({ isActive, onOpenModal }) {
  const testimonials = [
    {
      id: 1,
      avatar: "/assets/images/avatar-1.png",
      name: "Daniel Lewis",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done...",
    },
    {
      id: 2,
      avatar: "/assets/images/avatar-2.png",
      name: "Jessica Miller",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done...",
    },
    {
      id: 3,
      avatar: "/assets/images/avatar-3.png",
      name: "Emily Evans",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done...",
    },
    {
      id: 4,
      avatar: "/assets/images/avatar-4.png",
      name: "Henry William",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done...",
    },
  ]

  const handleTestimonialClick = (testimonial) => {
    onOpenModal({
      img: testimonial.avatar,
      title: testimonial.name,
      text: testimonial.text,
    })
  }

  return (
    <article className={`about ${isActive ? "active" : ""}`} data-page="about">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>

      <section className="about-text">
        <p>
        With over 5 years of experience in software development and project management, I specialize in delivering robust digital solutions tailored to business needs. My expertise spans Agile methodologies, full-stack development, IT strategy, and business optimization using AI. Currently, I lead technical projects at Tech Arch Softwares, ensuring seamless execution from concept to deployment.
</p><p>
Driven by a passion for technology and problem-solving, I have collaborated with startups and enterprises, optimizing workflows, enhancing user experiences, and boosting operational efficiency. Whether it’s crafting scalable web applications, streamlining development lifecycles, or integrating AI for business intelligence, I focus on delivering measurable results.
        </p>
      </section>

      {/* Service Section */}
      <section className="service">
        <h3 className="h3 service-title">What I am Doing</h3>

        <ul className="service-list">
          {[
            { title: "Web Design", desc: "Modern and high-quality designs.", icon: "/assets/images/icon-design.svg" },
            { title: "Web Development", desc: "Professional-grade website development.", icon: "/assets/images/icon-dev.svg" },
            { title: "Mobile Apps", desc: "iOS and Android application development.", icon: "/assets/images/icon-app.svg" },
            { title: "Photography", desc: "High-quality professional photography.", icon: "/assets/images/icon-photo.svg" },
          ].map((service, index) => (
            <li key={index} className="service-item">
              <div className="service-icon-box">
                <Image src={service.icon} alt={`${service.title} icon`} width={40} height={40} />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id} className="testimonials-item">
              <div className="content-card" data-testimonials-item onClick={() => handleTestimonialClick(testimonial)}>
                <figure className="testimonials-avatar-box">
                  <Image src={testimonial.avatar} alt={testimonial.name} width={60} height={60} />
                </figure>

                <h4 className="h4 testimonials-item-title">{testimonial.name}</h4>

                <div className="testimonials-text">
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Clients Section */}
      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          {Array.from({ length: 6 }).map((_, i) => (
            <li key={i} className="clients-item">
              <a href="#">
                <Image src={`/assets/images/logo-${i + 1}.png`} alt={`Client ${i + 1}`} width={120} height={50} />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
