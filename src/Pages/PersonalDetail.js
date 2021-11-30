import React from "react";

const PersonalDetail = () => {
  return (
    <div className="container">
      <h1>Personal Details</h1>
      <form method="post">
        <div className="form-group">
          <input type="text" id="firstname" placeholder="First Name"/>
        </div>
        <div className="form-group">
          <input type="text" id="lastname" placeholder="Last Name"/>
        </div>
        <div className="form-group">
          <input type="radio" id="male" name="gender" value="male" />
          <label htmlFor="male"> Male </label>
          <input type="radio" id="female" name="gender" value="female" />
          <label htmlFor="female"> Female </label>
          <input type="radio" id="other" name="gender" value="other" />
          <label htmlFor="other"> Other </label>
        </div>
        <div className="form-group">
          <label htmlFor="dob">DoB: </label>
          <input id="dob" type="date" />
        </div>
      </form>
    </div>
  );
};

export default PersonalDetail;
