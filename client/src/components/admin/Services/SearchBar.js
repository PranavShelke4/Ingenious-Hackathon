import React, { useState, useEffect} from "react";
import axios from 'axios';
import "../../../style/admin/services/SearchBar.css";

function SearchBar() {
  const [showModal, setShowModal] = useState(false);
  var imageData="";
  // SAVE SERVICE DATA.
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    shortDescription: '',
    fullDescription: '',
    image: null,
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('services'));
    if (data) {
        setFormData(data);
    }
  }, []);

useEffect(() => {
    localStorage.setItem('services', JSON.stringify(formData));
  }, [formData]);


  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Function to convert File to Base64
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // Handle changes in Input Field while Adding New Service
  const onChangeName = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const onChangeCategory = (e) => {
    setFormData({ ...formData, category: e.target.value });
  };

  const onChangePrice = (e) => {
    setFormData({ ...formData, price: e.target.value });
  };

  const onChangeShortDesc = (e) => {
    setFormData({ ...formData, shortDescription: e.target.value });
  };

  const onChangeFullDesc = (e) => {
    setFormData({ ...formData, fullDescription: e.target.value });
  };

  const handleImageChange = async (e) => {
    imageData = await fileToBase64(e.target.files[0] );
    setFormData({ ...formData, image: imageData});
  };

  // Submitting the Service Data in the MongoDB Server.
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post('http://localhost:5000/add-services',formData)
      if (response.status === 201) {

        console.log('Service data Submitted successfully');
        
        // Optionally, reset form fields
        setFormData({
          name: '',
          category: '',
          price: '',
          shortDescription: '',
          fullDescription: '',
          image: null,
        });
      } else {
        console.error('Failed to submit service data');
      }
    } catch (error) {
      console.error('Error submitting service data:', error);
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
        <g opacity="0.7" clip-path="url(#clip0_16_6386)">
          <path
            d="M2.5 8.33333C2.5 9.09938 2.65088 9.85792 2.94404 10.5657C3.23719 11.2734 3.66687 11.9164 4.20854 12.4581C4.75022 12.9998 5.39328 13.4295 6.10101 13.7226C6.80875 14.0158 7.56729 14.1667 8.33333 14.1667C9.09938 14.1667 9.85792 14.0158 10.5657 13.7226C11.2734 13.4295 11.9164 12.9998 12.4581 12.4581C12.9998 11.9164 13.4295 11.2734 13.7226 10.5657C14.0158 9.85792 14.1667 9.09938 14.1667 8.33333C14.1667 7.56729 14.0158 6.80875 13.7226 6.10101C13.4295 5.39328 12.9998 4.75022 12.4581 4.20854C11.9164 3.66687 11.2734 3.23719 10.5657 2.94404C9.85792 2.65088 9.09938 2.5 8.33333 2.5C7.56729 2.5 6.80875 2.65088 6.10101 2.94404C5.39328 3.23719 4.75022 3.66687 4.20854 4.20854C3.66687 4.75022 3.23719 5.39328 2.94404 6.10101C2.65088 6.80875 2.5 7.56729 2.5 8.33333Z"
            stroke="#0B1C33"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.5 17.5L12.5 12.5"
            stroke="#0B1C33"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
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

            <form className="add-service-form" onSubmit={handleSubmit}>
              <div style={{ display: "flex", gap: "1rem" }}>
                <input
                  className="service-name-input"
                  id="service-input"
                  type="text"
                  placeholder="Service Name"
                  value={formData.name}
                  onChange={onChangeName}
                />
                <input
                  className="service-name-input"
                  id="service-input"
                  type="text"
                  placeholder="Service Category"
                  value={formData.category}
                  onChange={onChangeCategory}
                />
                <input
                  id="service-input"
                  type="number"
                  placeholder="Service Price"
                  value={formData.price}
                  onChange={onChangePrice}
                />
              </div>
              <input
                id="service-input"
                type="text"
                placeholder="Service Short Description"
                value={formData.shortDescription}
                onChange={onChangeShortDesc}
              />{" "}
              <br />
              <textarea
                id="service-input"
                type="text"
                placeholder="Service Long Description"
                value={formData.fullDescription}
                onChange={onChangeFullDesc}
              />{" "}
              <br />
              <label>Upload your file</label>
              <br />
              <div class="file-input">
                <input id="service-input" type="file" class="real-input" onChange={handleImageChange} />
                <div class="button">
                  Choose File <span>or drop file</span>
                </div>
              </div>
              <button type="submit" className="Add-Service-btn">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
