import callToACtionImage from "../assets/images/mario_adrian_a.jpg";

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="container">
        <div className="call-to-action-row flex-row space-between align-center gap-20">
          <div className="call-to-action-content">
            <h1>
              Little Lemon <small>Chicago</small>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="btn-primary">Reserve a Table</button>
          </div>
          <div className="call-to-action-image">
            <img
              src={callToACtionImage}
              alt="Little LemonChicago"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
