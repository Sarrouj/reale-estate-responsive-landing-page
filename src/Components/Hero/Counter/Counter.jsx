import CountUp from "react-countup";
import "./Counter.css";

// eslint-disable-next-line react/prop-types
export default function Counter({ end, title, start }) {
  return (
    <div className="number">
      <div className="flexCenter">
        <CountUp duration={5} className="counter" end={end} start={start} />
        <span className="secondaryText">+</span>
      </div>
      <span className="mainText">{title}</span>
    </div>
  );
}
