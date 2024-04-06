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
            className={`tab ${activeTab === "Assembly" ? "active" : ""}`}
            onClick={() => handleTabClick("Assembly")}
          >
            Tab 1
          </div>
          <div
            className={`tab ${activeTab === "tab2" ? "active" : ""}`}
            onClick={() => handleTabClick("tab2")}
          >
            Tab 2
          </div>
          <div
            className={`tab ${activeTab === "tab3" ? "active" : ""}`}
            onClick={() => handleTabClick("tab3")}
          >
            Tab 3
          </div>
        </div>
        <div className="tab-content">
          {activeTab === "Assembly" && (
            <div>
              <ServiceCards />
            </div>
          )}
          {activeTab === "tab2" && <div>Content for Tab 2</div>}
          {activeTab === "tab3" && <div>Content for Tab 3</div>}
        </div>
      </div>
      <div className="tab-content">
        {activeTab === "Assembly" && <div>Content for Tab 1</div>}
        {activeTab === "tab2" && <div>Content for Tab 2</div>}
        {activeTab === "tab3" && <div>Content for Tab 3</div>}
      </div>
    </>
  );
}

export default AllServices;
