import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1>House Price Prediction App</h1>
      <form action="#">
        <div className="features">
          <div className="featurefield">
            <label htmlFor="neighborhood">Neighborhood</label>
            <input
              type="text"
              name="neighborhood"
              id="neighborhood"
              placeholder="Neighborhood"
            />
          </div>
          <div className="featurefield">
            <label htmlFor="property_type">Property Type</label>
            <select name="property_type" id="property_type">
              <option value="Apartament" selected>
                Apartament
              </option>
              <option value="House">House</option>
            </select>
          </div>
          <div className="featurefield">
            <label htmlFor="usable_area">Usable Area</label>
            <input
              type="text"
              name="usable_area"
              id="usable_area"
              placeholder="0 m&sup2;"
            />
          </div>
        </div>
        <div className="features">
          <div className="featurefield">
            <label htmlFor="ad_date">Ad Date</label>
            <input type="date" name="ad_date" id="ad_date" />
          </div>
          <div className="featurefield">
            <label htmlFor="condominium_fee">Condominium Fee</label>
            <input
              type="text"
              name="condominium_fee"
              id="condominium_fee"
              placeholder="R$ 0,00"
            />
          </div>
          <div className="featurefield">
            <label htmlFor="annual_iptu_tax">Annual IPTU Tax</label>
            <input
              type="text"
              name="annual_iptu_tax"
              id="annual_iptu_tax"
              placeholder="R$ 0,00"
            />
          </div>
        </div>
        <div className="features">
          <div className="featurefield">
            <label htmlFor="bathrooms">Bathrooms</label>
            <div className="range-feature">
              <input
                type="range"
                name="bathrooms"
                id="bathrooms"
                min="0"
                max="7"
                value="1"
              />
              <p id="bathroomsValue">1</p>
            </div>
          </div>
          <div className="featurefield">
            <label htmlFor="suites">Suites</label>
            <div className="range-feature">
              <input
                type="range"
                name="suites"
                id="suites"
                min="0"
                max="6"
                value="0"
              />
              <p id="suitesValue">0</p>
            </div>
          </div>
          <div className="featurefield">
            <label htmlFor="bedrooms">Bedrooms</label>
            <div className="range-feature">
              <input
                type="range"
                name="bedrooms"
                id="bedrooms"
                min="0"
                max="5"
                value="1"
              />
              <p id="bedroomsValue">2</p>
            </div>
          </div>
          <div className="featurefield">
            <label htmlFor="parking_spots">Parking Spots</label>
            <div className="range-feature">
              <input
                type="range"
                name="parking_spots"
                id="parking_spots"
                min="0"
                max="7"
                value="1"
              />
              <p id="parkingSpotsValue">1</p>
            </div>
          </div>
        </div>
        <button type="submit" className="predict-btn">
          Predict
        </button>
      </form>
      <div className="prediction-area prediction-enabled">
        <p>The predicted house price is:</p>
        <div className="prediction">R$ 0,00</div>
      </div>
    </div>
  );
};

export default App;
