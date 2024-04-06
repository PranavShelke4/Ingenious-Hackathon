import React, { useState } from "react";
import "../../../style/user/services/AllServices.css";
import ServiceCards from "./ServiceCards";

function AllServices() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="AllServices">
        <div className="tab-container">
          <div
            className={`tab ${activeTab === "tab1" ? "active" : ""}`}
            onClick={() => handleTabClick("tab1")}
          >
            Assembly
          </div>
          <div
            className={`tab ${activeTab === "tab2" ? "active" : ""}`}
            onClick={() => handleTabClick("tab2")}
          >
            Mounting
          </div>
          <div
            className={`tab ${activeTab === "tab3" ? "active" : ""}`}
            onClick={() => handleTabClick("tab3")}
          >
            Moving
          </div>
          <div
            className={`tab ${activeTab === "tab4" ? "active" : ""}`}
            onClick={() => handleTabClick("tab4")}
          >
            Cleaning
          </div>
          <div
            className={`tab ${activeTab === "tab5" ? "active" : ""}`}
            onClick={() => handleTabClick("tab5")}
          >
            Outdoor Help
          </div>
          <div
            className={`tab ${activeTab === "tab6" ? "active" : ""}`}
            onClick={() => handleTabClick("tab6")}
          >
            Home Repairs
          </div>
          <div
            className={`tab ${activeTab === "tab7" ? "active" : ""}`}
            onClick={() => handleTabClick("tab7")}
          >
            Painting
          </div>
          <div
            className={`tab ${activeTab === "tab8" ? "active" : ""}`}
            onClick={() => handleTabClick("tab8")}
          >
            Trending
          </div>
        </div>
        <div className="tab-content">
          {activeTab === "tab1" && (
            <div>
              <ServiceCards />
            </div>
          )}
          {activeTab === "tab2" && <div>Content for Tab 2</div>}
          {activeTab === "tab3" && <div>Content for Tab 3</div>}
          {activeTab === "tab4" && (
            <div>
              <ServiceCards />
            </div>
          )}
          {activeTab === "tab5" && (
            <div>
              <ServiceCards />
            </div>
          )}
          {activeTab === "tab6" && (
            <div>
              <ServiceCards />
            </div>
          )}
          {activeTab === "tab7" && (
            <div>
              <ServiceCards />
            </div>
          )}
          {activeTab === "tab8" && (
            <div>
              <ServiceCards />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AllServices;
