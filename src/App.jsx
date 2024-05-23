import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import OurCoaching from "./pages/notFound/OurCoaching";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/ourCoaching" element={<OurCoaching />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
