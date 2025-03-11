"use client";

import { useState } from "react";
import Image from "next/image";

export default function Sidebar() {
  const [isActive, setIsActive] = useState(false)

  return (
    <aside className={`sidebar ${isActive ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image src="/assets/images/my-avatar.png" alt="SplendidPahadi" width={80} height={150} />
        </figure>

        <div className="info-content">
          <h1 className="name" title="SplendidPahadi">
            Priyanshu Purohit
          </h1>
          <p className="title">Web Developer</p>
        </div>

        <button className="info_more-btn" onClick={() => setIsActive(!isActive)} data-sidebar-btn>
          <span>{isActive ? "Hide Contacts" : "Show Contacts"}</span>
          <ion-icon
            name="chevron-down"
            style={{ transform: isActive ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s" }}
          ></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          {[
            { icon: "mail-outline", title: "Email", value: "Priyanshupurohit6@gmail.com", link: "mailto:priyanshupurohit6@gmail.com" },
            { icon: "phone-portrait-outline", title: "Phone", value: "+91 9927703176", link: "tel:+919927703176" },
            { icon: "calendar-outline", title: "Birthday", value: "Aug 05, 2000", isTime: true },
            { icon: "location-outline", title: "Location", value: "Dehradun, Uttarakhand (248001)", isAddress: true },
          ].map((item, index) => (
            <li key={index} className="contact-item">
              <div className="icon-box">
                <ion-icon name={item.icon}></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">{item.title}</p>
                {item.isTime ? (
                  <time dateTime="1982-06-23">{item.value}</time>
                ) : item.isAddress ? (
                  <address>{item.value}</address>
                ) : (
                  <a href={item.link} className="contact-link">
                    {item.value}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          {["facebook", "twitter", "instagram"].map((platform) => (
            <li key={platform} className="social-item">
              <a href="#" className="social-link">
                <ion-icon name={`logo-${platform}`}></ion-icon>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
