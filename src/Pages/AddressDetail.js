import React from "react";

const AddressDetail = () => {
  return (
    <div className="container">
      <h1>Address Details</h1>
      <form method="post">
        <div className="form-group">
          <input type="text" id="houseno" placeholder="House No., Building Name" />
        </div>
        <div className="form-group">
          <input type="text" id="colony" placeholder="Road Name, Area, Colony" />
        </div>
        <div className="form-group">
          <input type="text" id="city" placeholder="City" />
        </div>
        <div className="form-group">
          <input type="text" id="state" placeholder="State" />
        </div>
        <div className="form-group">
          <input type="text" id="pincode" placeholder="Pincode" />
        </div>
        <div className="form-group">
          <label> Type of adress:  </label>
          <input type="checkbox" value="home" name="addresstype" id="home"/>
          <label htmlFor="home">Home </label>
          <input type="checkbox" value="work" name="addresstype" id="work"/>
          <label htmlFor="work">Work</label>
        </div>
      </form>
    </div>
  );
};

export default AddressDetail;
