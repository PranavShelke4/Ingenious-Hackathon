import React, { useState } from "react";
import "../../../style/admin/dashboard/sidebar.css";
import AppointmentIcon from "../../../assets/admin/Appointment.svg";
import ServiceIcon from "../../../assets/admin/Service.svg";
import GoalsIcon from "../../../assets/admin/Goal.svg";

function Sidebar() {
  const [activeLink, setActiveLink] = useState(0);

  const navLinks = [
    {
      name: "Dashboard",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_16_4420)">
            <path
              d="M4 4H10V12H4V4Z"
              stroke="#FEFEFE"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 16H10V20H4V16Z"
              stroke="#FEFEFE"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 12H20V20H14V12Z"
              stroke="#FEFEFE"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 4H20V8H14V4Z"
              stroke="#FEFEFE"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_16_4420">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: "Appointment",
      icon: <img alt="Appointment" src={AppointmentIcon} />,
    },
    { name: "Service", icon: <img alt="Service" src={ServiceIcon} /> },
    { name: "Goals", icon: <img alt="Goals" src={GoalsIcon} /> },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <h4>Logo</h4>
      </div>
      <h6>MENU</h6>
      <div className="nav-links">
        {navLinks.map((link, index) => (
          <div
            className={`nav-link ${index === activeLink ? "active" : ""}`}
            onClick={() => setActiveLink(index)}
            key={index}
          >
            {link.icon}
            {link.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
