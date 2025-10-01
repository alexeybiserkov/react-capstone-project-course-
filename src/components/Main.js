import { Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import BookingPage from "./BookingPage";
import About from "./Chicago";

function Main() {
  return (
    <main className="site-main">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>\
        <Route path="/about" element={<About />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </main>
  );
}

export default Main;
