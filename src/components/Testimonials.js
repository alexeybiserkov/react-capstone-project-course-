// testimonialsData: random data for 4 testimonials
const testimonialsData = [
  {
    id: 1,
    name: "Emily R.",
    rating: 4.5,
    text: "This service exceeded all my expectations. The results were delivered quickly and the quality is outstanding!",
    avatarUrl: "https://picsum.photos/id/1012/60/60",
  },
  {
    id: 2,
    name: "Alex K.",
    rating: 5,
    text: "A game changer! Highly recommend this product to anyone looking for efficiency and reliability.",
    avatarUrl: "https://picsum.photos/id/1025/60/60",
  },
  {
    id: 3,
    name: "Sara B.",
    rating: 4,
    text: "Good value for money. There was a small hiccup with delivery, but support resolved it quickly.",
    avatarUrl: "https://picsum.photos/id/1027/60/60",
  },
  {
    id: 4,
    name: "Mike H.",
    rating: 3.5,
    text: "Absolutely perfect! The interface is intuitive, and the features are exactly what I needed. Five stars!",
    avatarUrl: "https://picsum.photos/id/1062/60/60",
  },
];

// Star rating component (for display)
const StarRating = ({ rating }) => {
  const totalStars = 5;

  return (
    <div
      className="testimonial-rating"
      role="img"
      // Important for accessibility: tells screen readers the actual rating
      aria-label={`Rating: ${rating} out of ${totalStars} stars`}
    >
      <div
        className="stars-visual"
        // Pass the rating value to CSS as a variable
        style={{ "--rating": rating }}
      >
        {/* Unicode star characters (5 times) */}
        {"★★★★★"}
      </div>
    </div>
  );
};

// Main Testimonials component
const Testimonials = () => {
  return (
    // Use <section> for thematic grouping
    <section className="testimonials-section">
      <div className="container">
        {/* Section heading for accessibility */}
        <h2>Testimonials</h2>

        {/* Use <ul> for a list of testimonials */}
        <ul className="testimonials-list">
          {testimonialsData.map((item) => (
            // Use <li> for each testimonial item
            <li className="testimonial-item" key={item.id}>
              {/* Star Rating Component */}
              <StarRating rating={item.rating} />

              {/* Use <blockquote> for the quote text (semantic for citation) */}
              <blockquote className="testimonial-text">
                <p>{item.text}</p>
              </blockquote>

              <div className="testimonial-user-info">
                {/* Use <img> for the avatar */}
                <img
                  className="testimonial-user-avatar"
                  src={item.avatarUrl}
                  alt={`Avatar of ${item.name}`} // Alt text is crucial for accessibility
                  width="60"
                  height="60"
                />
                {/* Name of the user/author */}
                <div className="testimonial-user-name">{item.name}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
