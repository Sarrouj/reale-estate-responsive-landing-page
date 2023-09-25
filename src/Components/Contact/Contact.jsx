import "./Contact.css";
import {BsFillTelephoneFill} from 'react-icons/bs';

const Contact = () => {
  return (
    <div className="c-wrapper">
      <div className="container flexCenter">
        {/* Left Side */}
        <div className="c-leftSide">
          <div className="c-text">
            <span className="secondaryText">Our Contacts</span>
            <span className="primaryText">Easy To Contact Us</span>
            <span className="mainText">
              We always ready to help by providing the best services beleive a
              good place to live can make your life better
            </span>
          </div>
          <div className="cols-container">
            <div className="col-container">
              <div className="top-side flexCenter">
                <div className="icon col-icon"><BsFillTelephoneFill size={20}/></div>
                <div className="col-text">
                  <span className="col-title">Call</span>
                  <span color="col-number">021 123 145 14</span>
                </div>
              </div>
              <button className="button col-button">Call Now</button>
            </div>
            <div className="col-container">
              <div className="top-side flexCenter">
                <div className="icon col-icon"><BsFillTelephoneFill size={20}/></div>
                <div className="col-text">
                  <span className="col-title">Chat</span>
                  <span color="col-number">021 123 145 14</span>
                </div>
              </div>
              <button className="button col-button">Call Now</button>
            </div>
            <div className="col-container">
              <div className="top-side flexCenter">
                <div className="icon col-icon"><BsFillTelephoneFill size={20}/></div>
                <div className="col-text">
                  <span className="col-title">Video Call</span>
                  <span color="col-number">021 123 145 14</span>
                </div>
              </div>
              <button className="button col-button">Call Now</button>
            </div>
            <div className="col-container">
              <div className="top-side flexCenter">
                <div className="icon col-icon"><BsFillTelephoneFill size={20}/></div>
                <div className="col-text">
                  <span className="col-title">Message</span>
                  <span color="col-number">021 123 145 14</span>
                </div>
              </div>
              <button className="button col-button">Call Now</button>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="c-rightSide">
          <div className="col-imageContainer imageContainer">
            <img src="../../../public/images/estate9.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
