import React, { useState } from 'react';
import axios from 'axios';

const ServiceForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    price: '',
    shortDescription: '',
    fullDescription: '',
    // image: null,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? e.target.files[0] : value,
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
      const response = await axios.post('http://localhost:5000/services',formDataToSend);
      if (response.status === 201) {

        console.log('Service data Submitted successfully');
        // Optionally, reset form fields
        setFormData({
          title: '',
          category: '',
          price: '',
          shortDescription: '',
          fullDescription: '',
          // image: null,
        });
      } else {
        console.error('Failed to submit service data');
      }
    } catch (error) {
      console.error('Error submitting service data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Service Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Service Category:
        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="painter">painter</option>
          <option value="hair dresser">hair dresser</option>
          <option value="Barber">Barber</option>
          
          {/* Populate with categories */}
        </select>
      </label>
      <br />
      <label>
        Price per hour:
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Short Description (limited to 100 words):
        <textarea
          name="shortDescription"
          value={formData.shortDescription}
          onChange={handleChange}
          maxLength={100}
          required
        />
      </label>
      <br />
      <label>
        Full Description:
        <textarea
          name="fullDescription"
          value={formData.fullDescription}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Image:
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ServiceForm;
