import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../../style/admin/services/servicesCard.css";

function ServicesCard() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/get-services');
        setServices(response.data);
        console.log("FETHHED?>>");
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    }
    fetchData();
  }, []);

  console.log(services);
  return (
    <div className="services-Cards">
      <div className="services-Card">
        {services.map((service) => (
          <div key={service._id}>
            <img src={service.image} alt={service.name}/>
            <div className="services-info">
            <h5>{service.name}</h5>
            <p>{service.shortDescription}</p>
            <hr />
              <div className="service-price-and-other-info">
                <h6>{service.price}</h6>
                <h6>100 Appoiments</h6>
                <h6>4.2 Stars</h6>
              </div>
            </div>
          </div>
        ))}
        </div>
    </div>
  );
}

export default ServicesCard;
