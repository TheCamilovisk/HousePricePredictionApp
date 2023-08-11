import React from 'react'
import "./App.css"

const App = () => {
  return (
    <>
    <form action="#">
      <label htmlFor="neighborhood">Neighborhood</label>
      <input type="text" name="neighborhood" id="neighborhood" />
      <label htmlFor="property_type">Property Type</label>
      <select name="property_type" id="property_type">
        <option value="Apartament" selected>Apartament</option>
        <option value="House">House</option>
      </select>
      <label htmlFor="usable_area">Usable Area</label>
      <input type="text" name="usable_area" id="usable_area" />
      <label htmlFor="ad_date"></label>
      <input type="date" name="ad_date" id="ad_date" />
      <label htmlFor="bathrooms">Bathrooms</label>
      <input type="range" name="bathrooms" id="bathrooms" min="0" max="7" />
      <label htmlFor="suites">Suites</label>
      <input type="range" name="suites" id="suites" min="0" max="6" />
      <label htmlFor="bedrooms">Bedrooms</label>
      <input type="range" name="bedrooms" id="bedrooms" min="0" max="5" />
      <label htmlFor="parking_spots">Parking Spots</label>
      <input type="range" name="parking_spots" id="parking_spots" min="0" max="7" />
      <label htmlFor="condominium_fee">Condominium Fee</label>
      <input type="text" name="condominium_fee" id="condominium_fee" />
      <label htmlFor="annual_iptu_tax">Annual IPTU Tax</label>
      <input type="text" name="annual_iptu_tax" id="annual_iptu_tax" />
      <button type="submit">Predict</button>
    </form>
    </>
  )
}

export default App