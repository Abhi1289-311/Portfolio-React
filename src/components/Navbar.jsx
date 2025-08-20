import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="brand">Abhilash Gandham</div>
      <nav>
        <NavLink to="/" end className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>About</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>Latest Projects</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>Contact</NavLink>
      </nav>
    </header>
  );
}
