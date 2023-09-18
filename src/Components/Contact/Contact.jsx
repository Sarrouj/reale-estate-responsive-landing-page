import "./Contact.css";

const Contact = () => {
  return (
    <div className="c-wrapper">
      <div className="container flexCenter">
        {/* Left Side */}
        <div className="leftSide">
          <div className="text flexCenter">
            <span className="secondaryText">Our Contacts</span>
            <span className="primaryText">Easy To Contact uS</span>
            <span className="mainText">
              We always ready to help by providing the best services beleive a
              good place to live <br />
              can make your life better
            </span>
          </div>
          <div className="rightSide flexCenter">
            <div className="imageContainer">
                <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
