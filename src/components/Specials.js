import salad from "../assets/images/greek_salad.jpg";
import bruchetta from "../assets/images/bruchetta.svg";
import dessert from "../assets/images/lemon_dessert.jpg";
import deliveryIcon from "../assets/icons/delivery.svg";

// Data for all three special items
const specialsData = [
  {
    name: "Greek salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: salad,
    alt: "A bowl of fresh Greek salad with feta cheese.",
  },
  {
    name: "Bruchetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: bruchetta,
    alt: "Three pieces of Bruchetta on a plate.",
  },
  {
    name: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: dessert,
    alt: "A slice of Lemon Dessert with a mint leaf.",
  },
];

const Specials = () => {
  return (
    // Use <section> for thematic grouping
    <section className="specials-section">
      <div className="container">
        <div className="specials-title-group flex-row space-between align-center gap-20">
          <h2>Specials</h2>
          {/* Use <a> for navigation to an external or full menu page */}
          <a href="/menu" className="btn-primary">
            Online Menu
          </a>
        </div>

        {/* Use <ul> to clearly define a list of items (dishes) */}
        <ul className="specials-items-list">
          {specialsData.map((item, index) => (
            // Use <li> for each special item
            <li className="specials-item" key={index}>
              {/* Image is critical content */}
              <img src={item.image} alt={item.alt} width={300} height={250} />

              <div className="specials-item-content">
                <div className=" flex-row space-between align-center gap-20">
                  {/* Use <h3> for the product name within the list item */}
                  <h3>{item.name}</h3>

                  {/* Container for the price */}
                  <span className="specials-item-price">{item.price}</span>
                </div>

                {/* Standard description paragraph */}
                <div className="specials-item-description">
                  <p>{item.description}</p>
                </div>

                {/* Accessible button for ordering */}
                <button
                  // ARIA-label is read by screen readers instead of the button content
                  aria-label={`Order a delivery: ${item.name}`}
                >
                  {/* Display text is now simpler */}
                  Order a delivery
                  {/* Icon is decorative; hide it from screen readers */}
                  <img
                    src={deliveryIcon}
                    alt=""
                    aria-hidden="true"
                    width={15}
                    height={15}
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Specials;
