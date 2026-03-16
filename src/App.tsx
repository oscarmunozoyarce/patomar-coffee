import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Talleres from "./pages/Talleres/Talleres";
import Rewards from "./pages/Rewards/Rewards";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carta" element={<Menu />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/talleres" element={<Talleres />} />
      <Route path="/recompensas" element={<Rewards />} />
    </Routes>
  );
}

export default App;
