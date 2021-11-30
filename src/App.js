import {Outlet, useLocation, useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  let location = useLocation();
  let navigate = useNavigate();
  const nextHandler = () => {
    switch (location.pathname) {
      case "/":
        navigate("/address-detail");
        break;
      case "/personal-detail":
        navigate("/address-detail");
        break;
      case "/address-detail":
        navigate("/payment-detail");
        break;
      case "/payment-detail":
        submit()
        break;
    }
  };

  const submit = () => {
    console.log("submit")
  }

  const previousHandler = () => {
    if (location.pathname === "/" || "/personal-detail" || "/address-detail" || "/payment-detail") {
      navigate(-1);
    }
  };
  return (
    <div className="App">
      <Outlet />
      <div className="button-group">
        <button id="previous" onClick={previousHandler}>
          Previous
        </button>
        <button id="next" onClick={nextHandler}>
          {location.pathname === "/payment-detail" ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default App;
