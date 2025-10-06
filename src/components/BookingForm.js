import React, { useState, useEffect } from "react";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const today = new Date().toISOString().split("T")[0];

  const [date, setDate] = useState(today);
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  // Pre-select the first available time when the list of times changes.
  useEffect(() => {
    if (availableTimes && availableTimes.length > 0) {
      setTime(availableTimes[0]);
    }
  }, [availableTimes]);

  const isFormValid = date && time && guests >= 1 && guests <= 10;

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    if (dispatch) {
      dispatch({ type: "UPDATE_TIMES", payload: newDate });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      return;
    }
    submitForm({ date, time, guests, occasion });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={handleDateChange}
            required
            min={today}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            {availableTimes &&
              availableTimes.map((t) => <option key={t}>{t}</option>)}
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
            required
            aria-describedby="guests-error"
          />
          {(guests < 1 || guests > 10) && (
            <p
              id="guests-error"
              style={{ color: "red", fontSize: "0.8rem", marginTop: "-15px" }}
            >
              Please enter a number between 1 and 10.
            </p>
          )}
        </fieldset>
        <fieldset>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            required
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </fieldset>

        <div style={{ width: "100%" }}>
          <input
            className="btn-primary"
            type="submit"
            value="Make Your reservation"
            aria-label="On Click"
            disabled={!isFormValid}
          />
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
