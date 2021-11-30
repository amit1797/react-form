import React from "react";

const PaymentDetail = () => {
  return (
    <div className="container">
      <h1>Payment Detail</h1>
      <form action="#" method="post">
        <div className="form-group">
          <input type="number" name="cardno" id="cardno" placeholder="Card Number" />
        </div>
        <div className="form-group">
          <input type="text" name="name" id="name" placeholder="Card Holder's Name" />
        </div>
        <div className="form-group">
          <input type="month" name="month" id="month" />
        </div>
        <div className="form-group">
          <input type="number" name="cvv" id="cvv" placeholder="CVV"/>
        </div>
      </form>
    </div>
  );
};

export default PaymentDetail;
