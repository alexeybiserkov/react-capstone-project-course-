import chicagoImage from "../assets/images/history.png";

const About = () => {
  return (
    <section className="call-to-action light">
      <div className="container">
        <div className="call-to-action-row flex-row space-between align-center gap-20">
          <div className="call-to-action-content">
            <h1>
              Little Lemon <small>Chicago</small>
            </h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>
          </div>
          <div className="call-to-action-image has-two">
            <img
              src={chicagoImage}
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

export default About;
