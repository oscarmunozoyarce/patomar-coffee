import { FaCoffee } from "react-icons/fa";
import "./Home.css";

import Carousel from "../../Components/Carousel/Carousel";
import { Link } from "react-router";

function Home() {
  return (
    <div className="home-container">
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
    </div>
  );
}

export default Home;
