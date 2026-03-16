import { useState } from "react";
import {
  FaCoffee,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapPin,
  FaPhone,
  FaTiktok,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Home.css";

import Carousel from "../../Components/Carousel/Carousel";
import { Link } from "react-router";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <header className="header">
        <Link className="logo" to="/">
          <img src="https://patomarcoffee.cl/wp-content/uploads/2025/07/Pago-de-derechosRecurso-10.png" />
        </Link>

        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
          <Link to="#">Blog</Link>
          <Link to="#">Carta</Link>
          <Link to="#">Contacto</Link>
          <Link to="#">Talleres</Link>
          <Link to="#">Recompensas</Link>
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

      <section id="inicio" className="hero">
        <img
          className="hero-image"
          src="https://patomarcoffee.cl/wp-content/uploads/2024/09/IMG_7567-scaled.webp"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>
            Un sabor único <span className="highlight">pa'todos</span>
          </h1>

          <p>Calidad artesanal en cada taza.</p>

          <div className="hero-buttons">
            <Link className="btn-primary" to="#">
              Revisa nuestra carta
            </Link>

            <Link className="btn-secondary" to="#">
              Descubre nuestra historia
            </Link>
          </div>

          <Link className="scroll-indicator" to="#nosotros">
            <span>Desliza para más</span>
            <div className="arrow"></div>
          </Link>
        </div>
      </section>

      <section id="nosotros" className="about">
        <div className="about-container">
          <div className="about-image">
            <img src="https://patomarcoffee.cl/wp-content/uploads/2024/09/IMG_8079-768x576.webp" />
          </div>

          <div className="about-text">
            <span className="tag">Nuestra Esencia</span>

            <h2>Sobre nosotros :)</h2>

            <p>
              La idea de crear un carrito para llevar café de especialidad «pa’
              todas partes» nació de una pequeña pero brillante intuición de
              Ivette.
            </p>

            <p>
              Como padres, confiamos en su visión y decidimos apostar por ella,
              creyendo que una gran idea siempre puede crecer.
            </p>

            <p>Nuestra misión es sencilla:</p>

            <blockquote>
              Llevar el mejor café de especialidad hasta ti, sin límites, y
              hacer que cada taza sea una experiencia única.
            </blockquote>
          </div>
        </div>
      </section>

      <section id="eventos" className="events">
        <div className="events-container">
          <div className="events-header">
            <h2>¿Tienes un evento?</h2>
            <p>Estamos pa' todos los eventos</p>
          </div>

          <div className="events-carousel">
            <Carousel />
          </div>

          <div className="events-cta">
            <h2>Nos gustaría ser parte</h2>
            <p>¡Contactanos!</p>
            <button>Contacto</button>
          </div>
        </div>
      </section>

      <section id="equipo" className="team">
        <div className="team-container">
          <div className="team-header">
            <h2>Nuestro Equipo</h2>
            <div className="team-divider"></div>
          </div>

          <div className="team-grid">
            <div className="team-card">
              <div className="team-img">
                <img src="https://patomarcoffee.cl/wp-content/uploads/2024/09/B2175480-2CE9-43C9-83C0-6AF21A9924CF-e1725547541740.webp" />
              </div>
              <h4>Joh</h4>
              <span>Barista</span>
              <p>
                "Encargado de preparar cada cafecito. ¡Nos vemos en la barra!"
              </p>
            </div>

            <div className="team-card">
              <div className="team-img">
                <img src="https://patomarcoffee.cl/wp-content/uploads/2024/09/Ivette-e1725547633627.webp" />
              </div>
              <h4>Ivetcita</h4>
              <span>Trainer Barista</span>
              <p>
                "Nuestra mini barista en entrenamiento e inspiración del
                equipo."
              </p>
            </div>

            <div className="team-card">
              <div className="team-img">
                <img src="https://patomarcoffee.cl/wp-content/uploads/2024/09/Sandra-e1725547751803.webp" />
              </div>
              <h4>Sandrita</h4>
              <span>Pastelera</span>
              <p>"Creadora de los dulces sueños que acompañan tu café."</p>
            </div>

            <div className="team-card">
              <div className="team-img">
                <img src="https://patomarcoffee.cl/wp-content/uploads/2024/09/IMG_7690-scaled-e1725547873199.webp" />
              </div>
              <h4>Lucky</h4>
              <span>Guardiana</span>
              <p>"La perrita dulce que cuida nuestro carrito con alegría."</p>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="newsletter-container">
          <div>
            <h3>¡Atención, amantes del café! ☕</h3>
            <p>Prometemos no enviar spam... solo espresso 😉</p>
          </div>

          <div className="newsletter-form">
            <input type="email" placeholder="ejemplo@mail.com" />
            <button>
              Suscríbete <FaCoffee />
            </button>
          </div>
        </div>
      </section>

      <footer className="footer-full">
        <div className="footer-container">
          <div className="footer-brand">
            <img src="https://patomarcoffee.cl/wp-content/uploads/2025/07/Pago-de-derechosRecurso-10.png" />
            <p>
              Experiencias premium de café de especialidad. Llevamos la barra de
              café profesional a tu lugar de preferencia.
            </p>
          </div>

          <div>
            <h5>Navegación</h5>
            <Link to="#inicio">Inicio</Link>
            <Link to="#nosotros">Nuestra Historia</Link>
            <Link to="#eventos">Servicios para Eventos</Link>
            <Link to="#equipo">El Equipo</Link>
          </div>

          <div>
            <h5>Contacto</h5>
            <p>
              <FaEnvelope /> patomarcoffee@gmail.com
            </p>
            <p>
              <FaPhone /> +569 5154 3540
            </p>
            <p>
              <a href="https://maps.app.goo.gl/ibNwzakoyN1mmZyK9">
                <FaMapPin /> Angol #1621 Renca
              </a>
            </p>

            <section className="map-section">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d294.41005267887135!2d-70.72566942624805!3d-33.4005754686119!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c1e3a3d3569b%3A0xd46bc943d93dab1b!2sPatomar%20Coffee!5e0!3m2!1sen!2sus!4v1773450110121!5m2!1sen!2sus"
                  loading="lazy"
                ></iframe>
              </div>
            </section>
          </div>
        </div>

        <div className="footer-bottom">Pa'tomar Coffee. Hecho con amor.</div>
      </footer>
    </div>
  );
}

export default Home;
