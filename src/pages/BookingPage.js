import BookingForm from "../components/BookingForm";

const BookingPage = (props) => {
  return (
    <section>
      <div className="container">
        <h1>Table reservation</h1>
        <BookingForm {...props} />
      </div>
    </section>
  );
};

export default BookingPage;
