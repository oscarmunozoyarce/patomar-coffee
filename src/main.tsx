import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/patomar-coffee/">
    <div className="app">
      <Navbar />
      <App />
      <Footer />
    </div>
  </BrowserRouter>,
);
