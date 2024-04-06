import React from "react";
import "../../../style/user/services/Details.css";
import Serviceimage from "../../../assets/user/service.jpeg";
const Details = () => {
  return (
    <div className="details-main-container">
    <div className="details-container">
      <div className="details-heading">
        <h2 className="details-heading-title">Service Details</h2>
      </div>
      <div className="details-img">
        <img alt="img" src={Serviceimage} className="service-img" />
      </div>
      <div className="details-description">
        <h4 className="details-description-title">Overview</h4>
        <p>
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          <p>
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        </p>
      </div>
      <div className="details-review">
    <span className="review-head">Reviews</span>
    <button className="review-button">Add Review</button>
    <p>Our Customer Reviews</p>
    <div className="review">
        <div className="review-header">
            <h3>John Doe</h3>
            <div className="star-rating">⭐️⭐️⭐️⭐️⭐️</div> 
        </div>
        <p className="review-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    </div>
  
</div>

    </div>
    </div>
  );
};

export default Details;
