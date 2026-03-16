import "./Navbar.css";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <Link className="logo" to="/">
          <img src="https://patomarcoffee.cl/wp-content/uploads/2025/07/Pago-de-derechosRecurso-10.png" />
        </Link>

        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
          <Link to="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
          <Link to="/carta" onClick={() => setMenuOpen(false)}>
            Carta
          </Link>
          <Link to="/contacto" onClick={() => setMenuOpen(false)}>
            Contacto
          </Link>
          <Link to="/talleres" onClick={() => setMenuOpen(false)}>
            Talleres
          </Link>
          <Link to="/recompensas" onClick={() => setMenuOpen(false)}>
            Recompensas
          </Link>
        </nav>

        <div className="socials">
          <Link to="https://www.instagram.com/patomarcoffee/">
            <FaInstagram />
          </Link>
          <Link to="https://www.facebook.com/profile.php?id=61560247997998">
            <FaFacebook />
          </Link>
          <Link to="https://www.tiktok.com/@soyjosefarfan">
            <FaTiktok />
          </Link>
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      <div style={{ height: "84px" }} />
    </>
  );
}
