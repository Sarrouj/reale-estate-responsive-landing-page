import "./Header.css";

const Header = () => {
  return (
    <div className="h-wrapper">
      <div className="container flexCenter header">
        {/* Left Side */}
        <div className="logo">
          <img src="../../../public/images/logo.png" alt="" />
        </div>
        {/* Right Side */}
        <div className="links">
          <span className="mainText">Residencies</span>
          <span className="mainText">Our Value</span>
          <span className="mainText">Contact Us</span>
          <span className="mainText">Get Started</span>
          <button className="button">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
