import React from "react";

const ConfirmedBooking = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        textAlign: "center",
      }}
    >
      <div>
        <h2>Thank You!</h2>
        <p>Your reservation has been successfully confirmed.</p>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
