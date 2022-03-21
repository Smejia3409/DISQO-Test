import { Link } from "react-router-dom";

const Stats = () => {
  return (
    <>
      <h1>hello world</h1>
      <Link to="/">
        <button className="regularBtn">Close stats</button>
      </Link>
    </>
  );
};

export default Stats;
