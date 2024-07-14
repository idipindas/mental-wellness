import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import About from "./pages/AboutPage";
import Services from "./pages/Services";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
       <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<About />} />

          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
