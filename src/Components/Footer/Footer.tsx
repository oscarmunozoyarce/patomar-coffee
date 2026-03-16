import "./Footer.css";
import { FaEnvelope, FaMapPin, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <>
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
            <a href="/#inicio">Inicio</a>
            <a href="/#nosotros">Nuestra Historia</a>
            <a href="/#eventos">Servicios para Eventos</a>
            <a href="/#equipo">El Equipo</a>
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
    </>
  );
}
