import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./Homepage";
import BookingPage from "./BookingPage";
import About from "./Chicago";
import ConfirmedBooking from "./ConfirmedBooking";
import CommingSoon from "./CommingSoon";
import { useEffect, useReducer } from "react";
import { fetchAPI, submitAPI } from "../api.js";

// 1. Export the reducer function to make it testable
export const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    return fetchAPI(new Date(action.payload));
  }
  if (action.type === "INITIALIZE_TIMES") {
    return action.payload;
  }
  return state;
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, []);
  const navigate = useNavigate();

  useEffect(() => {
    const initialTimes = fetchAPI(new Date());
    dispatch({ type: "INITIALIZE_TIMES", payload: initialTimes });
  }, []);

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/booking-confirmed");
    }
  };

  return (
    <main className="site-main">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        ></Route>
        <Route path="/booking-confirmed" element={<ConfirmedBooking />}></Route>
        <Route path="/comming-soon" element={<CommingSoon />}></Route>
      </Routes>
    </main>
  );
}

export default Main;
