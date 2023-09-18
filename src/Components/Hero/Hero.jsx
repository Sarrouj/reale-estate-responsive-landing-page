import "./Hero.css";
import { HiMapPin } from "react-icons/hi2";
import Counter from "./Counter/Counter";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="container flexCenter">
        {/* Left Side */}
        <div className="leftSide">
          <div className="title">
            <p>
              Discover <br />
              Most Suitable
              <br />
              Property
            </p>
          </div>
          <div className="text">
            <p className="mainText">
              Find a variety of properties that suit you very easilty <br />
              Forget all difficulties in finding a residence for you
            </p>
          </div>
          <div className="searchBar flexCenter">
            <HiMapPin size={25} className="icon"/>
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="numbers flexCenter">
            <Counter title='Premium Products' start={8000} end={9000}/>
            <Counter title='Happy Customers' start={1900} end={2000}/>
            <Counter title='Award Winning' start={0} end={28}/>
          </div>
        </div>
        {/* Right Side */}
        <div className="rightSide">
          <div className="imageContainer">
            <img src="../../../public/images/real1.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
