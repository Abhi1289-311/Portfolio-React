import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="brand">Abhilash Gandham</div>
      <nav>
        <NavLink to="/" end className="link">Home</NavLink>
        <NavLink to="/about" className="link">About</NavLink>
        <NavLink to="/projects" className="link">Latest Projects</NavLink>
        <NavLink to="/contact" className="btn">Contact</NavLink>
      </nav>
    </header>
  );
}
