import React, { useState } from "react";
import axios from "axios";
import "../../../style/admin/services/SearchBar.css";

function SearchBar() {
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    shortDescription: "",
    fullDescription: "",
    image: null, // Added image field to formData
  });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? e.target.files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    // Send formDataToSend to backend endpoint for saving data
    try {
      const response = await axios.post(
        "http://localhost:8000/services",
        formDataToSend
      );
      if (response.status === 201) {
        console.log("Service data Submitted successfully");
        // Reset form fields
        setFormData({
          title: "",
          category: "",
          price: "",
          shortDescription: "",
          fullDescription: "",
          image: null,
        });
        // Close modal
        toggleModal();
      } else {
        console.error("Failed to submit service data");
      }
    } catch (error) {
      console.error("Error submitting service data:", error);
    }
  };

  return (
    <div className="Search-Bar-section">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="search-icon"
      >
        <g opacity="0.7" clipPath="url(#clip0_16_6386)">
          <path
            d="M2.5 8.33333C2.5 9.09938 2.65088 9.85792 2.94404 10.5657C3.23719 11.2734 3.66687 11.9164 4.20854 12.4581C4.75022 12.9998 5.39328 13.4295 6.10101 13.7226C6.80875 14.0158 7.56729 14.1667 8.33333 14.1667C9.09938 14.1667 9.85792 14.0158 10.5657 13.7226C11.2734 13.4295 11.9164 12.9998 12.4581 12.4581C12.9998 11.9164 13.4295 11.2734 13.7226 10.5657C14.0158 9.85792 14.1667 9.09938 14.1667 8.33333C14.1667 7.56729 14.0158 6.80875 13.7226 6.10101C13.4295 5.39328 12.9998 4.75022 12.4581 4.20854C11.9164 3.66687 11.2734 3.23719 10.5657 2.94404C9.85792 2.65088 9.09938 2.5 8.33333 2.5C7.56729 2.5 6.80875 2.65088 6.10101 2.94404C5.39328 3.23719 4.75022 3.66687 4.20854 4.20854C3.66687 4.75022 3.23719 5.39328 2.94404 6.10101C2.65088 6.80875 2.5 7.56729 2.5 8.33333Z"
            stroke="#0B1C33"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 17.5L12.5 12.5"
            stroke="#0B1C33"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_16_6386">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <input placeholder="Search" className="Search-Bar" />

      <button className="Add-Service" onClick={toggleModal}>
        Add Service
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <h5>Service add form</h5>
            <p>Please fill the form and upload the file</p>

            <form onSubmit={handleSubmit} className="add-service-form">
              <div style={{ display: "flex", gap: "1rem" }}>
                <input
                  className="service-name-input"
                  id="service-input"
                  type="text"
                  placeholder="Service Title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />

                <input
                  id="service-input"
                  placeholder="Service Price per hour"
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>

              <input
                id="service-input"
                type="text"
                placeholder="Service Short Description"
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleChange}
                maxLength={30}
                required
              />
              <br />

              <textarea
                id="service-input"
                type="text"
                placeholder="Service Long Description"
                name="fullDescription"
                value={formData.fullDescription}
                onChange={handleChange}
                required
              />

              <div style={{ display: "flex", gap: "1rem", marginTop: "-2%" }}>
                <div style={{ width: "70%" }}>
                  <label className="mb-2">Upload your file</label>
                  <br />
                  <div className="file-input">
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <label>
                  Service Category: <br />
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="mt-2 category"
                  >
                    <option value="">Select Category</option>
                    <option value="painter">painter</option>
                    <option value="hair dresser">hair dresser</option>
                    <option value="Barber">Barber</option>
                  </select>
                </label>
              </div>
              <button type="submit" className="Add-Service-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
