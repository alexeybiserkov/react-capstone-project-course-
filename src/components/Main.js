import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "../pages/Homepage";
import BookingPage from "../pages/BookingPage";
import About from "../pages/About";
import ConfirmedBooking from "../pages/ConfirmedBooking";
import ComingSoon from "../pages/ComingSoon";
import { useEffect, useReducer } from "react";
import { fetchAPI, submitAPI } from "../api.js";

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

  // Fetches initial available times when the component mounts.
  useEffect(() => {
    const initialTimes = fetchAPI(new Date());
    dispatch({ type: "INITIALIZE_TIMES", payload: initialTimes });
  }, []);

  // Navigates to the booking confirmation page upon successful form submission.
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
        <Route path="/comming-soon" element={<ComingSoon />}></Route>
      </Routes>
    </main>
  );
}

export default Main;
