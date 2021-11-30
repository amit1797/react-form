import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PersonalDetail from "./Pages/PersonalDetail";
import PaymentDetail from "./Pages/PaymentDetail";
import AddressDetail from "./Pages/AddressDetail";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<PersonalDetail />} />
        <Route path="personal-detail" element={<PersonalDetail />} />
        <Route path="address-detail" element={<AddressDetail />} />
        <Route path="payment-detail" element={<PaymentDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
