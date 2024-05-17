import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import Plans from "./pages/plans/Plans";
import Trainer from "./pages/trainer/Trainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Home />
      <About />
      <Contact />
      <NotFound />
      <Plans />
      <Trainer />
    </BrowserRouter>
  );
}

export default App;
