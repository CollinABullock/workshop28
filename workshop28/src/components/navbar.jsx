import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <div id="navbar">
    <Link to={"/"}>Home</Link>
    <Link to={"/red"}>Rocking Red</Link>
    <Link to={"/blue"}>Bitching Blue</Link>
    <Link to={"/green"}>Gracious Green</Link>
    </div>
    </>
  );
}